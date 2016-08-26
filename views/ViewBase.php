<?php
require_once(FRAME_WORK_PATH.'basic_classes/ViewHTMLXSLT.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelStyleSheet.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelJavaScript.php');

require_once(FRAME_WORK_PATH.'basic_classes/ModelTemplate.php');
require_once(USER_CONTROLLERS_PATH.'Constant_Controller.php');


			require_once('models/MainMenu_Model_admin.php');
			require_once('models/MainMenu_Model_manager.php');
			require_once('models/MainMenu_Model_client.php');
		
class ViewBase extends ViewHTMLXSLT {	

	protected function addMenu(&$models){
		if (isset($_SESSION['role_id'])){
			$menu_class = 'MainMenu_Model_'.$_SESSION['role_id'];
			$models['mainMenu'] = new $menu_class();
		}	
	}
	
	protected function addConstants(&$models){
		if (isset($_SESSION['role_id'])){
			$dbLink = new DB_Sql();
			$dbLink->persistent=true;
			$dbLink->appname = APP_NAME;
			$dbLink->technicalemail = TECH_EMAIL;
			$dbLink->reporterror = DEBUG;
			$dbLink->database= DB_NAME;			
			$dbLink->connect(DB_SERVER,DB_USER,DB_PASSWORD,(defined('DB_PORT'))? DB_PORT:NULL);
		
			$contr = new Constant_Controller($dbLink);
			$list = array('grid_rows_per_page_count');
			$models['ConstantValueList_Model'] = $contr->getConstantValueModel($list);
		}	
	}

