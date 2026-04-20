DELIMITER //

CREATE PROCEDURE sp_get_dashboard_full()
BEGIN
    -- PRIMER RESULTADO: Totales y estadísticas
    SELECT 
        (SELECT COUNT(*) FROM users) AS users_total,
        (SELECT COUNT(*) FROM movies) AS movies_total,
        (SELECT COUNT(*) FROM products) AS products_total,
        (SELECT COUNT(*) FROM users 
            WHERE MONTH(created_at) = MONTH(NOW()) 
            AND YEAR(created_at) = YEAR(NOW())) AS users_month,
        (SELECT COUNT(*) FROM movies 
            WHERE MONTH(created_at) = MONTH(NOW()) 
            AND YEAR(created_at) = YEAR(NOW())) AS movies_month;

    -- SEGUNDO RESULTADO: Actividad reciente
    SELECT 
        action, 
        description, 
        created_at
    FROM activity_log
    ORDER BY created_at DESC
    LIMIT 5;
END //

DELIMITER ;

DELIMITER //

/* --- TRIGGERS PARA USUARIOS --- */

CREATE TRIGGER tr_users_insert AFTER INSERT ON users
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Nuevo Usuario', CONCAT('Se registró el usuario: ', NEW.username));
END //

CREATE TRIGGER tr_users_update AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Usuario Editado', CONCAT('Se actualizaron datos de: ', NEW.username));
END //

CREATE TRIGGER tr_users_delete AFTER DELETE ON users
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Usuario Eliminado', CONCAT('Se eliminó a: ', OLD.username));
END //


/* --- TRIGGERS PARA PELÍCULAS --- */

CREATE TRIGGER tr_movies_insert AFTER INSERT ON movies
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Nueva Película', CONCAT('Se añadió la película: ', NEW.title));
END //

CREATE TRIGGER tr_movies_update AFTER UPDATE ON movies
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Película Editada', CONCAT('Se modificó la información de: ', NEW.title));
END //

CREATE TRIGGER tr_movies_delete AFTER DELETE ON movies
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Película Eliminada', CONCAT('Se quitó del catálogo: ', OLD.title));
END //


/* --- TRIGGERS PARA PRODUCTOS --- */

CREATE TRIGGER tr_products_insert AFTER INSERT ON products
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Nuevo Producto', CONCAT('Se agregó producto: ', NEW.name));
END //

CREATE TRIGGER tr_products_update AFTER UPDATE ON products
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Producto Editado', CONCAT('Se actualizó el stock/precio de: ', NEW.name));
END //

CREATE TRIGGER tr_products_delete AFTER DELETE ON products
FOR EACH ROW
BEGIN
    INSERT INTO activity_log (action, description)
    VALUES ('Producto Eliminado', CONCAT('Se eliminó el producto: ', OLD.name));
END //

DELIMITER ;