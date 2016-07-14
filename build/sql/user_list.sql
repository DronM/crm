-- VIEW: client_list

--DROP VIEW client_list;

CREATE OR REPLACE VIEW user_list AS
	SELECT
		id ,name,email,phone_cel
	FROM users
	ORDER BY name
	;
	
ALTER VIEW user_list OWNER TO crm;
