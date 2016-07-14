<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');

class Service_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("services");
		
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

		$f_descr=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"descr"
		,array(
		
			'alias'=>"Наименование"
		,
			'length'=>50,
			'id'=>"descr"
				
		
		));
		$this->addField($f_descr);

		$f_full_descr=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"full_descr"
		,array(
		
			'alias'=>"Описание"
		,
			'length'=>100,
			'id'=>"full_descr"
				
		
		));
		$this->addField($f_full_descr);

		$f_deleted=new FieldSQlBool($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"deleted"
		,array(
		
			'defaultValue'=>"FALSE"
		,
			'id'=>"deleted"
				
		
		));
		$this->addField($f_deleted);

		$f_service_period_id=new FieldSQlEnum($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"service_period_id"
		,array(
		
			'alias'=>"Период"
		,
			'id'=>"service_period_id"
				
		
		));
		$this->addField($f_service_period_id);

		$f_ext_id=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"ext_id"
		,array(
		
			'length'=>36,
			'id'=>"ext_id"
				
		
		));
		$this->addField($f_ext_id);

		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		
		$order->addField($f_descr);

		
		
		
	}

}
?>
