/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function TimeZoneLocale_View(id,options){	

	TimeZoneLocale_View.superclass.constructor.call(this,id,options);
	
	var model = new TimeZoneLocale_Model({"data":options.modelDataStr});
	var contr = new TimeZoneLocale_Controller(options.app);
	
	this.addElement(new GridAjx(id+":grid",{
		"model":model,
		"controller":contr,
		"editInline":true,
		"editWinClass":null,
		"commands":new GridCommandsAjx(id+":cmd",{
			"cmdInsert":false
		}),
		"head":new GridHead(id+"-grid:head",{
			"elements":[
				new GridRow(id+":grid:head:row0",{
					"elements":[
						new GridCellHead(id+":grid:head:name",{
							"columns":[
								new GridColumn({"field":model.getField("name")})
							],
							"sortable":true,
							"sort":"asc"							
						}),
						new GridCellHead(id+":grid:head:descr",{
							"columns":[
								new GridColumn({"field":model.getField("descr")})
							],
							"sortable":true
						}),											
						new GridCellHead(id+":grid:head:hour_dif",{
							"columns":[
								new GridColumn({"field":model.getField("hour_dif")})
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
extend(TimeZoneLocale_View,ViewAjx);
