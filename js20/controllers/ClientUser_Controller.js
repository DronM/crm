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

function ClientUser_Controller(app,options){
	options = options || {};
	options.listModelId = "ClientUserList_Model";
	options.objModelId = "ClientUser_Model";
	ClientUser_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(ClientUser_Controller,ControllerDb);

			ClientUser_Controller.prototype.addInsert = function(){
	ClientUser_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	
	var pm = this.getInsert();
	options = {};
	options.primaryKey = true;options.required = true;
	var field = new FieldInt("client_id",options);
	
	pm.addField(field);
	
	options = {};
	options.primaryKey = true;options.required = true;
	var field = new FieldInt("user_id",options);
	
	pm.addField(field);
	
	
}

			ClientUser_Controller.prototype.addDelete = function(){
	ClientUser_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldInt("client_id",options));
	pm.addField(new FieldInt("user_id",options));
}

			ClientUser_Controller.prototype.addGetList = function(){
	ClientUser_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("client_id",options));
	pm.addField(new FieldInt("user_id",options));
	pm.addField(new FieldString("user_descr",options));
}

			ClientUser_Controller.prototype.addGetObject = function(){
	ClientUser_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldInt("client_id",options));
	pm.addField(new FieldInt("user_id",options));
}

		