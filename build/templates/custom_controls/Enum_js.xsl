<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>

<xsl:template match="enums/enum"><![CDATA[]]>/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires core/extend.js
 * @requires controls/EditSelect.js
*/

/* constructor */
<xsl:variable name="enum_id" select="concat('Enum_',@id)"/>
function <xsl:value-of select="$enum_id"/>(id,options){
	options = options || {};
	options.addNotSelected = (options.addNotSelected!=undefined)? options.addNotSelected:true;
	options.options = [<xsl:apply-templates select="value"/>];
	
	Enum_role_types.superclass.constructor.call(this,id,options);
	
}
extend(<xsl:value-of select="$enum_id"/>,EditSelect);
<![CDATA[]]>
</xsl:template>

<xsl:template match="enums/enum/value">
<xsl:if test="position() &gt; 1">,</xsl:if>{"value":"<xsl:value-of select='@id'/>","descr":"<xsl:value-of select='@descr'/>",checked:(options.defaultValue&amp;&amp;options.defaultValue=="<xsl:value-of select='@id'/>")}
</xsl:template>

</xsl:stylesheet>
