<?php
require("common/PHPMailer_5.2.4/class.phpmailer.php");

function get_val_or_die($n,$tag){
	$l = $n->getElementsByTagName($tag);
	if (!$l->length){
		throw new Exception(sprintf("No %s node in %s",$tag,$n->nodeName));
	}
	return $l->item(0)->nodeValue;
}


if (!file_exists($res_file = dirname(__FILE__).'/resources.xml')){
	throw new Exception('resources.xml not found!');
}

$MAIL_SUBJECT = 'Новые обновления 1с';

$dom=new DOMDocument();
$dom->load($res_file);
$configs = $dom->getElementsByTagName("config");

$loaded_url = NULL;
$modif = FALSE;
$new_releases = array();

for($i=0;$i<$configs->length;$i++){
	$node = $configs->item($i);
	
	if ($loaded_url!=$node->getAttribute('URL')){
		//loading
		$loaded_url = $node->getAttribute('URL');
		
		$res = array();
		exec('phantomjs '.dirname(__FILE__).'/get_updates.js '.$loaded_url,$res);
		$content = implode('',$res);
	}
	
	$group = sprintf('>%s</td>',$node->getAttribute('group'));
	$gr_pos = strpos($content,$group);
	if ($gr_pos!==FALSE){
		$gr_content = substr($content,$gr_pos);
		
		$title = sprintf('>%s</span>',$node->getAttribute('title'));
		$conf_pos = strpos($gr_content,$title);
		if ($conf_pos!==FALSE){
			//found config
			$tr_to_pos = strpos($gr_content,'</tr>',$conf_pos+strlen($title));		
			if ($tr_to_pos!==FALSE){			
				$tr_from_pos = strrpos(substr($gr_content,0,$conf_pos), '<tr');
				if ($tr_from_pos!==FALSE){
					$row = substr($gr_content,$tr_from_pos,$tr_to_pos - $tr_from_pos+5);									
					$xml = simplexml_load_string($row);				
					$release = (string)$xml->td[2]->span;
					
					if ($release!=$node->getAttribute('release')){
						$node->setAttribute('release',$release);
						$modif = TRUE;
						
						array_push($new_releases,array(
							'title'=>$node->getAttribute('title'),
							'group'=>$node->getAttribute('group'),
							'release'=>$release,
							'date'=>(string)$xml->td[0]->span
						));
					}
				}
			}
		}
	}
}

if ($modif){
	$mailFrom = $dom->getElementsByTagName("mailFrom");
	if ($mailFrom->length){
		$smtpHost = get_val_or_die($mailFrom->item(0),'smtpHOST');
		$smtpUser = get_val_or_die($mailFrom->item(0),'smtpUSER');
		$smtpPwd = get_val_or_die($mailFrom->item(0),'smtpPWD');
		$smtpPort = get_val_or_die($mailFrom->item(0),'smtpPORT');
		$fromName = get_val_or_die($mailFrom->item(0),'name');
		
		$body = 'ВНИМАНИЕ!!! Вышли новые обновления 1с:'.PHP_EOL;
		foreach($new_releases as $release){
			$body.= $release['group'].' '.$release['title'].' релиз '.$release['release'].' от '.$release['date'].PHP_EOL.PHP_EOL;
		}
		
		$mailTo = $dom->getElementsByTagName("mailTo");
		for($m=0;$m<$mailTo->length;$m++){		
			$toAddress = get_val_or_die($mailTo->item($m),'address');
			$toName = get_val_or_die($mailTo->item($m),'name');
			
			$mail= new PHPMailer();
			$mail->IsSMTP();
			$mail->Mailer 			= 'smtp';
			$mail->SMTPDebug 		= FALSE;
			$mail->CharSet			='UTF-8';				
			$mail->Host  			= $smtpHost;
			$mail->Port			= $smtpPort;
			$mail->SMTPAuth			= TRUE;
			$mail->AuthType			= 'LOGIN';
			$mail->Username			= $smtpUser;
			$mail->Password			= $smtpPwd;
			$mail->SMTPSecure		= 'ssl';
			$mail->setFrom($smtpUser, $fromName);
			$mail->addAddress($toAddress, $toName);
			$mail->AddReplyTo($smtpUser, $fromName);
			$mail->Subject			= $MAIL_SUBJECT;
			$mail->Body			= $body;
			$mail->Send();
			//echo 'mail: to addr='.$toAddress.' name='.$toName.' from '.$fromName.' body='.$body;
		}
	
	}

	$dom->save($res_file);
}
?>
