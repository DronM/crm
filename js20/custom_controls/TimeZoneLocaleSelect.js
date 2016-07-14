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

/* constructor
@param object options{
	@param string modelDataStr
}
*/
function TimeZoneLocaleSelect(id,options){
	options = options || {};
	options.model = new TimeZoneLocale_Model();
	
	var contr = new TimeZoneLocale_Controller(options.app);
	options.readPublicMethod = contr.getPublicMethod("get_list");
	
	TimeZoneLocaleSelect.superclass.constructor.call(this,id,options);
	
}
extend(TimeZoneLocaleSelect,EditSelectRef);

