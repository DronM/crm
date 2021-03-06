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

function ClientUserList_Model(options){
	var id = 'ClientUserList_Model';
	options = options || {};
	
	options.fields = {};
	
			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("client_id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.client_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = true;
	
	
	var field = new FieldInt("user_id",filed_options);
	
		field.getValidator().setRequired(true);
	

	options.fields.user_id = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Пользователь';
	
	var field = new FieldString("user_descr",filed_options);
	

	options.fields.user_descr = field;

		ClientUserList_Model.superclass.constructor.call(this,id,options);
}
extend(ClientUserList_Model,ModelXML);

