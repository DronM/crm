<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="ViewBase.html.xsl"/>

<xsl:template match="/">
<html>
	<head>
		<xsl:call-template name="initHead"/>		
		<title>Катрэн+ CRM, типы конфигураций</title>
		
		<script>
		
			var application;
			
			function pageLoad(){
			
				<xsl:call-template name="initApp"/>
				var view = new ConfigTypeList("ConfigTypeList",{app:application});				
				view.toDOM();
			}
		</script>		
		
	</head>
	<body onload="pageLoad();">
		<xsl:apply-templates select="/document/model[@id='ModelServResponse']/row"/>		

		<div id="wrapper">
			<xsl:call-template name="initMenu"/>
			
			<!-- Page Content -->
			<div id="page-wrapper">
			    <div class="container-fluid">
				<div class="row">
				    <div class="col-lg-12">
				        <h1 class="page-header">Типы конфигураций</h1>
				    </div>
				    <!-- /.col-lg-12 -->
				</div>
				<!-- /.row -->
			    </div>
			    <!-- /.container-fluid -->
			</div>
			<!-- /#page-wrapper -->
		</div>
		<!-- /#wrapper -->
	    
		<xsl:call-template name="initJS"/>
	</body>
</html>		
</xsl:template>

</xsl:stylesheet>
