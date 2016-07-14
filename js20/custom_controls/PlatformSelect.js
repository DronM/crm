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
function PlatformSelect(id,options){
	options = options || {};
	options.model = new Platform_Model();
	
	var contr = new Platform_Controller(options.app);
	options.readPublicMethod = contr.getPublicMethod("get_list");
	
	PlatformSelect.superclass.constructor.call(this,id,options);
	
}
extend(PlatformSelect,EditSelectRef);

