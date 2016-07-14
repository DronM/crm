/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function ConfigType_View(id,options){	

	ConfigType_View.superclass.constructor.call(this,id,options);

	var model = new ConfigType_Model({"data":options.modelDataStr});
	var contr = new ConfigType_Controller(options.app);
	
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
							"sortable":true
						}),
						
						new GridCellHead(id+":grid:head:platform",{
							"columns":[
								new GridColumn({"field":model.getField("platform_id"),
									"ctrlClass":PlatformSelect})
							],
							"sortable":true,
							"sort":"asc"
						}),
						new GridCellHead(id+":grid:head:full_descr",{
							"columns":[
								new GridColumn({"field":model.getField("full_descr")})
							],
							"sortable":true
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
extend(ConfigType_View,ViewAjx);
