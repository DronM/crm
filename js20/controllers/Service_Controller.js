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

function Service_Controller(app,options){
	options = options || {};
	options.listModelId = "Service_Model";
	options.objModelId = "Service_Model";
	Service_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(Service_Controller,ControllerDb);

			Service_Controller.prototype.addInsert = function(){
	Service_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	
	var pm = this.getInsert();
	options = {};
	options.alias = "Код";options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Наименование";
	var field = new FieldString("descr",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Описание";
	var field = new FieldString("full_descr",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldBool("deleted",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Период";	
	options.enumValues = 'month,quater,year';
	field = new FieldEnum("service_period_id",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("ext_id",options);
	
	pm.addField(field);
	
	pm.addField(new FieldInt("ret_id",{}));
	
	
}

			Service_Controller.prototype.addUpdate = function(){
	Service_Controller.superclass.addUpdate.call(this);
	var field;
	var options;	
	var pm = this.getUpdate();
	options = {};
	options.alias = "Код";options.primaryKey = true;options.autoInc = true;options.required = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	
	field = new FieldInt("old_id",{});
	pm.addField(field);
	
	options = {};
	options.alias = "Наименование";
	var field = new FieldString("descr",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Описание";
	var field = new FieldString("full_descr",options);
	
	pm.addField(field);
	
	
	options = {};
	
	var field = new FieldBool("deleted",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Период";	
	options.enumValues = 'month,quater,year';
	
	field = new FieldEnum("service_period_id",options);
	
	pm.addField(field);
	
	
	options = {};
	
	var field = new FieldString("ext_id",options);
	
	pm.addField(field);
	
	
	
}

			Service_Controller.prototype.addDelete = function(){
	Service_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldInt("id",options));
}

			Service_Controller.prototype.addGetList = function(){
	Service_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldString("descr",options));
	pm.addField(new FieldString("full_descr",options));
	pm.addField(new FieldBool("deleted",options));
	pm.addField(new FieldEnum("service_period_id",options));
	pm.addField(new FieldString("ext_id",options));
	pm.getField(this.PARAM_ORD_FIELDS).setValue("descr");
	
}

			Service_Controller.prototype.addGetObject = function(){
	Service_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldInt("id",options));
}

		