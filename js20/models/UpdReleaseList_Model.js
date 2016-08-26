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

function UpdReleaseList_Model(options){
	var id = 'UpdReleaseList_Model';
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
	
	
	var field = new FieldInt("prog_id",filed_options);
	

	options.fields.prog_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Релиз';
	
	var field = new FieldString("release",filed_options);
	
		field.getValidator().setMaxLength('20');
	

	options.fields.release = field;

		UpdReleaseList_Model.superclass.constructor.call(this,id,options);
}
extend(UpdReleaseList_Model,ModelXML);

