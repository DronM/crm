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

function TimeZoneLocale_Model(options){
	var id = 'TimeZoneLocale_Model';
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
	
	filed_options.alias = 'Описание';
	
	var field = new FieldString("descr",filed_options);
	
		field.getValidator().setRequired(true);
	
		field.getValidator().setMaxLength('100');
	

	options.fields.descr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Наименование';
	
	var field = new FieldString("name",filed_options);
	
		field.getValidator().setRequired(true);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Смещение в часах';
	
	var field = new FieldInt("hour_dif",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.hour_dif = field;

		TimeZoneLocale_Model.superclass.constructor.call(this,id,options);
}
extend(TimeZoneLocale_Model,ModelXML);

