/* Copyright (c) 2016 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires 
 * @requires core/extend.js
 * @requires controls/WindowForm.js     
*/

/* constructor
@param string id
@param object options{

}
*/
function UpdRelease_Form(options){
	options = options || {};	
	options.params = options.params || {};
	
	options.params.name = "UpdRelease";
	options.params.method = "get_object";
	
	UpdRelease_Form.superclass.constructor.call(this,options);
}
extend(UpdRelease_Form,WindowFormObject);


