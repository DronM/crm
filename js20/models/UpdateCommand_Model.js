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
	var id = 'UpdateCommand_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("descr",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.descr = field;

		UpdateCommand_Model.superclass.constructor.call(this,id,options);
}
extend(UpdateCommand_Model,ModelXML);

