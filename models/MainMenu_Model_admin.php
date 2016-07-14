<?php
require_once(FRAME_WORK_PATH.'basic_classes/Model.php');

class MainMenu_Model_admin extends Model{
	public function dataToXML(){
		return '<model id="MainMenu_Model">
		
<menuItem

descr="Справочники"

>
<menuItem

descr="Контрагенты"

default="FALSE"

c="Client_Controller"

f="get_list"

t="ClientList"

></menuItem>

<menuItem

descr="Пользователи"

default="FALSE"

c="User_Controller"

f="get_list"

t="UserList"

></menuItem>

<menuItem

descr="Временные зоны"

default="FALSE"

c="TimeZoneLocale_Controller"

f="get_list"

t="TimeZoneLocale"

></menuItem>

<menuItem

descr="Услуги"

default="FALSE"

c="Service_Controller"

f="get_list"

t="Service"

></menuItem>
</menuItem>

<menuItem

descr="Обновления"

>
<menuItem

descr="Платформы"

default="FALSE"

c="Platform_Controller"

f="get_list"

t="Platform"

></menuItem>

<menuItem

descr="Типы конфигураций"

default="FALSE"

c="ConfigType_Controller"

f="get_list"

t="ConfigType"

></menuItem>
</menuItem>

		</model>';
	}
}
?>
