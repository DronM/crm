<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');

class Okei_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("okeis");
		
		$f_id=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>FALSE,
			'length'=>3,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_descr=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"descr"
		,array(
		
			'length'=>10,
			'id'=>"descr"
				
		
		));
		$this->addField($f_descr);

		$f_full_descr=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"full_descr"
		,array(
		
			'length'=>100,
			'id'=>"full_descr"
				
		
		));
		$this->addField($f_full_descr);

		$f_ext_id=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"ext_id"
		,array(
		
			'length'=>36,
			'id'=>"ext_id"
				
		
		));
		$this->addField($f_ext_id);

		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		
		$order->addField($f_descr);

		
		
		
	}

}
?>
