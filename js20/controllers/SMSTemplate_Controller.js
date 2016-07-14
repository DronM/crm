/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires core/extend.js
 * @requires core/ControllerDb.js
*/

/* constructor
@param string id
@param object options{

}
*/

function SMSTemplate_Controller(app,options){
	options = options || {};
	options.listModelId = "SMSTemplateList_Model";
	options.objModelId = "SMSTemplateList_Model";
	SMSTemplate_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(SMSTemplate_Controller,ControllerDb);

			SMSTemplate_Controller.prototype.addInsert = function(){
	SMSTemplate_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	
	var pm = this.getInsert();
	options = {};
	options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Тип SMS";options.required = true;	
	options.enumValues = 'reset_pwd';
	field = new FieldEnum("sms_type",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Шаблон";options.required = true;
	var field = new FieldText("template",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Комментарий";options.required = true;
	var field = new FieldText("comment_text",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Поля";options.required = true;
	var field = new FieldText("fields",options);
	
	pm.addField(field);
	
	pm.addField(new FieldInt("ret_id",{}));
	
	
}

			SMSTemplate_Controller.prototype.addUpdate = function(){
	SMSTemplate_Controller.superclass.addUpdate.call(this);
	var field;
	var options;	
	var pm = this.getUpdate();
	options = {};
	options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	
	field = new FieldInt("old_id",{});
	pm.addField(field);
	
	options = {};
	options.alias = "Тип SMS";options.required = true;	
	options.enumValues = 'reset_pwd';
	options.enumValues+= (options.enumValues!='')? '':',';
	options.enumValues+= 'null';
	
	field = new FieldEnum("sms_type",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Шаблон";options.required = true;
	var field = new FieldText("template",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Комментарий";options.required = true;
	var field = new FieldText("comment_text",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Поля";options.required = true;
	var field = new FieldText("fields",options);
	
	pm.addField(field);
	
	
	
}

			SMSTemplate_Controller.prototype.addDelete = function(){
	SMSTemplate_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldInt("id",options));
}

			SMSTemplate_Controller.prototype.addGetList = function(){
	SMSTemplate_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldString("sms_type",options));
	pm.addField(new FieldString("sms_type_descr",options));
	pm.addField(new FieldText("template",options));
	pm.addField(new FieldText("fields",options));
}

			SMSTemplate_Controller.prototype.addGetObject = function(){
	SMSTemplate_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldInt("id",options));
}

		