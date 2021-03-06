<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');

class Client_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("clients");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_name=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"name"
		,array(
		'required'=>TRUE,
			'length'=>50,
			'id'=>"name"
				
		
		));
		$this->addField($f_name);

		$f_inn=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"inn"
		,array(
		
			'length'=>12,
			'id'=>"inn"
				
		
		));
		$this->addField($f_inn);

		$f_ext_id=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"ext_id"
		,array(
		
			'length'=>36,
			'id'=>"ext_id"
				
		
		));
		$this->addField($f_ext_id);

		$f_order_email=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"order_email"
		,array(
		
			'length'=>50,
			'id'=>"order_email"
				
		
		));
		$this->addField($f_order_email);

		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		
		$order->addField($f_name);

		
		
		
	}

}
?>
