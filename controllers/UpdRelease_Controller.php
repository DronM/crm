<?php

require_once(FRAME_WORK_PATH.'basic_classes/ControllerSQL.php');

require_once(FRAME_WORK_PATH.'basic_classes/FieldExtInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtText.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtDateTime.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtDate.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtPassword.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtBool.php');

class UpdRelease_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			
		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtInt('prog_id'
				,array('required'=>TRUE,
				'alias'=>'Код программы'
			));
		$pm->addParam($param);
		$param = new FieldExtString('release'
				,array(
				'alias'=>'Релиз'
			));
		$pm->addParam($param);
		$param = new FieldExtText('descr'
				,array(
				'alias'=>'Описание'
			));
		$pm->addParam($param);
		$param = new FieldExtString('file_name'
				,array(
				'alias'=>'Имя файла'
			));
		$pm->addParam($param);
		$param = new FieldExtString('file_hash'
				,array(
				'alias'=>'Хэш файла'
			));
		$pm->addParam($param);
		$param = new FieldExtInt('file_size'
				,array(
				'alias'=>'Размер файла'
			));
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('UpdRelease_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtInt('old_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		$param = new FieldExtInt('id'
				,array(
			
				'alias'=>'Код'
			));
			$pm->addParam($param);
		$param = new FieldExtInt('prog_id'
				,array(
			
				'alias'=>'Код программы'
			));
			$pm->addParam($param);
		$param = new FieldExtString('release'
				,array(
			
				'alias'=>'Релиз'
			));
			$pm->addParam($param);
		$param = new FieldExtText('descr'
				,array(
			
				'alias'=>'Описание'
			));
			$pm->addParam($param);
		$param = new FieldExtString('file_name'
				,array(
			
				'alias'=>'Имя файла'
			));
			$pm->addParam($param);
		$param = new FieldExtString('file_hash'
				,array(
			
				'alias'=>'Хэш файла'
			));
			$pm->addParam($param);
		$param = new FieldExtInt('file_size'
				,array(
			
				'alias'=>'Размер файла'
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			
				'alias'=>'Код'
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('UpdRelease_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('UpdRelease_Model');

			
		/* get_list */
		$pm = new PublicMethod('get_list');
		$pm->addParam(new FieldExtInt('browse_mode'));
		$pm->addParam(new FieldExtInt('browse_id'));		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));
		$pm->addParam(new FieldExtString('cond_fields'));
		$pm->addParam(new FieldExtString('cond_sgns'));
		$pm->addParam(new FieldExtString('cond_vals'));
		$pm->addParam(new FieldExtString('cond_ic'));
		$pm->addParam(new FieldExtString('ord_fields'));
		$pm->addParam(new FieldExtString('ord_directs'));
		$pm->addParam(new FieldExtString('field_sep'));
		
		$this->addPublicMethod($pm);
		
		$this->setListModelId('UpdReleaseList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('UpdRelease_Model');		

		
	}	
	
}
?>