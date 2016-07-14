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

function User_Model(options){
	var id = 'User_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
			
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("name",filed_options);
	
		field.getValidator().setRequired(true);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldEnum("role_id",filed_options);
	filed_options.enumValues = 'admin,manager,client';
	
		field.getValidator().setRequired(true);
	

	options.fields.role_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldPassword("pwd",filed_options);
	
		field.getValidator().setMaxLength('32');
	

	options.fields.pwd = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("phone_cel",filed_options);
	
		field.getValidator().setMaxLength('10');
	

	options.fields.phone_cel = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("time_zone_locale_id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.time_zone_locale_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("email",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.email = field;

			
						
		User_Model.superclass.constructor.call(this,id,options);
}
extend(User_Model,ModelXML);

