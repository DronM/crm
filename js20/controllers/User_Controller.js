/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires common/functions.js
 * @requires core/ControllerDb.js
*/
//ф
/* constructor */

function User_Controller(servConnector){
	options = {};
	options["listModelId"] = "User_Model";
	options["objModelId"] = "User_Model";
	User_Controller.superclass.constructor.call(this,"User_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_reset_pwd();
	this.add_login();
	this.add_login_refresh();
	this.add_logout();
	
}
extend(User_Controller,ControllerDb);

			User_Controller.prototype.addInsert = function(){
	User_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("role_id",options);
	options["values"] = 'admin,manager,client';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldPassword("pwd",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("phone_cel",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("time_zone_locale_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("email",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			User_Controller.prototype.addUpdate = function(){
	User_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	
	options = {};
	
	param = new FieldEnum("role_id",options);
	options["values"] = 'admin,manager,client';
	
	pm.addParam(param);
	
	
	options = {};
	
	var param = new FieldPassword("pwd",options);
	
	pm.addParam(param);
	
	
	options = {};
	
	var param = new FieldString("phone_cel",options);
	
	pm.addParam(param);
	
	
	options = {};
	
	var param = new FieldInt("time_zone_locale_id",options);
	
	pm.addParam(param);
	
	
	options = {};
	
	var param = new FieldString("email",options);
	
	pm.addParam(param);
	
	
	
}

			User_Controller.prototype.addDelete = function(){
	User_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			User_Controller.prototype.addGetList = function(){
	User_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldEnum("role_id",options));
	pm.addParam(new FieldPassword("pwd",options));
	pm.addParam(new FieldString("phone_cel",options));
	pm.addParam(new FieldInt("time_zone_locale_id",options));
	pm.addParam(new FieldString("email",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("name");
	
}

			User_Controller.prototype.addGetObject = function(){
	User_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			User_Controller.prototype.add_reset_pwd = function(){
	var pm = this.addMethodById('reset_pwd');
	
				
		pm.addParam(new FieldInt("user_id"));
	
			
}

			User_Controller.prototype.add_login = function(){
	var pm = this.addMethodById('login');
	
				
		pm.addParam(new FieldString("name"));
	
				
		pm.addParam(new FieldPassword("pwd"));
	
			
}

			User_Controller.prototype.add_login_refresh = function(){
	var pm = this.addMethodById('login_refresh');
	
				
		pm.addParam(new FieldString("refresh_token"));
	
			
}
						
			User_Controller.prototype.add_logout = function(){
	var pm = this.addMethodById('logout');
	
}

		