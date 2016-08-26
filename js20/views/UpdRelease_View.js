/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function UpdRelease_View(id,options){	
	
	options = options || {};
	
	UpdRelease_View.superclass.constructor.call(this,id,options);
	this.addElement(new EditString(id+":release",{
		"labelCaption":"Релиз:",
		"placeholder":"Номер релиза",
		"maxlength":50,
		"app":options.app
	}));	

	this.addElement(new EditText(id+":descr",{
		"labelCaption":"Описание:",
		"placeholder":"Описание релиза",
		"app":options.app
	}));	

	this.addElement(new EditString(id+":file_name",{
		"labelCaption":"Имя файла:",
		"placeholder":"Имя файла релиза",
		"maxlength":100,
		"app":options.app
	}));	
	
	var contr = new UpdRelease_Controller(options.app);
	
	//read
	this.setReadPublicMethod(contr.getPublicMethod("get_object"));
	var m = new UpdRelease_Model({"data":options.modelDataStr});
	this.setDataBindings([
		new DataBinding({"control":this.getElement("release"),"field":m.getField("release"),"model":m}),
		new DataBinding({"control":this.getElement("descr"),"field":m.getField("descr"),"model":m}),
		new DataBinding({"control":this.getElement("file_name"),"field":m.getField("file_name"),"model":m})
	]);
	
	//write
	this.setController(contr);
	this.getCommands()[this.CMD_OK].setBindings([
			new CommandBinding({"control":this.getElement("release")}),
			new CommandBinding({"control":this.getElement("descr")}),
			new CommandBinding({"control":this.getElement("file_name")})
	]);
	
	
	if (window.opener){
		contr.getPublicMethod("insert").getField("prog_id").setValue(window.opener.getParam("prog_id"));
	}
	
}
extend(UpdRelease_View,ViewObjectAjx);

