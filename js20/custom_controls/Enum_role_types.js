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

function Enum_role_types(id,options){
	options = {};
	options.labelCaption = options.labelCaption || "Роли:";
	options.addNotSelected = (options.addNotSelected!=undefined)? options.addNotSelected:true;
	options.options = [{"value":"admin","descr":"Администратор",checked:(options.defaultValue&&options.defaultValue=="admin")}
,{"value":"manager","descr":"Менеджер",checked:(options.defaultValue&&options.defaultValue=="manager")}
,{"value":"client","descr":"Клиент",checked:(options.defaultValue&&options.defaultValue=="client")}
];
	
	Enum_role_types.superclass.constructor.call(this,id,options);
	
}
extend(Enum_role_types,EditSelect);

