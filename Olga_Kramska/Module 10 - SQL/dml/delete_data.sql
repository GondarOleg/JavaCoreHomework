DELETE FROM METADATA  WHERE (COOKIE_ID, USER_ID)  = (5, 6);
DELETE FROM COOKIES WHERE ID  = 5;
DELETE FROM USERS WHERE ID  = 6;