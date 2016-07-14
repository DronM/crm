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

function MailForSendingAttachment_Model(options){
	var id = 'MailForSendingAttachment_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("mail_for_sending_id",filed_options);
	

	options.fields.mail_for_sending_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("file_name",filed_options);
	
		field.getValidator().setMaxLength('255');
	

	options.fields.file_name = field;

																			
		MailForSendingAttachment_Model.superclass.constructor.call(this,id,options);
}
extend(MailForSendingAttachment_Model,ModelXML);

