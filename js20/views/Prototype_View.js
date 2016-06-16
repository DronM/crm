/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function Prototype_View(id,options){	

	Prototype_View.superclass.constructor.call(this,id,options);
	
	var self = this;
	
	//this.addControl(new ErrorControl(id+":error",{app:options.app}));
	
	this.addControl(new EditString(id+":string",{				
		"placeholder":"Просто строка",
		"labelCaption":"Просто строка (10 знаков):",
		"autofocus":"autofocus",
		"maxLength":10,
		"app":options.app
	}));	
	this.addControl(new EditPassword(id+":pwd",{
		"placeholder":"Пароль",
		"labelCaption":"Пароль:",
		"alias":"пароль",
		"maxlength":50,
		"app":options.app
	}));	

	this.addControl(new EditInt(id+":int_constr",{
		"placeholder":"целое число от 1 до 10",
		"labelCaption":"Целое число с органичением:",
		"alias":"целое число",
		"minVal":"1",
		"maxVal":"10",
		"app":options.app
	}));	

	this.addControl(new EditFloat(id+":float",{
		"placeholder":"дробное число",
		"labelCaption":"Дробное число:",
		"app":options.app
	}));	

	this.addControl(new EditDate(id+":date",{
		"placeholder":"дата без времени",
		"labelCaption":"Дата:",
		"app":options.app
	}));	

	this.addControl(new EditDateTime(id+":date-time",{
		"placeholder":"дата с временем",
		"labelCaption":"Дата и время:",
		"app":options.app
	}));	

	this.addControl(new EditTime(id+":time",{
		"placeholder":"просто время",
		"labelCaption":"Время:",
		"app":options.app
	}));	
	this.addControl(new EditPhone(id+":phone",{
		"placeholder":"телефон",
		"labelCaption":"Телефон:",
		"app":options.app
	}));	
	
	//buttons
	this.addControl(new ButtonCmd(id+":btn-modal-ok",{
		"onClick":function(){
			self.getApp().showOk("Диалог с результатом OK");
		},
		"app":options.app
	}));	
	this.addControl(new ButtonCmd(id+":btn-modal-warn",{
		"onClick":function(){
			self.getApp().showWarn("Диалог с результатом warn");
		},
		"app":options.app
	}));	

	this.addControl(new ButtonCmd(id+":btn-modal-note",{
		"onClick":function(){
			self.getApp().showNote("Диалог с результатом note");
		},
		"app":options.app
	}));	

	this.addControl(new ButtonCmd(id+":btn-modal-error",{
		"onClick":function(){
			self.getApp().showError("Диалог с результатом error");
		},
		"app":options.app
	}));	
	
	//Commands
	
	//Error Control
	this.setErrorControl(this.getControl("error"));	
	
}
extend(Prototype_View,ControlHolder);
