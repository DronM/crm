/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function User_View(id,options){	

	options = options || {};
	
	User_View.superclass.constructor.call(this,id,options);
		
	this.addElement(new EditString(id+":id",{
		"labelCaption":"Код:",
		"noClear":true,
		"enabled":false,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":name",{
		"labelCaption":"Наименование:",
		"placeholder":"Наименование пользователя",
		"maxlength":50,
		"app":options.app
	}));	

	this.addElement(new Enum_role_types(id+":role",{
		"labelCaption":"Роль:",
		"app":options.app
	}));	
	//
	this.addElement(new TimeZoneLocaleSelect(id+":time_zone_locale",{
		"labelCaption":"Временная зона:",
		"app":options.app
	}));	

	this.addElement(new EditString(id+":email",{
		"labelCaption":"Email:",
		"placeholder":"Адрес электронной пользователя",
		"maxlength":50,
		"app":options.app
	}));	

	this.addElement(new EditPhone(id+":phone_cel",{
		"labelCaption":"Мобильный телефон:",
		"placeholder":"Мобильный телефон пользователя для СМС",
		"app":options.app
	}));	
	
	var contr = new User_Controller(options.app);
	
	//read
	this.setReadPublicMethod(contr.getPublicMethod("get_object"));
	var m = new User_Model({"data":options.modelDataStr});
	this.setDataBindings([
		new DataBinding({"control":this.getElement("id"),"field":m.getField("id"),"model":m}),
		new DataBinding({"control":this.getElement("name"),"field":m.getField("name"),"model":m}),
		new DataBinding({"control":this.getElement("role"),"field":m.getField("role_id"),"model":m}),
		new DataBinding({"control":this.getElement("time_zone_locale"),"field":m.getField("time_zone_locale_id"),"model":m}),
		new DataBinding({"control":this.getElement("email"),"field":m.getField("email"),"model":m}),
		new DataBinding({"control":this.getElement("phone_cel"),"field":m.getField("phone_cel"),"model":m})
	]);
	
	//write
	this.setController(contr);
	this.getCommands()[this.CMD_OK].setBindings([
			new CommandBinding({"control":this.getElement("id")}),
			new CommandBinding({"control":this.getElement("name")}),
			new CommandBinding({"control":this.getElement("email")}),
			new CommandBinding({"control":this.getElement("role"),"fieldId":"role_id"}),
			new CommandBinding({"control":this.getElement("time_zone_locale"),"fieldId":"time_zone_locale_id"}),
			new CommandBinding({"control":this.getElement("phone_cel")})
	]);
}
extend(User_View,ViewObjectAjx);

