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
		"labelCaption":"Код:",
		"noClear":true,
		"enabled":false,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":name",{
		"labelCaption":"Наименование:",
		"placeholder":"Наименование контрагента",
		"maxlength":50,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":inn",{
		"labelCaption":"ИНН/КПП:",
		"placeholder":"ИНН и КПП организации",
		"maxlength":12,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":order_email",{
		"labelCaption":"Email:",
		"placeholder":"Адрес электронной почты для счетов",
		"maxlength":50,
		"app":options.app
	}));	
	
	
	//user grid
	var user_model = new ClientUserList_Model();
	var user_contr = new ClientUser_Controller(options.app);
	this.addElement(new GridAjx(id+":user-grid",{
		"model":user_model,
		"controller":user_contr,
		"editInline":true,
		"editWinClass":null,
		"commands":new GridCommandsAjx(id+":user-gris:cmd",{
			"cmdEdit":false,
			"cmdCopy":false
			}),
		"head":new GridHead(id+":user-grid:head",{
			"elements":[
				new GridRow(id+":user-grid:head:row0",{
					"elements":[
						new GridCellHead(id+":user-grid:head:name",{
							"columns":[
								new GridColumn({"field":user_model.getField("user_descr"),
									"ctrlClass":UserEdit
									})
							],
							"sortable":true,
							"sort":"asc"							
						}),
					]
				})
			]
		}),
		"autoRefresh":false,
		"enabled":false,
		"app":options.app
	}));	

	//****************************************************
	var contr = new Client_Controller(options.app);
	
	//read
	this.setReadPublicMethod(contr.getPublicMethod("get_object"));
	this.m_model = new Client_Model({"data":options.modelDataStr});
	this.setDataBindings([
		new DataBinding("control":this.getElement("id"),"model":this.m_model),
		new DataBinding("control":this.getElement("name"),"model":this.m_model),
		new DataBinding("control":this.getElement("inn"),"model":this.m_model),
		new DataBinding("control":this.getElement("order_email"),"model":this.m_model)
	]);
	
	//write
	this.setController(contr);
	this.getCommand(this.CMD_OK).setBindings([
			new CommandBinding("control":this.getElement("id")),
			new CommandBinding("control":this.getElement("name")),
			new CommandBinding("control":this.getElement("inn")),
			new CommandBinding("control":this.getElement("order_email"))
	]);
}
extend(Client_View,ViewObjectAjx);

ViewObjectAjx.prototype.m_model;

/*Установка ключей подчиненной таблицы*/
Client_View.prototype.setUserKeys = function(){
	if (this.m_model.getFieldValue("id")){
		var grid = this.getElement("user-grid");
		var pm = grid.getReadPublicMethod();
		pm.setFieldValue("client_id",this.m_model.getFieldValue("id"));
		grid.setEnabled(true);
		grid.onRefresh();
	}
}

Client_View.prototype.onGetData = function(resp,cmd){
	Client_View.superclass.onGetData.call(this,resp,cmd);
	
	this.setUserKeys();
}

Client_View.prototype.onSaveOk = function(){
	this.setUserKeys();
}

