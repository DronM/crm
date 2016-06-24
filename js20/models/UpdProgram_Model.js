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

function UpdProgram_Model(options){
	var id = 'UpdProgram_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldString("descr",filed_options);
	
		field.getValidator().setMaxLength('20');
	

	options.fields.descr = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	
	var field = new FieldText("descr_full",filed_options);
	

	options.fields.descr_full = field;

		UpdProgram_Model.superclass.constructor.call(this,id,options);
}
extend(UpdProgram_Model,ModelXML);

