<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class UpdateFileCommand_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("update_file_commands");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_sort=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"sort"
		,array(
		
			'id'=>"sort"
				
		
		));
		$this->addField($f_sort);

		$f_file_name=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"file_name"
		,array(
		
			'length'=>50,
			'id'=>"file_name"
				
		
		));
		$this->addField($f_file_name);

		$f_command_param=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"command_param"
		,array(
		
			'length'=>255,
			'id'=>"command_param"
				
		
		));
		$this->addField($f_command_param);

		
		
		
	}

}
?>
