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

function SMSTemplate_Model(options){
	var id = 'SMSTemplate_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
					
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Тип SMS';
	
	var field = new FieldEnum("sms_type",filed_options);
	filed_options.enumValues = 'reset_pwd';
	
		field.getValidator().setRequired(true);
	

	options.fields.sms_type = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Шаблон';
	
	var field = new FieldText("template",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.template = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Комментарий';
	
	var field = new FieldText("comment_text",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.comment_text = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Поля';
	
	var field = new FieldText("fields",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.fields = field;

			
				
						
		SMSTemplate_Model.superclass.constructor.call(this,id,options);
}
extend(SMSTemplate_Model,ModelXML);

