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

function ClientConfig_Model(options){
	var id = 'ClientConfig_Model';
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
	
		field.getValidator().setMaxLength('80');
	

	options.fields.descr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("path",filed_options);
	
		field.getValidator().setMaxLength('250');
	

	options.fields.path = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("ar_path",filed_options);
	
		field.getValidator().setMaxLength('250');
	

	options.fields.ar_path = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBoolean("ext_reps",filed_options);
	

	options.fields.ext_reps = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("user_1c",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.user_1c = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("password_1c",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.password_1c = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBoolean("untyp",filed_options);
	

	options.fields.untyp = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBoolean("sql",filed_options);
	

	options.fields.sql = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("ar_cnt",filed_options);
	

	options.fields.ar_cnt = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("config_type_id",filed_options);
	

	options.fields.config_type_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("user_id",filed_options);
	

	options.fields.user_id = field;

		ClientConfig_Model.superclass.constructor.call(this,id,options);
}
extend(ClientConfig_Model,ModelXML);

