<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="index.html.xsl"/>
			
<xsl:template match="/">
<html>
	<head>
		<xsl:call-template name="initHead"/>
		
		<title>Катрэн+, личный кабинет</title>
		
		<script>
			var application;
			
			function pageLoad(){				
				<xsl:call-template name="initApp"/>
				
				application.setBsCol(("col-"+$('#users-device-size').find('div:visible').first().attr('id')+"-"));
				application.setWinClass(WindowFormDD);//ChildForm
				application.readConstants();
			}
		</script>
	</head>
	<body onload="pageLoad();">
		<div id="wrapper">
			<xsl:call-template name="initMenu"/>
			
			<!-- Page Content -->
			<div id="page-wrapper">
			    <div class="container-fluid">
				<div class="row">
				    <div class="col-lg-12">
				        <h1 class="page-header">Blank</h1>
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

<xsl:template name="initJS">
	<!-- bootstrap resolution-->
	<div id="users-device-size">
	  <div id="xs" class="visible-xs"></div>
	  <div id="sm" class="visible-sm"></div>
	  <div id="md" class="visible-md"></div>
	  <div id="lg" class="visible-lg"></div>
	</div>

	<!--waiting  -->
	<div id="waiting">
		<div>Ждите</div>
		<img src="{$BASE_PATH}img/loading.gif"/>
	</div>
	
	<!--ALL js modules -->
	<xsl:apply-templates select="/document/model[@id='ModelJavaScript']/row"/>
	
	<script>
		var dv = document.getElementById("waiting");
		if (dv!==null){
			dv.parentNode.removeChild(dv);
		}
	</script>
</xsl:template>


<xsl:template name="initApp">
	var application = new AppCRM({
		host:'<xsl:value-of select="/document/model[@id='ModelVars']/row/basePath"/>',
		servVars:{
			"version":'<xsl:value-of select="/document/model[@id='ModelVars']/row/scriptId"/>',
			"roleId":'<xsl:value-of select="/document/model[@id='ModelVars']/row/role_id"/>',
			"roleDescr":'<xsl:value-of select="/document/model[@id='ModelVars']/row/role_descr"/>',
			"userId":'<xsl:value-of select="/document/model[@id='ModelVars']/row/user_id"/>',
			"userName":'<xsl:value-of select="/document/model[@id='ModelVars']/row/user_name"/>'				
		}				
	});
</xsl:template>

<xsl:template name="initHead">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
	<xsl:apply-templates select="/document/model[@id='ModelVars']"/>
	<xsl:apply-templates select="/document/model[@id='ModelStyleSheet']/row"/>
	<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
</xsl:template>

<xsl:template name="initMenu">
	<!-- Navigation -->
	<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
	    <div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		    <span class="sr-only">Toggle navigation</span>
		    <span class="icon-bar"></span>
		    <span class="icon-bar"></span>
		    <span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="index.php">Личный кабинет клиента</a>
	    </div>
	    <!-- /.navbar-header -->

	    <ul class="nav navbar-top-links navbar-right">
		<li class="dropdown">
		    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
		        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
		    </a>
		    <ul class="dropdown-menu dropdown-user">
		        <li><a href="#"><i class="fa fa-user fa-fw"></i> Профиль пользователя</a>
		        </li>
		        <li class="divider"></li>
		        <li><a href="index.php?c=User_Controller&amp;f=logout_html"><i class="fa fa-sign-out fa-fw"></i> Выход</a>
		        </li>
		    </ul>
		    <!-- /.dropdown-user -->
		</li>
		<!-- /.dropdown -->
	    </ul>
	    <!-- /.navbar-top-links -->

	    <div class="navbar-default sidebar" role="navigation">
		<div class="sidebar-nav navbar-collapse">
		    <ul class="nav" id="side-menu">
		        <li class="sidebar-search">
		            <div class="input-group custom-search-form">
		                <input type="text" class="form-control" placeholder="Search..."/>
		                <span class="input-group-btn">
		                <button class="btn btn-default" type="button">
		                    <i class="fa fa-search"></i>
		                </button>
		            </span>
		            </div>
		            <!-- /input-group -->
		        </li>
		        <xsl:apply-templates select="/document/model[@id='MainMenu_Model']"/>
		    </ul>
		</div>
		<!-- /.sidebar-collapse -->
	    </div>
	    <!-- /.navbar-static-side -->
	</nav>

</xsl:template>


<xsl:template match="menuItem">
	<xsl:choose>
		<xsl:when test="menuItem">			
			<!-- multylevel-->
			<li>
				<a href="#"><i class="fa fa-fw"></i> <xsl:value-of select="@descr"/><span class="fa arrow"></span></a>
				<ul class="nav nav-second-level">
					<xsl:apply-templates select="menuItem"/>
				</ul>						
			</li>
		</xsl:when>
		<xsl:otherwise>
			<!-- one level-->
			<li>
			    <a href="index.php?c={@c}&amp;f={@f}&amp;v={@v}"><i class="fa fa-fw"></i> <xsl:value-of select="@descr"/> </a>
			</li>			
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

</xsl:stylesheet>
