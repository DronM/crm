<?php
require_once(FRAME_WORK_PATH.'basic_classes/Model.php');

class MainMenu_Model_admin extends Model{
	public function dataToXML(){
		return '<model id="MainMenu_Model">
		
<menuItem

descr="Обновления"

>
<menuItem

descr="Платформы"

default="FALSE"

c="Platform_Controller"

f="get_list"

v="PlatformList"

></menuItem>

<menuItem

descr="Типы конфигураций"

default="FALSE"

c="ConfigType_Controller"

f="get_list"

v="ConfigTypeList"

></menuItem>
</menuItem>

		</model>';
	}
}
?>
