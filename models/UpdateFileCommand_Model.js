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

function UpdateFileCommand_Model(options){
	id = 'UpdateFileCommand_Model';
	options = options || {};
	
	options.fields = {};
	
			
			
			
			
		
	
	superclass.constructor.call(this,id,options);
}
extend(UpdateFileCommand_Model,ModelXML);

