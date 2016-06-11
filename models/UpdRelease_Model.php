<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLText.php');

class UpdRelease_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("upd_releases");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_prog_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"prog_id"
		,array(
		
			'id'=>"prog_id"
				
		
		));
		$this->addField($f_prog_id);

		$f_release=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"release"
		,array(
		
			'length'=>20,
			'id'=>"release"
				
		
		));
		$this->addField($f_release);

		$f_descr=new FieldSQlText($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"descr"
		,array(
		
			'id'=>"descr"
				
		
		));
		$this->addField($f_descr);

		$f_file_name=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"file_name"
		,array(
		
			'length'=>100,
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

		$f_file_size=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"file_size"
		,array(
		
			'id'=>"file_size"
				
		
		));
		$this->addField($f_file_size);

		
		
		
	}

}
?>
