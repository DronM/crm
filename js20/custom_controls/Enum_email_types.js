/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires core/extend.js
 * @requires controls/EditSelect.js
*/

/* constructor */

function Enum_email_types(id,options){
	options = {};
	options.labelCaption = options.labelCaption || "Типы email сообщений:";
	options.addNotSelected = (options.addNotSelected!=undefined)? options.addNotSelected:true;
	options.options = [{"value":"reset_pwd","descr":"Установка пароля",checked:(options.defaultValue&&options.defaultValue=="reset_pwd")}
];
	
	Enum_role_types.superclass.constructor.call(this,id,options);
	
}
extend(Enum_email_types,EditSelect);

