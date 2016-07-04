/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function Client_View(id,options){	

	options = options || {};
	
	Client_View.superclass.constructor.call(this,id,options);
		
	this.addElement(new EditString(id+":id",{
		"noClear":true,
		"enabled":false,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":name",{
		"labelCaption":"Наименование",
		"placeholder":"Наименование контрагента",
		"maxlength":50,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":inn",{
		"labelCaption":"ИНН/КПП",
		"placeholder":"ИНН и КПП организации",
		"maxlength":12,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":inn",{
		"labelCaption":"ИНН/КПП",
		"placeholder":"ИНН и КПП организации",
		"maxlength":12,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":order_email",{
		"labelCaption":"Email",
		"placeholder":"Адрес электронной почты для счетов",
		"maxlength":50,
		"app":options.app
	}));	
	
	var contr = new Client_Controller(options.app);
	
	//read
	var pm = contr.getPublicMethod("get_object");
	var m = new Client_Model({"data":options.modelDataStr});
	this.setDataBindings([
		{"control":this.getElement("id"),"field":pm.getField("id"),"model":m},
		{"control":this.getElement("name"),"field":pm.getField("name"),"model":m},
		{"control":this.getElement("inn"),"field":pm.getField("inn"),"model":m},
		{"control":this.getElement("order_email"),"field":pm.getField("email"),"model":m}
	]);
	
	//write
	var meth_id = "insert";
	var contr = new Client_Controller(options.app);
	var pm = contr.getPublicMethod(meth_id);	
	this.addCommandBind(this.CMD_OK,[
			{"control":this.getElement("id"),"field":pm.getField("id")},
			{"control":this.getElement("name"),"field":pm.getField("name")},
			{"control":this.getElement("inn"),"field":pm.getField("inn")},
			{"control":this.getElement("order_email"),"field":pm.getField("email")}
	]);
	this.setCommandPublicMethod(this.CMD_OK,pm);
}
extend(Client_View,ViewObjectAjx);
