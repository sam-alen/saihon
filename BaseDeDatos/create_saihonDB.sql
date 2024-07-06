-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema saihonDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema saihonDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `saihonDB` DEFAULT CHARACTER SET utf8mb3 ;
USE `saihonDB` ;

-- -----------------------------------------------------
-- Table `saihonDB`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saihonDB`.`categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `saihonDB`.`libros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saihonDB`.`libros` (
  `idLibros` INT NOT NULL AUTO_INCREMENT,
  `NombreLibro` VARCHAR(100) NOT NULL,
  `Precio` DECIMAL(10,2) NOT NULL,
  `Descripcion` VARCHAR(250) NOT NULL,
  `Cantidad_Stock` INT NOT NULL,
  `Portada` TEXT NOT NULL,
  `Autor` VARCHAR(50) NOT NULL,
  `Editorial` VARCHAR(250) NOT NULL,
  `PublicationYear` INT NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  PRIMARY KEY (`idLibros`),
  INDEX `fk_Libros_Categoria1_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_Libros_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `saihonDB`.`categoria` (`idCategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `saihonDB`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saihonDB`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `NombreUsuario` VARCHAR(45) NOT NULL,
  `CorreoElectronico` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `saihonDB`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saihonDB`.`pedidos` (
  `idPedidos` INT NOT NULL AUTO_INCREMENT,
  `domicilio` VARCHAR(45) NOT NULL,
  `forma_de_pago` VARCHAR(45) NOT NULL,
  `status` VARCHAR(20) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idPedidos`),
  INDEX `fk_Pedidos_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Pedidos_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `saihonDB`.`usuario` (`idUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `saihonDB`.`Libropedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saihonDB`.`Libropedidos` (
  `idLibroPedidos` INT NOT NULL AUTO_INCREMENT,
  `Libros_idLibros` INT NOT NULL,
  `Pedidos_idPedidos` INT NOT NULL,
  PRIMARY KEY (`idLibroPedidos`),
  INDEX `fk_LibroPedidos_Libros1_idx` (`Libros_idLibros` ASC) VISIBLE,
  INDEX `fk_LibroPedidos_Pedidos1_idx` (`Pedidos_idPedidos` ASC) VISIBLE,
  CONSTRAINT `fk_LibroPedidos_Libros1`
    FOREIGN KEY (`Libros_idLibros`)
    REFERENCES `saihonDB`.`libros` (`idLibros`),
  CONSTRAINT `fk_LibroPedidos_Pedidos1`
    FOREIGN KEY (`Pedidos_idPedidos`)
    REFERENCES `saihonDB`.`pedidos` (`idPedidos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
