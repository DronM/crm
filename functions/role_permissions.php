<?php
function method_allowed_for_role($contrId,$methId,$roleId){
$permissions = array();
$permissions['Constant_Controller_set_value_admin']=TRUE;
					$permissions['Constant_Controller_get_list_admin']=TRUE;
					$permissions['Constant_Controller_get_object_admin']=TRUE;
					$permissions['Constant_Controller_get_values_admin']=TRUE;
					$permissions['Constant_Controller_set_value_cashier']=TRUE;
					$permissions['Constant_Controller_get_list_cashier']=TRUE;
					$permissions['Constant_Controller_get_object_cashier']=TRUE;
					$permissions['Constant_Controller_get_values_cashier']=TRUE;
					$permissions['Constant_Controller_set_value_store_manager']=TRUE;
					$permissions['Constant_Controller_get_list_store_manager']=TRUE;
					$permissions['Constant_Controller_get_object_store_manager']=TRUE;
					$permissions['Constant_Controller_get_values_store_manager']=TRUE;
					$permissions['SMSTemplate_Controller_insert_admin']=TRUE;
					$permissions['SMSTemplate_Controller_update_admin']=TRUE;
					$permissions['SMSTemplate_Controller_delete_admin']=TRUE;
					$permissions['SMSTemplate_Controller_get_list_admin']=TRUE;
					$permissions['SMSTemplate_Controller_get_object_admin']=TRUE;
					$permissions['SMSTemplate_Controller_insert_cashier']=TRUE;
					$permissions['SMSTemplate_Controller_update_cashier']=TRUE;
					$permissions['SMSTemplate_Controller_delete_cashier']=TRUE;
					$permissions['SMSTemplate_Controller_get_list_cashier']=TRUE;
					$permissions['SMSTemplate_Controller_get_object_cashier']=TRUE;
					$permissions['SMSTemplate_Controller_insert_store_manager']=TRUE;
					$permissions['SMSTemplate_Controller_update_store_manager']=TRUE;
					$permissions['SMSTemplate_Controller_delete_store_manager']=TRUE;
					$permissions['SMSTemplate_Controller_get_list_store_manager']=TRUE;
					$permissions['SMSTemplate_Controller_get_object_store_manager']=TRUE;
					$permissions['Platform_Controller_insert_admin']=TRUE;
					$permissions['Platform_Controller_update_admin']=TRUE;
					$permissions['Platform_Controller_delete_admin']=TRUE;
					$permissions['Platform_Controller_get_list_admin']=TRUE;
					$permissions['Platform_Controller_get_object_admin']=TRUE;
					$permissions['Platform_Controller_insert_cashier']=TRUE;
					$permissions['Platform_Controller_update_cashier']=TRUE;
					$permissions['Platform_Controller_delete_cashier']=TRUE;
					$permissions['Platform_Controller_get_list_cashier']=TRUE;
					$permissions['Platform_Controller_get_object_cashier']=TRUE;
					$permissions['Platform_Controller_insert_store_manager']=TRUE;
					$permissions['Platform_Controller_update_store_manager']=TRUE;
					$permissions['Platform_Controller_delete_store_manager']=TRUE;
					$permissions['Platform_Controller_get_list_store_manager']=TRUE;
					$permissions['Platform_Controller_get_object_store_manager']=TRUE;
					$permissions['Client_Controller_insert_admin']=TRUE;
					$permissions['Client_Controller_update_admin']=TRUE;
					$permissions['Client_Controller_delete_admin']=TRUE;
					$permissions['Client_Controller_get_list_admin']=TRUE;
					$permissions['Client_Controller_get_object_admin']=TRUE;
					$permissions['Client_Controller_insert_cashier']=TRUE;
					$permissions['Client_Controller_update_cashier']=TRUE;
					$permissions['Client_Controller_delete_cashier']=TRUE;
					$permissions['Client_Controller_get_list_cashier']=TRUE;
					$permissions['Client_Controller_get_object_cashier']=TRUE;
					$permissions['Client_Controller_insert_store_manager']=TRUE;
					$permissions['Client_Controller_update_store_manager']=TRUE;
					$permissions['Client_Controller_delete_store_manager']=TRUE;
					$permissions['Client_Controller_get_list_store_manager']=TRUE;
					$permissions['Client_Controller_get_object_store_manager']=TRUE;
					$permissions['UpdProgram_Controller_insert_admin']=TRUE;
					$permissions['UpdProgram_Controller_update_admin']=TRUE;
					$permissions['UpdProgram_Controller_delete_admin']=TRUE;
					$permissions['UpdProgram_Controller_get_list_admin']=TRUE;
					$permissions['UpdProgram_Controller_get_object_admin']=TRUE;
					$permissions['UpdProgram_Controller_insert_cashier']=TRUE;
					$permissions['UpdProgram_Controller_update_cashier']=TRUE;
					$permissions['UpdProgram_Controller_delete_cashier']=TRUE;
					$permissions['UpdProgram_Controller_get_list_cashier']=TRUE;
					$permissions['UpdProgram_Controller_get_object_cashier']=TRUE;
					$permissions['UpdProgram_Controller_insert_store_manager']=TRUE;
					$permissions['UpdProgram_Controller_update_store_manager']=TRUE;
					$permissions['UpdProgram_Controller_delete_store_manager']=TRUE;
					$permissions['UpdProgram_Controller_get_list_store_manager']=TRUE;
					$permissions['UpdProgram_Controller_get_object_store_manager']=TRUE;
					$permissions['UpdRelease_Controller_insert_admin']=TRUE;
					$permissions['UpdRelease_Controller_update_admin']=TRUE;
					$permissions['UpdRelease_Controller_delete_admin']=TRUE;
					$permissions['UpdRelease_Controller_get_list_admin']=TRUE;
					$permissions['UpdRelease_Controller_get_object_admin']=TRUE;
					$permissions['UpdRelease_Controller_insert_cashier']=TRUE;
					$permissions['UpdRelease_Controller_update_cashier']=TRUE;
					$permissions['UpdRelease_Controller_delete_cashier']=TRUE;
					$permissions['UpdRelease_Controller_get_list_cashier']=TRUE;
					$permissions['UpdRelease_Controller_get_object_cashier']=TRUE;
					$permissions['UpdRelease_Controller_insert_store_manager']=TRUE;
					$permissions['UpdRelease_Controller_update_store_manager']=TRUE;
					$permissions['UpdRelease_Controller_delete_store_manager']=TRUE;
					$permissions['UpdRelease_Controller_get_list_store_manager']=TRUE;
					$permissions['UpdRelease_Controller_get_object_store_manager']=TRUE;
					$permissions['ConfigType_Controller_insert_admin']=TRUE;
					$permissions['ConfigType_Controller_update_admin']=TRUE;
					$permissions['ConfigType_Controller_delete_admin']=TRUE;
					$permissions['ConfigType_Controller_get_list_admin']=TRUE;
					$permissions['ConfigType_Controller_get_object_admin']=TRUE;
					$permissions['ConfigType_Controller_insert_cashier']=TRUE;
					$permissions['ConfigType_Controller_update_cashier']=TRUE;
					$permissions['ConfigType_Controller_delete_cashier']=TRUE;
					$permissions['ConfigType_Controller_get_list_cashier']=TRUE;
					$permissions['ConfigType_Controller_get_object_cashier']=TRUE;
					$permissions['ConfigType_Controller_insert_store_manager']=TRUE;
					$permissions['ConfigType_Controller_update_store_manager']=TRUE;
					$permissions['ConfigType_Controller_delete_store_manager']=TRUE;
					$permissions['ConfigType_Controller_get_list_store_manager']=TRUE;
					$permissions['ConfigType_Controller_get_object_store_manager']=TRUE;
					$permissions['Service_Controller_insert_admin']=TRUE;
					$permissions['Service_Controller_update_admin']=TRUE;
					$permissions['Service_Controller_delete_admin']=TRUE;
					$permissions['Service_Controller_get_list_admin']=TRUE;
					$permissions['Service_Controller_get_object_admin']=TRUE;
					$permissions['Service_Controller_insert_cashier']=TRUE;
					$permissions['Service_Controller_update_cashier']=TRUE;
					$permissions['Service_Controller_delete_cashier']=TRUE;
					$permissions['Service_Controller_get_list_cashier']=TRUE;
					$permissions['Service_Controller_get_object_cashier']=TRUE;
					$permissions['Service_Controller_insert_store_manager']=TRUE;
					$permissions['Service_Controller_update_store_manager']=TRUE;
					$permissions['Service_Controller_delete_store_manager']=TRUE;
					$permissions['Service_Controller_get_list_store_manager']=TRUE;
					$permissions['Service_Controller_get_object_store_manager']=TRUE;
					$permissions['ClientUser_Controller_insert_admin']=TRUE;
					$permissions['ClientUser_Controller_delete_admin']=TRUE;
					$permissions['ClientUser_Controller_get_list_admin']=TRUE;
					$permissions['ClientUser_Controller_get_object_admin']=TRUE;
					$permissions['ClientUser_Controller_insert_cashier']=TRUE;
					$permissions['ClientUser_Controller_delete_cashier']=TRUE;
					$permissions['ClientUser_Controller_get_list_cashier']=TRUE;
					$permissions['ClientUser_Controller_get_object_cashier']=TRUE;
					$permissions['ClientUser_Controller_insert_store_manager']=TRUE;
					$permissions['ClientUser_Controller_delete_store_manager']=TRUE;
					$permissions['ClientUser_Controller_get_list_store_manager']=TRUE;
					$permissions['ClientUser_Controller_get_object_store_manager']=TRUE;
					$permissions['User_Controller_insert_admin']=TRUE;
					$permissions['User_Controller_update_admin']=TRUE;
					$permissions['User_Controller_delete_admin']=TRUE;
					$permissions['User_Controller_get_list_admin']=TRUE;
					$permissions['User_Controller_get_object_admin']=TRUE;
					$permissions['User_Controller_complete_admin']=TRUE;
					$permissions['User_Controller_reset_pwd_admin']=TRUE;
					$permissions['User_Controller_login_admin']=TRUE;
					$permissions['User_Controller_login_refresh_admin']=TRUE;
					$permissions['User_Controller_logout_admin']=TRUE;
					$permissions['User_Controller_logout_html_admin']=TRUE;
					$permissions['User_Controller_insert_cashier']=TRUE;
					$permissions['User_Controller_update_cashier']=TRUE;
					$permissions['User_Controller_delete_cashier']=TRUE;
					$permissions['User_Controller_get_list_cashier']=TRUE;
					$permissions['User_Controller_get_object_cashier']=TRUE;
					$permissions['User_Controller_complete_cashier']=TRUE;
					$permissions['User_Controller_reset_pwd_cashier']=TRUE;
					$permissions['User_Controller_login_cashier']=TRUE;
					$permissions['User_Controller_login_refresh_cashier']=TRUE;
					$permissions['User_Controller_logout_cashier']=TRUE;
					$permissions['User_Controller_logout_html_cashier']=TRUE;
					$permissions['User_Controller_insert_store_manager']=TRUE;
					$permissions['User_Controller_update_store_manager']=TRUE;
					$permissions['User_Controller_delete_store_manager']=TRUE;
					$permissions['User_Controller_get_list_store_manager']=TRUE;
					$permissions['User_Controller_get_object_store_manager']=TRUE;
					$permissions['User_Controller_complete_store_manager']=TRUE;
					$permissions['User_Controller_reset_pwd_store_manager']=TRUE;
					$permissions['User_Controller_login_store_manager']=TRUE;
					$permissions['User_Controller_login_refresh_store_manager']=TRUE;
					$permissions['User_Controller_logout_store_manager']=TRUE;
					$permissions['User_Controller_logout_html_store_manager']=TRUE;
					$permissions['User_Controller_login_guest']=TRUE;
				$permissions['MailForSending_Controller_get_list_admin']=TRUE;
					$permissions['MailForSending_Controller_get_list_cashier']=TRUE;
					$permissions['MailForSending_Controller_get_list_store_manager']=TRUE;
					$permissions['TimeZoneLocale_Controller_get_list_admin']=TRUE;
					$permissions['TimeZoneLocale_Controller_get_list_cashier']=TRUE;
					$permissions['TimeZoneLocale_Controller_get_list_store_manager']=TRUE;
					
return array_key_exists($contrId.'_'.$methId.'_'.$roleId,$permissions);
}
?>
