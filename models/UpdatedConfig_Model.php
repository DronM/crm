<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');

class UpdatedConfig_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("updated_configs");
		
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

		
		
		
	}

}
?>
