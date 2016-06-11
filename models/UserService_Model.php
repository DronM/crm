<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');

class UserService_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("user_services");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_user_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"user_id"
		,array(
		
			'id'=>"user_id"
				
		
		));
		$this->addField($f_user_id);

		$f_service_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"service_id"
		,array(
		
			'id'=>"service_id"
				
		
		));
		$this->addField($f_service_id);

		$f_dt_from=new FieldSQlDate($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"dt_from"
		,array(
		
			'id'=>"dt_from"
				
		
		));
		$this->addField($f_dt_from);

		$f_dt_to=new FieldSQlDate($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"dt_to"
		,array(
		
			'id'=>"dt_to"
				
		
		));
		$this->addField($f_dt_to);

		$f_closed=new FieldSQlBoolean($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"closed"
		,array(
		
			'id'=>"closed"
				
		
		));
		$this->addField($f_closed);

		$f_auto_prolongate=new FieldSQlBoolean($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"auto_prolongate"
		,array(
		
			'id'=>"auto_prolongate"
				
		
		));
		$this->addField($f_auto_prolongate);

		$f_quant=new FieldSQlFloat($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"quant"
		,array(
		
			'length'=>19,
			'id'=>"quant"
				
		
		));
		$this->addField($f_quant);

		
		
		
	}

}
?>
