<?php
require_once(FRAME_WORK_PATH.'basic_classes/ViewHTMLXSLT.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelStyleSheet.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelJavaScript.php');

			require_once('models/MainMenu_Model_admin.php');
			require_once('models/MainMenu_Model_manager.php');
			require_once('models/MainMenu_Model_client.php');
		
class ViewBase extends ViewHTMLXSLT {	
	public function __construct($name){
		parent::__construct($name);
				
		if (!DEBUG){
			//$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'styles.css'));
			
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-theme.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'style.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'dhtmlwindow.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'metisMenu.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'font-awesome.min.css'));						
		
	
		}
		else{		
			
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-theme.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'style.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'dhtmlwindow.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'metisMenu.min.css'));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'font-awesome.min.css'));						
		
	
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
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'sb-admin-2.js'));

		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/extend.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/App.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/CommonHelper.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DOMHelper.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DateHelper.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/EventHelper.js'));
		
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
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorBool.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorDate.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorFloat.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorInt.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Field.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldBool.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldDate.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldDateTime.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldTime.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldInt.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldFloat.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldPassword.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/res_rus.js'));
		
				
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ControlHolder.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Control.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ControlContainer.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ErrorControl.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Calculator.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Button.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCtrl.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCalc.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonCalc.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCalendar.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonCalendar.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonClear.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonClear.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonClearObject.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonClearObject.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonCmd.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonOpen.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonOpen.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonOpenObject.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonPrint.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonPrint.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonSelect.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonSelect.rs_rus.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonSelectObject.js'));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus/ButtonSelectObject.rs_rus.js'));		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/ButtonToggle.js'));		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Label.js'));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/Edit.js'));

		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controls/res_rus.js'));				
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Login_View.js'));
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom/AppCRM.js'));
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/User_Controller.js'));
	$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/SMSTemplate_Controller.js'));
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
		$this->setVarValue('basePath',BASE_PATH);
		
		if (isset($_SESSION['role_id'])){
			$this->setVarValue('role_id',$_SESSION['role_id']);
			$this->setVarValue('role_descr',$_SESSION['role_descr']);
			$this->setVarValue('user_name',$_SESSION['user_name']);
		}
		
		//Global Filters
		
	}
	public function write(ArrayObject &$models){
		if (isset($_SESSION['role_id'])){
			$menu_class = 'MainMenu_Model_'.$_SESSION['role_id'];
			$models['mainMenu'] = new $menu_class();
		}
		parent::write($models);
	}	
}	
?>
