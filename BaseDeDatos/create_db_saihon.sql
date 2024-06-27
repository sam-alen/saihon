SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `Saihon-db` DEFAULT CHARACTER SET utf8;
USE `Saihon-db`;

CREATE TABLE IF NOT EXISTS `Saihon-db`.`Autor` (
  `idAutor` INT NOT NULL AUTO_INCREMENT,
  `NombreAutor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAutor`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Saihon-db`.`Categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Saihon-db`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `NombreUsuario` VARCHAR(45) NOT NULL,
  `CorreoElectronico` VARCHAR(45) NOT NULL,
  `Contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Saihon-db`.`Pedidos` (
  `idPedidos` INT NOT NULL AUTO_INCREMENT,
  `domicilio` VARCHAR(45) NOT NULL,
  `forma_de_pago` VARCHAR(45) NOT NULL,
  `status` VARCHAR(20) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idPedidos`),
  INDEX `fk_Pedidos_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Pedidos_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `Saihon-db`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Saihon-db`.`Libros` (
  `idLibros` INT NOT NULL AUTO_INCREMENT,
  `NombreLibro` VARCHAR(100) NOT NULL,
  `Precio` DECIMAL(10,2) NOT NULL,
  `Descripcion` VARCHAR(250) NOT NULL,
  `Cantidad_Stock` INT NOT NULL,
  `Portada` TEXT NOT NULL,
  `Autor_idAutor` INT NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  `Editorial_idEditorial` INT NOT NULL,
  PRIMARY KEY (`idLibros`),
  INDEX `fk_Libros_Autor_idx` (`Autor_idAutor` ASC) VISIBLE,
  INDEX `fk_Libros_Categoria1_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  INDEX `fk_Libros_Editorial_idx` (`Editorial_idEditorial` ASC) VISIBLE,
  CONSTRAINT `fk_Libros_Autor`
    FOREIGN KEY (`Autor_idAutor`)
    REFERENCES `Saihon-db`.`Autor` (`idAutor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Libros_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `Saihon-db`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Libros_Editorial`
    FOREIGN KEY (`Editorial_idEditorial`)
    REFERENCES `Saihon-db`.`Editorial` (`idEditorial`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Saihon-db`.`Editorial` (
  `idEditorial` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEditorial`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Saihon-db`.`LibroPedidos` (
  `idLibroPedidos` INT NOT NULL AUTO_INCREMENT,
  `Libros_idLibros` INT NOT NULL,
  `Pedidos_idPedidos` INT NOT NULL,
  PRIMARY KEY (`idLibroPedidos`),
  INDEX `fk_LibroPedidos_Libros1_idx` (`Libros_idLibros` ASC) VISIBLE,
  INDEX `fk_LibroPedidos_Pedidos1_idx` (`Pedidos_idPedidos` ASC) VISIBLE,
  CONSTRAINT `fk_LibroPedidos_Libros1`
    FOREIGN KEY (`Libros_idLibros`)
    REFERENCES `Saihon-db`.`Libros` (`idLibros`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_LibroPedidos_Pedidos1`
    FOREIGN KEY (`Pedidos_idPedidos`)
    REFERENCES `Saihon-db`.`Pedidos` (`idPedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
