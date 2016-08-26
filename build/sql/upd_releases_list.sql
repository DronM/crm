-- VIEW: upd_releases_list

--DROP VIEW upd_releases_list;

CREATE OR REPLACE VIEW upd_releases_list AS
	SELECT
		t.id,
		t.prog_id,
		t.release
	FROM upd_releases AS t
	;
	
ALTER VIEW upd_releases_list OWNER TO crm;
