/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function UpdProgram_View(id,options){	

	options = options || {};
	
	UpdProgram_View.superclass.constructor.call(this,id,options);
		
	this.addElement(new EditString(id+":id",{
		"labelCaption":"Код:",
		"noClear":true,
		"enabled":false,
		"app":options.app
	}));	

	this.addElement(new EditString(id+":descr",{
		"labelCaption":"Наименование:",
		"placeholder":"Наименование программы",
		"maxlength":50,
		"app":options.app
	}));	

	this.addElement(new EditText(id+":descr_full",{
		"labelCaption":"Описание:",
		"placeholder":"Полное описание программы",
		"app":options.app
	}));	
	
	//release grid
	var release_model = new UpdReleaseList_Model();
	var release_contr = new UpdRelease_Controller(options.app);
	var grid = new GridAjx(id+":release-grid",{
		"model":release_model,
		"controller":release_contr,
		"editInline":false,
		"editWinClass":UpdRelease_Form,
		"commands":new GridCommandsAjx(id+":release-grid:cmd",{
			"cmdEdit":false,
			"cmdCopy":false
			}),
		"head":new GridHead(id+":release-grid:head",{
			"elements":[
				new GridRow(id+":release-grid:head:row0",{
					"elements":[
						new GridCellHead(id+":release-grid:head:release",{
							"columns":[
								new GridColumn({"field":release_model.getField("release")
									})
							],
							"sortable":true,
							"sort":"asc"							
						})						
					]
				})
			]
		}),
		"autoRefresh":false,
		"enabled":false,
		"app":options.app
	});	
	var self = this;
	this.addElement(grid);
	
	/*
	grid.initEditWinObj = function(cmd){
		GridAjx.superclass.initEditWinObj.call(this,cmd);
		this.getEditWinObj().setProgId(self.m_model.getFieldValue("id"));
	};
	*/
	//****************************************************
	var contr = new UpdProgram_Controller(options.app);
	
	//read
	this.setReadPublicMethod(contr.getPublicMethod("get_object"));
	this.m_model = new UpdProgram_Model({"data":options.modelDataStr});
	this.setDataBindings([
		new DataBinding({"control":this.getElement("id"),"model":this.m_model}),
		new DataBinding({"control":this.getElement("descr"),"model":this.m_model}),
		new DataBinding({"control":this.getElement("descr_full"),"model":this.m_model})
	]);
	
	//write
	this.setController(contr);
	this.getCommand(this.CMD_OK).setBindings([
			new CommandBinding({"control":this.getElement("id")}),
			new CommandBinding({"control":this.getElement("descr")}),
			new CommandBinding({"control":this.getElement("descr_full")})
	]);
	
	this.addDetailDataSet({
		"control":grid,
		"controlFieldId":"prog_id",
		"field":this.m_model.getField("id")
	});
	
	
}
extend(UpdProgram_View,ViewObjectAjx);

/*Установка ключей подчиненной таблицы*/
/*
UpdProgram_View.prototype.setReleaseKeys = function(){
	if (this.m_model.getFieldValue("id")){
		var grid = this.getElement("release-grid");
		var pm = grid.getReadPublicMethod();
		var contr = pm.getController();		
		pm.setFieldValue(contr.PARAM_COND_FIELDS,"prog_id");
		pm.setFieldValue(contr.PARAM_COND_SGNS,contr.PARAM_SGN_EQUAL);
		pm.setFieldValue(contr.PARAM_COND_VALS,this.m_model.getFieldValue("id"));
		grid.setEnabled(true);
		grid.onRefresh();
	}
}

UpdProgram_View.prototype.onGetData = function(resp,cmd){
	UpdProgram_View.superclass.onGetData.call(this,resp,cmd);
	
	this.setReleaseKeys();
}

UpdProgram_View.prototype.onSaveOk = function(){
	this.setReleaseKeys();
}
*/
