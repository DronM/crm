/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires core/extend.js
 * @requires core/ModelXML.js
*/

/* constructor
@param string id
@param object options{

}
*/

function UpdateCommand_Model(options){
	id = 'UpdateCommand_Model';
	options = options || {};
	
	options.fields = {};
	
			
			
		
	
	superclass.constructor.call(this,id,options);
}
extend(UpdateCommand_Model,ModelXML);

