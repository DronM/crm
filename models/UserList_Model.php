<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class UserList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("user_list");
		
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

		$f_name=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"name"
		,array(
		'required'=>TRUE,
			'alias'=>"Наименование"
		,
			'length'=>50,
			'id'=>"name"
				
		
		));
		$this->addField($f_name);

		$f_email=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"email"
		,array(
		
			'alias'=>"Email"
		,
			'length'=>50,
			'id'=>"email"
				
		
		));
		$this->addField($f_email);

		$f_phone_cel=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"phone_cel"
		,array(
		
			'alias'=>"Телефон"
		,
			'length'=>50,
			'id'=>"phone_cel"
				
		
		));
		$this->addField($f_phone_cel);

		
		
		
	}

}
?>
