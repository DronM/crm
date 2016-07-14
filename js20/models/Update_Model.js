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

function Update_Model(options){
	var id = 'Update_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDate("dt",filed_options);
	

	options.fields.dt = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("release",filed_options);
	
		field.getValidator().setMaxLength('20');
	

	options.fields.release = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("comment",filed_options);
	
		field.getValidator().setMaxLength('250');
	

	options.fields.comment = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBool("ext_reps",filed_options);
	

	options.fields.ext_reps = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("config_type_id",filed_options);
	

	options.fields.config_type_id = field;

		Update_Model.superclass.constructor.call(this,id,options);
}
extend(Update_Model,ModelXML);

