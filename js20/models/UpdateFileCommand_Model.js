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
	var id = 'UpdateFileCommand_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("sort",filed_options);
	

	options.fields.sort = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("file_name",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.file_name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("command_param",filed_options);
	
		field.getValidator().setMaxLength('255');
	

	options.fields.command_param = field;

		UpdateFileCommand_Model.superclass.constructor.call(this,id,options);
}
extend(UpdateFileCommand_Model,ModelXML);

