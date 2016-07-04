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

function ClientList_Model(options){
	var id = 'ClientList_Model';
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
	
	var field = new FieldString("name",filed_options);
	
		field.getValidator().setRequired(true);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.name = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'ИНН';
	
	var field = new FieldString("inn",filed_options);
	
		field.getValidator().setMaxLength('12');
	

	options.fields.inn = field;

			
	var filed_options = {};
	filed_options.primaryKey = false;
	
	filed_options.alias = 'Эл.почта';
	
	var field = new FieldString("order_email",filed_options);
	
		field.getValidator().setMaxLength('50');
	

	options.fields.order_email = field;

		ClientList_Model.superclass.constructor.call(this,id,options);
}
extend(ClientList_Model,ModelXML);

