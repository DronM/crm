/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function Login(id,options){	
	Login.superclass.constructor.call(this,options);
	
	var self = this;
	
	this.addControl(new ErrorControl(id+":error"));
	
	this.addControl(new EditString(id+":user",{				
		"placeholder":"Пользователь (email)",
		"autofocus":"autofocus",
		"alias":"имя пользователя",
		"maxlength":50,
		"bsCol":options.bsCol
	}));	
	
	this.addControl(new EditPassword(id+":pwd",{
		"placeholder":"Пароль",
		"alias":"пароль",
		"maxlength":50,
		"bsCol":options.bsCol
	}));	

	this.addControl(new Button(id+":submit_login",{
		"caption":"Войти",
		"onClick":function(){
			self.execCommand("login",function(){
				document.location.href=options.host;
			});
		}
	}));
	
	//Commands
	var contr = new User_Controller(new ServConnector(options.host));
	var pm = contr.getPublicMethod("login");
	this.addCommand("login",{
		"controller":contr,
		"bindings":[
			{"field":pm.getField("user"),"control":this.getControl("user")},
			{"field":pm.getField("pwd"),"control":this.getControl("pwd")}
		]
		"control":this.getControl("submit_login"),
		"async":true
	});
	
	//Error Control
	this.setErrorControl(this.getControl("error"));	
	
}
extend(Login,ControlHolder);
