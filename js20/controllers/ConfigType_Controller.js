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

function ConfigType_Controller(app,options){
	options = options || {};
	options.listModelId = "ConfigType_Model";
	options.objModelId = "ConfigType_Model";
	ConfigType_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(ConfigType_Controller,ControllerDb);

			ConfigType_Controller.prototype.addInsert = function(){
	ConfigType_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	
	var pm = this.getInsert();
	options = {};
	options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("platform_id",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("descr",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("full_descr",options);
	
	pm.addField(field);
	
	pm.addField(new FieldInt("ret_id",{}));
	
	
}

			ConfigType_Controller.prototype.addUpdate = function(){
	ConfigType_Controller.superclass.addUpdate.call(this);
	var field;
	var options;	
	var pm = this.getUpdate();
	options = {};
	options.primaryKey = true;options.autoInc = true;options.required = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	
	field = new FieldInt("old_id",{});
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("platform_id",options);
	
	pm.addField(field);
	
	
	options = {};
	
	var field = new FieldString("descr",options);
	
	pm.addField(field);
	
	
	options = {};
	
	var field = new FieldString("full_descr",options);
	
	pm.addField(field);
	
	
	
}

			ConfigType_Controller.prototype.addDelete = function(){
	ConfigType_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldInt("id",options));
}

			ConfigType_Controller.prototype.addGetList = function(){
	ConfigType_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldString("platform_id",options));
	pm.addField(new FieldString("descr",options));
	pm.addField(new FieldString("full_descr",options));
}

			ConfigType_Controller.prototype.addGetObject = function(){
	ConfigType_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldInt("id",options));
}

		