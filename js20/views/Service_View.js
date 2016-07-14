/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function Service_View(id,options){	

	Service_View.superclass.constructor.call(this,id,options);
	
	var model = new Service_Model({"data":options.modelDataStr});
	var contr = new Service_Controller(options.app);
	this.addElement(new GridAjx(id+":grid",{
		"model":model,
		"controller":contr,
		"editInline":true,
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
						}),			
						new GridCellHead(id+":grid:head:full_descr",{
							"columns":[
								new GridColumn({"field":model.getField("full_descr")})
							],
						}),			
						new GridCellHead(id+":grid:head:service_period",{
							"columns":[
								new GridColumn({"field":model.getField("service_period_id"),
									"ctrlClass":Enum_service_periods,
									"assocValueList":(new Enum_service_periods(null,{app:options.app})).getOptionList()
									})
							],
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
extend(Service_View,ViewAjx);
