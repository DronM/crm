<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class UpdReleaseList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("upd_releases_list");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'alias'=>"Код"
		,
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
		
			'alias'=>"Релиз"
		,
			'length'=>20,
			'id'=>"release"
				
		
		));
		$this->addField($f_release);

		
		
		
	}

}
?>
