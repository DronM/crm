-- VIEW: client_user_list

--DROP VIEW client_user_list;

CREATE OR REPLACE VIEW client_user_list AS
	SELECT
		t.client_id,
		t.user_id,
		u.name AS user_descr
	FROM client_users AS t
	LEFT JOIN users AS u ON u.id=t.user_id
	;
	
ALTER VIEW client_user_list OWNER TO crm;
