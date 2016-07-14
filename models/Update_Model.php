<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');

class Update_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("updates");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_dt=new FieldSQlDate($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"dt"
		,array(
		
			'id'=>"dt"
				
		
		));
		$this->addField($f_dt);

		$f_release=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"release"
		,array(
		
			'length'=>20,
			'id'=>"release"
				
		
		));
		$this->addField($f_release);

		$f_comment=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"comment"
		,array(
		
			'length'=>250,
			'id'=>"comment"
				
		
		));
		$this->addField($f_comment);

		$f_ext_reps=new FieldSQlBool($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"ext_reps"
		,array(
		
			'defaultValue'=>"FALSE"
		,
			'id'=>"ext_reps"
				
		
		));
		$this->addField($f_ext_reps);

		$f_config_type_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"config_type_id"
		,array(
		
			'id'=>"config_type_id"
				
		
		));
		$this->addField($f_config_type_id);

		
		
		
	}

}
?>
