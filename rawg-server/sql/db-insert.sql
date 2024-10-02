use rawgDatabase;
-- Insert data into `rawg`.`games`
delete from `rawgDatabase`.`games`;
INSERT INTO `rawgDatabase`.`games` (`id`, `name`, `background_image`, `metacritic`)
VALUES (
    1,
    'The Witcher 3: Wild Hunt',
    'witcher3.jpg',
    93
  ),
  (2, 'Cyberpunk 2077', 'cyberpunk2077.jpg', 85),
  (3, 'Red Dead Redemption 2', 'rdr2.jpg', 97),
  (4, 'Grand Theft Auto V', 'gtav.jpg', 96),
  (
    5,
    'The Legend of Zelda: Breath of the Wild',
    'zelda_botw.jpg',
    97
  ),
  (6, 'God of War', 'god_of_war.jpg', 94),
  (
    7,
    'Horizon Zero Dawn',
    'horizon_zero_dawn.jpg',
    89
  ),
  (
    8,
    'Assassins Creed Odyssey',
    'ac_odyssey.jpg',
    83
  ),
  (9, 'Dark Souls III', 'dark_souls_3.jpg', 89),
  (
    10,
    'Sekiro: Shadows Die Twice',
    'sekiro.jpg',
    90
  );
-- Insert data into `rawg`.`genres`
delete from `rawgDatabase`.`genres`;
INSERT INTO `rawgDatabase`.`genres` (`id`, `name`, `slug`, `image_background`)
VALUES (1, 'Action', 'action', 'action_bg.jpg'),
  (2, 'Adventure', 'adventure', 'adventure_bg.jpg'),
  (3, 'RPG', 'rpg', 'rpg_bg.jpg'),
  (4, 'Shooter', 'shooter', 'shooter_bg.jpg'),
  (5, 'Strategy', 'strategy', 'strategy_bg.jpg'),
  (6, 'Puzzle', 'puzzle', 'puzzle_bg.jpg'),
  (7, 'Racing', 'racing', 'racing_bg.jpg'),
  (8, 'Sports', 'sports', 'sports_bg.jpg'),
  (
    9,
    'Simulation',
    'simulation',
    'simulation_bg.jpg'
  ),
  (10, 'Horror', 'horror', 'horror_bg.jpg');
-- Insert data into `rawg`.`parent_platforms`
delete from `rawgDatabase`.`parent_platforms`;
INSERT INTO `rawgDatabase`.`parent_platforms` (`id`, `name`, `slug`)
VALUES (1, 'PC', 'pc'),
  (2, 'PlayStation', 'playstation'),
  (3, 'Xbox', 'xbox'),
  (4, 'Nintendo', 'nintendo'),
  (5, 'Mobile', 'mobile'),
  (6, 'Mac', 'mac'),
  (7, 'Linux', 'linux'),
  (8, 'Web', 'web'),
  (9, 'VR', 'vr'),
  (10, 'Other', 'other');
-- Insert data into `rawg`.`genres_games`
delete from `rawgDatabase`.`games_genres`;
INSERT INTO `rawgDatabase`.`games_genres` (`genres_id`, `games_id`)
VALUES (1, 1),
  (2, 1),
  (3, 1),
  (1, 2),
  (4, 2),
  (1, 3),
  (2, 3),
  (3, 3),
  (1, 4),
  (4, 4),
  (1, 5),
  (2, 5),
  (3, 5),
  (1, 6),
  (2, 6),
  (3, 6),
  (1, 7),
  (2, 7),
  (3, 7),
  (1, 8),
  (2, 8),
  (3, 8),
  (1, 9),
  (2, 9),
  (3, 9),
  (1, 10),
  (2, 10),
  (3, 10);
-- Insert data into `rawg`.`games_parent_platforms`
delete from `rawgDatabase`.`games_parent_platforms`;
INSERT INTO `rawgDatabase`.`games_parent_platforms` (`games_id`, `parent_platforms_id`)
VALUES (1, 1),
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 2),
  (2, 3),
  (3, 1),
  (3, 2),
  (3, 3),
  (4, 1),
  (4, 2),
  (4, 3),
  (5, 4),
  (6, 2),
  (7, 1),
  (7, 2),
  (8, 1),
  (8, 2),
  (9, 1),
  (10, 1);
-- Insert data into `rawg`.`stores`
delete from `rawgDatabase`.`stores`;
INSERT INTO `rawgDatabase`.`stores` (`id`, `name`, `slug`, `image_background`)
VALUES (1, 'Steam', 'steam', 'steam_bg.jpg'),
  (
    2,
    'Epic Games',
    'epic-games',
    'epic_games_bg.jpg'
  ),
  (
    3,
    'PlayStation Store',
    'playstation-store',
    'ps_store_bg.jpg'
  ),
  (
    4,
    'Xbox Store',
    'xbox-store',
    'xbox_store_bg.jpg'
  ),
  (
    5,
    'Nintendo eShop',
    'nintendo-eshop',
    'nintendo_eshop_bg.jpg'
  ),
  (6, 'GOG', 'gog', 'gog_bg.jpg'),
  (
    7,
    'Humble Store',
    'humble-store',
    'humble_store_bg.jpg'
  ),
  (8, 'Origin', 'origin', 'origin_bg.jpg'),
  (9, 'Uplay', 'uplay', 'uplay_bg.jpg'),
  (10, 'itch.io', 'itch-io', 'itch_io_bg.jpg');
-- Insert data into `rawg`.`games_stores`
delete from `rawgDatabase`.`games_stores`;
INSERT INTO `rawgDatabase`.`games_stores` (`games_id`, `stores_id`)
VALUES (1, 1),
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 2),
  (2, 3),
  (3, 1),
  (3, 2),
  (3, 3),
  (4, 1),
  (4, 2),
  (4, 3),
  (5, 4),
  (6, 2),
  (7, 1),
  (7, 2),
  (8, 1),
  (8, 2),
  (9, 1),
  (10, 1);
-- Reset SQL_MODE, FOREIGN_KEY_CHECKS, and UNIQUE_CHECKS
SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;