	public function __construct($name){
		parent::__construct($name);
				
		if (!DEBUG){
			//$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'styles.css'));
			
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'metisMenu.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'timeline.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'sb-admin-2.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'morris.css'));		
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'font-awesome.min.css'));						
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'style.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'dhtmlwindow.css'));
		
		
	
		}
		else{		
			
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'metisMenu.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'timeline.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'sb-admin-2.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'morris.css'));		
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'font-awesome.min.css'));						
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'style.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'dhtmlwindow.css'));
		
		
	
		}
		
		if (!DEBUG){
			$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'lib.js'));
			
			$script_id = VERSION;
		}
		else{		
			
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'jquery.min.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'bootstrap.min.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'bootstrap-datepicker.min.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'bootstrap-datepicker.ru.min.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'jquery.maskedinput.min.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'metisMenu.min.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'raphael-min.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'morris.min.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'sb-admin-2.js'));

		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/extend.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/App.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/CommonHelper.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DOMHelper.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DateHelper.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/EventHelper.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ConstantManager.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ServConnector.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ServResp.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ServRespXML.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/PublicMethod.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Controller.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ControllerDb.js'));		
				
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Model.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ModelXML.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ModeObjectXML.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ModelSingleRowXML.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ModelServRespXML.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Validator.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorString.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorBool.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorDate.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorDateTime.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorTime.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorInt.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorFloat.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorEnum.js'));				
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Field.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldString.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldEnum.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldBool.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldDate.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldDateTime.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldTime.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldInt.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldFloat.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldPassword.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldText.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/rs_rus.js'));
		
				
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/DataBinding.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Command.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/CommandBinding.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Control.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/Control.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ControlContainer.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ControlContainer.rs_rus.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ViewAjx.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ViewAjx.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ErrorControl.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Calculator.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/Calculator.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Button.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCtrl.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCalc.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonCalc.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCalendar.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonCalendar.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonClear.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonClear.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCmd.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonExpToExcel.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonExpToExcel.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonExpToPDF.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonExpToPDF.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonOpen.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonOpen.rs_rus.js'));				
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonInsert.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonInsert.rs_rus.js'));				
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonPrint.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonPrint.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonSelect.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonSelect.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonSelectRef.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonSelectRef.rs_rus.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonToggle.js'));		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Label.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Edit.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/Edit.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditRef.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditString.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditText.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditInt.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditFloat.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditPhone.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditDate.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditDateTime.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditTime.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditPassword.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditCheckBox.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditContainer.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/EditContainer.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditRadioGroup.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditRadio.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditSelect.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditSelectOption.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/EditSelect.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditSelectRef.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/EditSelectRef.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/EditRef.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridColumn.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridCell.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridCellHead.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridCellFoot.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridHead.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridRow.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridFoot.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridBody.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Grid.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/Grid.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridCommands.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/GridCommands.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridAjx.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/GridAjx.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/GridCommandsAjx.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/GridCommandsAjx.rs_rus.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonOK.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonOK.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonSave.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonSave.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCancel.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ButtonCancel.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ViewObjectAjx.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ViewObjectAjx.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ViewGridEditInlineAjx.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/ViewGridEditInlineAjx.rs_rus.js'));

		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/WindowPrint.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/WindowPrint.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/WindowQuestion.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/WindowQuestion.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/WindowForm.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/WindowFormObject.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/WindowFormObject.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/WindowFormModalBS.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/WindowMessage.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/actb.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/rs/actb.rs_rus.js'));

		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'forms/Client_Form.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'forms/User_Form.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'forms/UpdProgram_Form.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'forms/UpdRelease_Form.js'));

		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/User_Controller.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/SMSTemplate_Controller.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Platform_Controller.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ConfigType_Controller.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TimeZoneLocale_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/User_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Client_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Platform_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ConfigType_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Okei_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Service_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UserService_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UserMachine_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdProgram_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdRelease_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdateCommand_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdateFileCommand_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Update_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdateArchive_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientConfig_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdateError_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdatedConfig_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSTemplate_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSTemplateList_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSForSending_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSForSendingList_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/EmailTemplate_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/EmailTemplateList_Model.js'));
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Login_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Platform_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Client_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientList_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/User_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UserList_View.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ConfigType_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/TimeZoneLocale_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Service_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UpdProgram_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UpdProgramList_View.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UpdRelease_View.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Prototype_View.js'));
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/AppCRM.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/Enum_email_types.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/Enum_role_types.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/Enum_service_periods.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/Enum_sms_types.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/TimeZoneLocaleSelect.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/PlatformSelect.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/UserEdit.js'));		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/TimeZoneLocale_Controller.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Service_Controller.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientUser_Controller.js'));	
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientUserList_Model.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdProgramList_Model.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/UpdProgram_Controller.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/UpdRelease_Controller.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UpdReleaseList_Model.js'));		
	$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Client_Controller.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UserList_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientList_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ConstantList_Model.js'));$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Constant_Controller.js'));
			if (isset($_SESSION['scriptId'])){
				$script_id = $_SESSION['scriptId'];
			}
			else{
				$script_id = VERSION;
			}			
		}
		
		$this->getVarModel()->addField(new Field('role_id',DT_STRING));
		$this->getVarModel()->addField(new Field('role_descr',DT_STRING));
		$this->getVarModel()->addField(new Field('user_name',DT_STRING));
		
		
		$this->getVarModel()->insert();
		$this->setVarValue('scriptId',$script_id);
		$this->setVarValue('basePath','http://'.$_SERVER['HTTP_HOST'].'/'.APP_NAME.'/');//BASE_PATH
		
		if (isset($_SESSION['role_id'])){
			$this->setVarValue('role_id',$_SESSION['role_id']);
			$this->setVarValue('role_descr',$_SESSION['role_descr']);
			$this->setVarValue('user_name',$_SESSION['user_name']);
		}
		
		//Global Filters
						
	}
		
	
	public function write(ArrayObject &$models){
		$this->addMenu($models);
		
		
		
		$this->addConstants($models);
		
		
		//template
		if (isset($_REQUEST['t'])){
			$tmpl = $_REQUEST['t']; 
			if (file_exists($file = USER_VIEWS_PATH. $tmpl. '.html') ){
				$text = $this->convToUtf8(file_get_contents($file));
				$models[$tmpl] = new ModelTemplate($tmpl,$text);
			}
		}		
		parent::write($models);
	}	
}	
?>
