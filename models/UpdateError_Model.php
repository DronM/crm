<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class UpdateError_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("update_errors");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_dt=new FieldSQlDateTimeTZ($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"dt"
		,array(
		
			'id'=>"dt"
				
		
		));
		$this->addField($f_dt);

		$f_update_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"update_id"
		,array(
		
			'id'=>"update_id"
				
		
		));
		$this->addField($f_update_id);

		$f_config_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"config_id"
		,array(
		
			'id'=>"config_id"
				
		
		));
		$this->addField($f_config_id);

		$f_error_str=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"error_str"
		,array(
		
			'length'=>255,
			'id'=>"error_str"
				
		
		));
		$this->addField($f_error_str);

		
		
		
	}

}
?>
