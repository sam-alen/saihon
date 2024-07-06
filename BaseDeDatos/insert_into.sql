-- Insertar datos en la tabla Categoria
INSERT INTO `saihondb`.`Categoria` (`Nombre`) VALUES 
('Ficción'), 
('Fantasía'), 
('Ciencia Ficción'), 
('Romance'), 
('Aventura');

-- Insertar datos en la tabla Usuario
INSERT INTO `saihondb`.`usuario` (`NombreUsuario`, `CorreoElectronico`, `Password`) VALUES 
('Juan Pérez', 'juan.perez@example.com', 'password1'), 
('María López', 'maria.lopez@example.com', 'password2'), 
('Carlos García', 'carlos.garcia@example.com', 'password3'), 
('Ana Rodríguez', 'ana.rodriguez@example.com', 'password4'), 
('Luis Fernández', 'luis.fernandez@example.com', 'password5');

-- Insertar datos en la tabla Libros
INSERT INTO `saihondb`.`libros` (`NombreLibro`, `Precio`, `Descripcion`, `Cantidad_Stock`, `Portada`, `Autor`, `Categoria_idCategoria`, `Editorial`,`PublicationYear`) VALUES 
('Cien años de soledad', 19.99, 'Una obra maestra de la literatura latinoamericana', 100, 'portada1.jpg', 'Gabriel García Márquez', 1, 'Editorial Planeta',1960),
('Harry Potter y la piedra filosofal', 29.99, 'El primer libro de la saga Harry Potter', 150, 'portada2.jpg', 'J.K. Rowling', 2, 'Penguin Random House',1925),
('1984', 14.99, 'Una novela distópica clásica', 200, 'portada3.jpg', 'George Orwell', 3, 'HarperCollins',1984),
('Orgullo y prejuicio', 12.99, 'Una novela romántica clásica', 50, 'portada4.jpg', 'Jane Austen', 4, 'Macmillan Publishers',1949),
('Las aventuras de Tom Sawyer', 9.99, 'Una novela de aventuras para jóvenes', 120, 'portada5.jpg', 'Mark Twain', 5, 'Simon & Schuster',1960);

-- Insertar datos en la tabla Pedidos
INSERT INTO `saihondb`.`pedidos` (`domicilio`, `forma_de_pago`, `Usuario_idUsuario`, `status`) VALUES 
('Calle Falsa 123', 'Tarjeta de Crédito', 1, 'activo'),
('Avenida Siempre Viva 742', 'PayPal', 2, 'pendiente'),
('Boulevard de los Sueños Rotos 456', 'Transferencia Bancaria', 3, 'cancelado'),
('Calle de la Amargura 789', 'Efectivo', 4, 'activo'),
('Avenida Libertador 101', 'Tarjeta de Débito', 5, 'cancelado');

-- Insertar datos en la tabla LibroPedidos
INSERT INTO `saihondb`.`libropedidos` (`Libros_idLibros`, `Pedidos_idPedidos`) VALUES 
(1, 1), 
(2, 2), 
(3, 3), 
(4, 4), 
(5, 5),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 1);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
