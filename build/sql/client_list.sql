-- VIEW: client_list

--DROP VIEW client_list;

CREATE OR REPLACE VIEW client_list AS
	SELECT
		id ,name,inn,order_email
	FROM clients
	ORDER BY name
	;
	
ALTER VIEW client_list OWNER TO crm;
