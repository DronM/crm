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

function Platform_Model(options){
	var id = 'Platform_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
					
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	filed_options.alias = 'Идентификатор';
	
	var field = new FieldString("id",filed_options);
	
		field.getValidator().setRequired(true);
	
		field.getValidator().setMaxLength('3');
	

	options.fields.id = field;

		Platform_Model.superclass.constructor.call(this,id,options);
}
extend(Platform_Model,ModelXML);

