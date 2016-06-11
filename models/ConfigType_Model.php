<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class ConfigType_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("config_types");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_platform_id=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"platform_id"
		,array(
		
			'length'=>3,
			'id'=>"platform_id"
				
		
		));
		$this->addField($f_platform_id);

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

		
		
		
	}

}
?>
