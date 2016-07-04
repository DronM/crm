<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="ViewBase.html.xsl"/>

<!--************* Main template ******************** -->		
<xsl:template match="/document">
<html>
	<head>
		<xsl:call-template name="initHead"/>
		
		<title>Катрэн+, личный кабинет</title>
		
		<script>
			function pageLoad(){				
				<xsl:call-template name="initApp"/>
				<xsl:call-template name="modelFromTemplate"/>
			}
		</script>
	</head>
	<body onload="pageLoad();">
	    <div class="container-fluid">
		<div class="row">
		    <div class="col-lg-12">
		    	<xsl:apply-templates select="model[@templateId]"/>
		    </div>
		    <!-- /.col-lg-12 -->
		</div>
		<!-- /.row -->
	    </div>
	    <!-- /.container-fluid -->	    
	<xsl:call-template name="initJS"/>
	</body>
</html>		
</xsl:template>

</xsl:stylesheet>
