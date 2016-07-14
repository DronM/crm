<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');

class ClientUser_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("client_users");
		
		$f_client_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"client_id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'id'=>"client_id"
				
		
		));
		$this->addField($f_client_id);

		$f_user_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"user_id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'id'=>"user_id"
				
		
		));
		$this->addField($f_user_id);

		
		
		
	}

}
?>
