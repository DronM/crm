<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:variable name="BASE_PATH" select="/document/model[@id='ModelVars']/row[1]/basePath"/>
<xsl:variable name="VERSION" select="/document/model[@id='ModelVars']/row[1]/scriptId"/>
<xsl:variable name="TITLE" select="/document/model[@id='ModelVars']/row[1]/title"/>
	
	
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
		<div id="wrapper">
			<xsl:call-template name="initMenu"/>
			
			<!-- Page Content -->
			<div id="page-wrapper">
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
			</div>
			<!-- /#page-wrapper -->
		</div>
		<!-- /#wrapper -->
	    
		<xsl:call-template name="initJS"/>
	</body>
</html>		
</xsl:template>


<!--************* Javascript files ******************** -->
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
	<xsl:apply-templates select="model[@id='ModelJavaScript']/row"/>
	
	<script>
		var dv = document.getElementById("waiting");
		if (dv!==null){
			dv.parentNode.removeChild(dv);
		}
	</script>
</xsl:template>


<!--************* Application instance ******************** -->
<xsl:template name="initApp">
	var application = new AppCRM({
		host:'<xsl:value-of select="$BASE_PATH"/>',
		servVars:{
			"version":'<xsl:value-of select="$VERSION"/>',
			"roleId":'<xsl:value-of select="model[@id='ModelVars']/row/role_id"/>',
			"roleDescr":'<xsl:value-of select="model[@id='ModelVars']/row/role_descr"/>',
			"userId":'<xsl:value-of select="model[@id='ModelVars']/row/user_id"/>',
			"userName":'<xsl:value-of select="model[@id='ModelVars']/row/user_name"/>'
		},
		"bsCol":("col-"+$('#users-device-size').find('div:visible').first().attr('id')+"-"),
		"constantXMLString":CommonHelper.longString(function () {/*
				<xsl:copy-of select="model[@id='ConstantValueList_Model']"/>
		*/})		
	});
</xsl:template>

<!--************* Page head ******************** -->
<xsl:template name="initHead">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
	<xsl:apply-templates select="model[@id='ModelVars']"/>
	<xsl:apply-templates select="model[@id='ModelStyleSheet']/row"/>
	<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
</xsl:template>


<!-- ************** Main Menu ******************** -->
<xsl:template name="initMenu">
	<xsl:if test="model[@id='MainMenu_Model']">
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
	</xsl:if>
</xsl:template>


<!--************* Menu item ******************-->
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
			    <a href="index.php?c={@c}&amp;f={@f}&amp;t={@t}"><i class="fa fa-fw"></i> <xsl:value-of select="@descr"/> </a>
			</li>			
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

<!--*************** templates ********************* -->
<xsl:template match="model[@templateId]">
<xsl:copy-of select="*"/>
</xsl:template>

<xsl:template name="modelFromTemplate">
	<xsl:for-each select="model[@templateId]">
	<xsl:variable name="templateId" select="@templateId"/>
	var v_<xsl:value-of select="$templateId"/> = new <xsl:value-of select="$templateId"/>_View("<xsl:value-of select="$templateId"/>",{
		"app":application,
		"modelDataStr":CommonHelper.longString(function () {/*
		<xsl:copy-of select="/document/model[@id=concat($templateId,'_Model')]"/>
		*/})					
		});
	v_<xsl:value-of select="$templateId"/>.toDOM();				
	</xsl:for-each>
</xsl:template>


<!--System variables -->
<xsl:template match="model[@id='ModelVars']/row">
	<xsl:if test="author">
		<meta name="Author" content="{author}"></meta>
	</xsl:if>
	<xsl:if test="keywords">
		<meta name="Keywords" content="{keywords}"></meta>
	</xsl:if>
	<xsl:if test="description">
		<meta name="Description" content="{description}"></meta>
	</xsl:if>
	
</xsl:template>

<!-- CSS -->
<xsl:template match="model[@id='ModelStyleSheet']/row">
	<link rel="stylesheet" href="{concat($BASE_PATH,href,'?',$VERSION)}" type="text/css"/>
</xsl:template>

<!-- Javascript -->
<xsl:template match="model[@id='ModelJavaScript']/row">
	<script src="{concat($BASE_PATH,href,'?',$VERSION)}"></script>
</xsl:template>

<!-- Error -->
<xsl:template match="model[@id='ModelServResponse']/row">
	<xsl:if test="result/node()='1'">
	<div class="error"><xsl:value-of select="descr"/></div>
	</xsl:if>
</xsl:template>

</xsl:stylesheet>
