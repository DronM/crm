-- FUNCTION: sms_reset_pwd(user_id int)

--DROP FUNCTION sms_reset_pwd(user_id int);

CREATE OR REPLACE FUNCTION sms_reset_pwd(user_id int)
RETURNS RECORD AS 
$BODY$
	SELECT
		u.phone_cel::text AS tel,
		sms_templates_text(
			ARRAY[
				ROW('user',u.name::text)::template_value
			],
			(SELECT t.template FROM sms_templates t
			WHERE t.sms_type='reset_pwd'::sms_types)
		)
		AS message
		
	FROM users u
	WHERE u.id=$1 AND u.phone_cel IS NOT NULL;
	
$BODY$ LANGUAGE sql COST 100;	

ALTER FUNCTION sms_reset_pwd(user_id int) OWNER TO crm;