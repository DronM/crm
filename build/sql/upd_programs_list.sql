-- VIEW: upd_programs_list

--DROP VIEW upd_programs_list;

CREATE OR REPLACE VIEW upd_programs_list AS
	SELECT
		id ,descr
	FROM upd_programs
	ORDER BY descr
	;
	
ALTER VIEW upd_programs_list OWNER TO crm;
