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

function UpdateError_Model(options){
	var id = 'UpdateError_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDateTimeTZ("dt",filed_options);
	

	options.fields.dt = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("update_id",filed_options);
	

	options.fields.update_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("config_id",filed_options);
	

	options.fields.config_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("error_str",filed_options);
	
		field.getValidator().setMaxLength('255');
	

	options.fields.error_str = field;

		UpdateError_Model.superclass.constructor.call(this,id,options);
}
extend(UpdateError_Model,ModelXML);

