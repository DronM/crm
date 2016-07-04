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

function Enum_service_periods(id,options){
	options = {};
	options.labelCaption = options.labelCaption || "Периоды:";
	options.addNotSelected = (options.addNotSelected!=undefined)? options.addNotSelected:true;
	options.options = [{"value":"month","descr":"месяц",checked:(options.defaultValue&&options.defaultValue=="month")}
,{"value":"quater","descr":"квартал",checked:(options.defaultValue&&options.defaultValue=="quater")}
,{"value":"year","descr":"год",checked:(options.defaultValue&&options.defaultValue=="year")}
];
	
	Enum_role_types.superclass.constructor.call(this,id,options);
	
}
extend(Enum_service_periods,EditSelect);

