<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class UpdateArchive_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("update_archives");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_file_name=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"file_name"
		,array(
		
			'length'=>50,
			'id'=>"file_name"
				
		
		));
		$this->addField($f_file_name);

		$f_file_hash=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"file_hash"
		,array(
		
			'length'=>32,
			'id'=>"file_hash"
				
		
		));
		$this->addField($f_file_hash);

		$f_sort=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"sort"
		,array(
		
			'id'=>"sort"
				
		
		));
		$this->addField($f_sort);

		$f_file_size=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"file_size"
		,array(
		
			'id'=>"file_size"
				
		
		));
		$this->addField($f_file_size);

		$f_update_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"update_id"
		,array(
		
			'id'=>"update_id"
				
		
		));
		$this->addField($f_update_id);

		
		
		
	}

}
?>
