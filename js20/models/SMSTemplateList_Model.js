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

function SMSTemplateList_Model(options){
	var id = 'SMSTemplateList_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("sms_type",filed_options);
	

	options.fields.sms_type = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("sms_type_descr",filed_options);
	

	options.fields.sms_type_descr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldText("template",filed_options);
	

	options.fields.template = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldText("fields",filed_options);
	

	options.fields.fields = field;

		SMSTemplateList_Model.superclass.constructor.call(this,id,options);
}
extend(SMSTemplateList_Model,ModelXML);

