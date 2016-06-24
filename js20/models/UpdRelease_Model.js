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

function UpdRelease_Model(options){
	var id = 'UpdRelease_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("prog_id",filed_options);
	

	options.fields.prog_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("release",filed_options);
	
		field.getValidator().setMaxLength('20');
	

	options.fields.release = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldText("descr",filed_options);
	

	options.fields.descr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("file_name",filed_options);
	
		field.getValidator().setMaxLength('100');
	

	options.fields.file_name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("file_hash",filed_options);
	
		field.getValidator().setMaxLength('32');
	

	options.fields.file_hash = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldInt("file_size",filed_options);
	

	options.fields.file_size = field;

		UpdRelease_Model.superclass.constructor.call(this,id,options);
}
extend(UpdRelease_Model,ModelXML);

