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

function UserService_Model(options){
	var id = 'UserService_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("user_id",filed_options);
	

	options.fields.user_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("service_id",filed_options);
	

	options.fields.service_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDate("dt_from",filed_options);
	

	options.fields.dt_from = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDate("dt_to",filed_options);
	

	options.fields.dt_to = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBool("closed",filed_options);
	

	options.fields.closed = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBool("auto_prolongate",filed_options);
	

	options.fields.auto_prolongate = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldFloat("quant",filed_options);
	
		field.getValidator().setMaxLength('19');
	

	options.fields.quant = field;

		UserService_Model.superclass.constructor.call(this,id,options);
}
extend(UserService_Model,ModelXML);

