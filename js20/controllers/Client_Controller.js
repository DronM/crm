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

function Client_Controller(app,options){
	options = options || {};
	options.listModelId = "ClientList_Model";
	options.objModelId = "Client_Model";
	Client_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(Client_Controller,ControllerDb);

			Client_Controller.prototype.addInsert = function(){
	Client_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	
	var pm = this.getInsert();
	options = {};
	options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	options = {};
	options.required = true;
	var field = new FieldString("name",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("inn",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("ext_id",options);
	
	pm.addField(field);
	
	options = {};
	
	var field = new FieldString("order_email",options);
	
	pm.addField(field);
	
	pm.addField(new FieldInt("ret_id",{}));
	
	
}

			Client_Controller.prototype.addUpdate = function(){
	Client_Controller.superclass.addUpdate.call(this);
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
	options.required = true;
	var field = new FieldString("name",options);
	
	pm.addField(field);
	
	
	options = {};
	
	var field = new FieldString("inn",options);
	
	pm.addField(field);
	
	
	options = {};
	
	var field = new FieldString("ext_id",options);
	
	pm.addField(field);
	
	
	options = {};
	
	var field = new FieldString("order_email",options);
	
	pm.addField(field);
	
	
	
}

			Client_Controller.prototype.addDelete = function(){
	Client_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldInt("id",options));
}

			Client_Controller.prototype.addGetList = function(){
	Client_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldString("name",options));
	pm.addField(new FieldString("inn",options));
	pm.addField(new FieldString("order_email",options));
}

			Client_Controller.prototype.addGetObject = function(){
	Client_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldInt("id",options));
}

		