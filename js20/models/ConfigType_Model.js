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

function ConfigType_Model(options){
	var id = 'ConfigType_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
							
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	filed_options.alias = 'Код';
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Платформа';
	
	var field = new FieldString("platform_id",filed_options);
	
		field.getValidator().setMaxLength('3');
	

	options.fields.platform_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Наименование';
	
	var field = new FieldString("descr",filed_options);
	
		field.getValidator().setMaxLength('10');
	

	options.fields.descr = field;
		
			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Описание';
	
	var field = new FieldString("full_descr",filed_options);
	
		field.getValidator().setMaxLength('100');
	

	options.fields.full_descr = field;

									
		ConfigType_Model.superclass.constructor.call(this,id,options);
}
extend(ConfigType_Model,ModelXML);

