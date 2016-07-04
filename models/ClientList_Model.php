<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class ClientList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("client_list");
		
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

		$f_inn=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"inn"
		,array(
		
			'alias'=>"ИНН"
		,
			'length'=>12,
			'id'=>"inn"
				
		
		));
		$this->addField($f_inn);

		$f_order_email=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"order_email"
		,array(
		
			'alias'=>"Эл.почта"
		,
			'length'=>50,
			'id'=>"order_email"
				
		
		));
		$this->addField($f_order_email);

		
		
		
	}

}
?>
