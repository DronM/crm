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

function Service_Model(options){
	var id = 'Service_Model';
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
	
	filed_options.alias = 'Наименование';
	
	var field = new FieldString("descr",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.descr = field;
		
			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Описание';
	
	var field = new FieldString("full_descr",filed_options);
	
		field.getValidator().setMaxLength('100');
	

	options.fields.full_descr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldBool("deleted",filed_options);
	

	options.fields.deleted = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Период';
	
	var field = new FieldEnum("service_period_id",filed_options);
	filed_options.enumValues = 'month,quater,year';
	

	options.fields.service_period_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("ext_id",filed_options);
	
		field.getValidator().setMaxLength('36');
	

	options.fields.ext_id = field;

		Service_Model.superclass.constructor.call(this,id,options);
}
extend(Service_Model,ModelXML);

