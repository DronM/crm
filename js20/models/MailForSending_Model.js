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

function MailForSending_Model(options){
	var id = 'MailForSending_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDateTime("date_time",filed_options);
	

	options.fields.date_time = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("from_addr",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.from_addr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("from_name",filed_options);
	
		field.getValidator().setMaxLength('255');
	

	options.fields.from_name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("to_addr",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.to_addr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("to_name",filed_options);
	
		field.getValidator().setMaxLength('255');
	

	options.fields.to_name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("reply_addr",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.reply_addr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("reply_name",filed_options);
	
		field.getValidator().setMaxLength('255');
	

	options.fields.reply_name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldText("body",filed_options);
	

	options.fields.body = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("sender_addr",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.sender_addr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("subject",filed_options);
	
		field.getValidator().setMaxLength('255');
	

	options.fields.subject = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBool("sent",filed_options);
	

	options.fields.sent = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldDateTime("sent_date_time",filed_options);
	

	options.fields.sent_date_time = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldEnum("email_type",filed_options);
	filed_options.enumValues = 'reset_pwd';
	

	options.fields.email_type = field;

																
																			
		MailForSending_Model.superclass.constructor.call(this,id,options);
}
extend(MailForSending_Model,ModelXML);

