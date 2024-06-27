-- Insertar datos en la tabla Autor
INSERT INTO `Saihon-db`.`Autor` (`NombreAutor`) VALUES 
('Gabriel García Márquez'), 
('J.K. Rowling'), 
('George Orwell'), 
('Jane Austen'), 
('Mark Twain');

-- Insertar datos en la tabla Categoria
INSERT INTO `Saihon-db`.`Categoria` (`Nombre`) VALUES 
('Ficción'), 
('Fantasía'), 
('Ciencia Ficción'), 
('Romance'), 
('Aventura');

-- Insertar datos en la tabla Usuario
INSERT INTO `Saihon-db`.`Usuario` (`NombreUsuario`, `CorreoElectronico`, `Contraseña`) VALUES 
('Juan Pérez', 'juan.perez@example.com', 'password1'), 
('María López', 'maria.lopez@example.com', 'password2'), 
('Carlos García', 'carlos.garcia@example.com', 'password3'), 
('Ana Rodríguez', 'ana.rodriguez@example.com', 'password4'), 
('Luis Fernández', 'luis.fernandez@example.com', 'password5');

-- Insertar datos en la tabla Editorial
INSERT INTO `Saihon-db`.`Editorial` (`Nombre`) VALUES 
('Editorial Planeta'), 
('Penguin Random House'), 
('HarperCollins'), 
('Macmillan Publishers'), 
('Simon & Schuster');

-- Insertar datos en la tabla Libros
INSERT INTO `Saihon-db`.`Libros` (`NombreLibro`, `Precio`, `Descripcion`, `Cantidad_Stock`, `Portada`, `Autor_idAutor`, `Categoria_idCategoria`, `Editorial_idEditorial`) VALUES 
('Cien años de soledad', 19.99, 'Una obra maestra de la literatura latinoamericana', 100, 'portada1.jpg', 1, 1, 1),
('Harry Potter y la piedra filosofal', 29.99, 'El primer libro de la saga Harry Potter', 150, 'portada2.jpg', 2, 2, 2),
('1984', 14.99, 'Una novela distópica clásica', 200, 'portada3.jpg', 3, 3, 3),
('Orgullo y prejuicio', 12.99, 'Una novela romántica clásica', 50, 'portada4.jpg', 4, 4, 4),
('Las aventuras de Tom Sawyer', 9.99, 'Una novela de aventuras para jóvenes', 120, 'portada5.jpg', 5, 5, 5);

-- Insertar datos en la tabla Pedidos
INSERT INTO `Saihon-db`.`Pedidos` (`domicilio`, `forma_de_pago`, `Usuario_idUsuario`, `status`) VALUES 
('Calle Falsa 123', 'Tarjeta de Crédito', 1, 'activo'),
('Avenida Siempre Viva 742', 'PayPal', 2, 'pendiente'),
('Boulevard de los Sueños Rotos 456', 'Transferencia Bancaria', 3, 'cancelado'),
('Calle de la Amargura 789', 'Efectivo', 4, 'activo'),
('Avenida Libertador 101', 'Tarjeta de Débito', 5, 'cancelado');

-- Insertar datos en la tabla LibroPedidos
INSERT INTO `Saihon-db`.`LibroPedidos` (`Libros_idLibros`, `Pedidos_idPedidos`) VALUES 
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
