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

function SMSForSending_Model(options){
	var id = 'SMSForSending_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("tel",filed_options);
	
		field.getValidator().setMaxLength('15');
	

	options.fields.tel = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldText("body",filed_options);
	

	options.fields.body = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDateTimeTZ("date_time",filed_options);
	

	options.fields.date_time = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBoolean("sent",filed_options);
	

	options.fields.sent = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDateTimeTZ("sent_date_time",filed_options);
	

	options.fields.sent_date_time = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBoolean("delivered",filed_options);
	

	options.fields.delivered = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDateTimeTZ("delivered_date_time",filed_options);
	

	options.fields.delivered_date_time = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldEnum("sms_type",filed_options);
	filed_options.enumValues = 'reset_pwd';
	

	options.fields.sms_type = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldText("sms_id",filed_options);
	

	options.fields.sms_id = field;

			
				
				
																
			
				
																			
		SMSForSending_Model.superclass.constructor.call(this,id,options);
}
extend(SMSForSending_Model,ModelXML);

