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
	
	this.addElement(new EditString(id+":string",{				
		"placeholder":"Просто строка",
		"labelCaption":"Просто строка (10 знаков):",
		"autofocus":"autofocus",
		"maxLength":10,
		"app":options.app
	}));	
	this.addElement(new EditPassword(id+":pwd",{
		"placeholder":"Пароль",
		"labelCaption":"Пароль:",
		"alias":"пароль",
		"maxlength":50,
		"app":options.app
	}));	

	this.addElement(new EditInt(id+":int_constr",{
		"placeholder":"целое число от 1 до 10",
		"labelCaption":"Целое число с органичением:",
		"alias":"целое число",
		"minVal":"1",
		"maxVal":"10",
		"app":options.app
	}));	

	this.addElement(new EditFloat(id+":float",{
		"placeholder":"дробное число",
		"labelCaption":"Дробное число:",
		"app":options.app
	}));	

	this.addElement(new EditDate(id+":date",{
		"placeholder":"дата без времени",
		"labelCaption":"Дата:",
		"app":options.app
	}));	

	this.addElement(new EditDateTime(id+":date-time",{
		"placeholder":"дата с временем",
		"labelCaption":"Дата и время:",
		"app":options.app
	}));	

	this.addElement(new EditTime(id+":time",{
		"placeholder":"просто время",
		"labelCaption":"Время:",
		"app":options.app
	}));	
	this.addElement(new EditPhone(id+":phone",{
		"placeholder":"телефон",
		"labelCaption":"Телефон:",
		"app":options.app
	}));	

	this.addElement(new EditCheckBox(id+":checkbox",{
		"labelCaption":"CheckBox:",
		"value":true,
		"app":options.app
	}));	
	
	this.addElement(new EditSelect(id+":select",{
		"labelCaption":"Выбор из списка:",
		"addNotSelected":true,
		"options":[
			{value:"1",descr:"Значение 1",checked:true},
			{value:"2",descr:"Значение 2"},
			{value:"3",descr:"Значение 3"},
			{value:"4",descr:"Значение 4"},
			{value:"5",descr:"Значение 5"}
		],
		"app":options.app
	}));	

	this.addElement(new EditRadioGroup(id+":radio",{
		"labelCaption":"Выбор переключателя:",
		"options":[
			{value:"1",descr:"Переключатель 1"},
			{value:"2",descr:"Переключатель 2"},
			{value:"3",descr:"Переключатель 3"},
			{value:"4",descr:"Переключатель 4"},
			{value:"5",descr:"Переключатель 5",checked:true}
		],
		"app":options.app
	}));	

	
	//buttons
	this.addElement(new ButtonCmd(id+":btn-modal-ok",{
		"onClick":function(){
			self.getApp().showOk("Диалог с результатом OK");
		},
		"app":options.app
	}));	
	this.addElement(new ButtonCmd(id+":btn-modal-warn",{
		"onClick":function(){
			self.getApp().showWarn("Диалог с результатом warn");
		},
		"app":options.app
	}));	

	this.addElement(new ButtonCmd(id+":btn-modal-note",{
		"onClick":function(){
			self.getApp().showNote("Диалог с результатом note");
		},
		"app":options.app
	}));	

	this.addElement(new ButtonCmd(id+":btn-modal-error",{
		"onClick":function(){
			self.getApp().showError("Диалог с результатом error");
		},
		"app":options.app
	}));	
	
	//Commands
	
}
extend(Prototype_View,View);
