-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS,
  UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
  FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE,
  SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema rawg
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema rawg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rawgDatabase`;
USE `rawgDatabase`;
-- -----------------------------------------------------
-- Table `rawg`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rawgDatabase`.`games` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `background_image` VARCHAR(255) NULL,
  `metacritic` INT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `rawg`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rawgDatabase`.`genres` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `slug` VARCHAR(45) NOT NULL,
  `image_background` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `rawg`.`parent_platforms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rawgDatabase`.`parent_platforms` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `slug` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `rawg`.`genres_games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rawgDatabase`.`games_genres` (
  `genres_id` INT NOT NULL,
  `games_id` INT NOT NULL,
  PRIMARY KEY (`genres_id`, `games_id`),
  INDEX `fk_genres_has_games_games1_idx` (`games_id` ASC) VISIBLE,
  INDEX `fk_genres_has_games_genres_idx` (`genres_id` ASC) VISIBLE,
  CONSTRAINT `fk_genres_has_games_genres` FOREIGN KEY (`genres_id`) REFERENCES `rawgDatabase`.`genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_genres_has_games_games1` FOREIGN KEY (`games_id`) REFERENCES `rawgDatabase`.`games` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `rawg`.`games_parent_platforms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rawgDatabase`.`games_parent_platforms` (
  `games_id` INT NOT NULL,
  `parent_platforms_id` INT NOT NULL,
  PRIMARY KEY (`games_id`, `parent_platforms_id`),
  INDEX `fk_games_has_parent_platforms_parent_platforms1_idx` (`parent_platforms_id` ASC) VISIBLE,
  INDEX `fk_games_has_parent_platforms_games1_idx` (`games_id` ASC) VISIBLE,
  CONSTRAINT `fk_games_has_parent_platforms_games1` FOREIGN KEY (`games_id`) REFERENCES `rawgDatabase`.`games` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_has_parent_platforms_parent_platforms1` FOREIGN KEY (`parent_platforms_id`) REFERENCES `rawgDatabase`.`parent_platforms` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `rawg`.`stores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rawgDatabase`.`stores` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `slug` VARCHAR(45) NOT NULL,
  `image_background` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `rawg`.`games_stores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rawgDatabase`.`games_stores` (
  `games_id` INT NOT NULL,
  `stores_id` INT NOT NULL,
  PRIMARY KEY (`games_id`, `stores_id`),
  INDEX `fk_games_has_stores_stores1_idx` (`stores_id` ASC) VISIBLE,
  INDEX `fk_games_has_stores_games1_idx` (`games_id` ASC) VISIBLE,
  CONSTRAINT `fk_games_has_stores_games1` FOREIGN KEY (`games_id`) REFERENCES `rawgDatabase`.`games` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_has_stores_stores1` FOREIGN KEY (`stores_id`) REFERENCES `rawgDatabase`.`stores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;
SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;