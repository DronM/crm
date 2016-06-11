<?php

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');

class ClientConfig_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		$this->setDbName("public");
		
		$this->setTableName("client_configs");
		
		$f_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"id"
		,array(
		'required'=>TRUE,
			'primaryKey'=>TRUE,
			'autoInc'=>TRUE,
			'id'=>"id"
				
		
		));
		$this->addField($f_id);

		$f_descr=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"descr"
		,array(
		
			'length'=>80,
			'id'=>"descr"
				
		
		));
		$this->addField($f_descr);

		$f_path=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"path"
		,array(
		
			'length'=>250,
			'id'=>"path"
				
		
		));
		$this->addField($f_path);

		$f_ar_path=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"ar_path"
		,array(
		
			'length'=>250,
			'id'=>"ar_path"
				
		
		));
		$this->addField($f_ar_path);

		$f_ext_reps=new FieldSQlBoolean($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"ext_reps"
		,array(
		
			'defaultValue'=>"FALSE"
		,
			'id'=>"ext_reps"
				
		
		));
		$this->addField($f_ext_reps);

		$f_user_1c=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"user_1c"
		,array(
		
			'length'=>50,
			'id'=>"user_1c"
				
		
		));
		$this->addField($f_user_1c);

		$f_password_1c=new FieldSQlString($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"password_1c"
		,array(
		
			'length'=>50,
			'id'=>"password_1c"
				
		
		));
		$this->addField($f_password_1c);

		$f_untyp=new FieldSQlBoolean($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"untyp"
		,array(
		
			'id'=>"untyp"
				
		
		));
		$this->addField($f_untyp);

		$f_sql=new FieldSQlBoolean($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"sql"
		,array(
		
			'id'=>"sql"
				
		
		));
		$this->addField($f_sql);

		$f_ar_cnt=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"ar_cnt"
		,array(
		
			'id'=>"ar_cnt"
				
		
		));
		$this->addField($f_ar_cnt);

		$f_config_type_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"config_type_id"
		,array(
		
			'id'=>"config_type_id"
				
		
		));
		$this->addField($f_config_type_id);

		$f_user_id=new FieldSQlInt($this->getDbLink(),$this->getDbName(),$this->getTableName()
		,"user_id"
		,array(
		
			'id'=>"user_id"
				
		
		));
		$this->addField($f_user_id);

		
		
		
	}

}
?>
