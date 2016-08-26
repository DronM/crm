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
function UpdProgram_Form(options){
	options = options || {};	
	options.params = options.params || {};
	
	options.height = "700";
	options.width = "600";
	options.params.name = "UpdProgram";
	options.params.method = "get_object";
	
	UpdProgram_Form.superclass.constructor.call(this,options);
}
extend(UpdProgram_Form,WindowFormObject);

/* Constants */


/* private members */

/* protected*/


/* public methods */

