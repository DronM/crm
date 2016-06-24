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

function Okei_Model(options){
	var id = 'Okei_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
					
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldString("id",filed_options);
	
		field.getValidator().setRequired(true);
	
		field.getValidator().setMaxLength('3');
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("descr",filed_options);
	
		field.getValidator().setMaxLength('10');
	

	options.fields.descr = field;
		
			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("full_descr",filed_options);
	
		field.getValidator().setMaxLength('100');
	

	options.fields.full_descr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("ext_id",filed_options);
	
		field.getValidator().setMaxLength('36');
	

	options.fields.ext_id = field;

		Okei_Model.superclass.constructor.call(this,id,options);
}
extend(Okei_Model,ModelXML);

