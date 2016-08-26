/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function UpdProgramList_View(id,options){	

	UpdProgramList_View.superclass.constructor.call(this,id,options);
	
	var model = new UpdProgramList_Model({"data":options.modelDataStr});
	var contr = new UpdProgram_Controller(options.app);
	this.addElement(new GridAjx(id+":grid",{
		"model":model,
		"controller":contr,
		"editInline":false,
		"editWinClass":UpdProgram_Form,
		"commands":new GridCommandsAjx(),
		"head":new GridHead(id+"-grid:head",{
			"elements":[
				new GridRow(id+":grid:head:row0",{
					"elements":[
						new GridCellHead(id+":grid:head:id",{
							"columns":[
								new GridColumn({"field":model.getField("id")})
							],
							"sortable":true
						}),
						new GridCellHead(id+":grid:head:descr",{
							"columns":[
								new GridColumn({"field":model.getField("descr")})
							],
							"sortable":true,
							"sort":"asc"							
						})
					]
				})
			]
		}),
		"autoRefresh":false,
		"focus":true,
		"app":options.app
	}));	
	


}
extend(UpdProgramList_View,ViewAjx);
