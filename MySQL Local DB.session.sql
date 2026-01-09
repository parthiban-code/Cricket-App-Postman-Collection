

-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100) NOT NULL,
--   mobile VARCHAR(15) NOT NULL UNIQUE,
--   password VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


-- CREATE TABLE players (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100) NOT NULL,
--   mobile VARCHAR(15),
--   team VARCHAR(100) NOT NULL,
--   role ENUM('batsman', 'bowler', 'allrounder', 'wicketkeeper') NOT NULL,
--   created_by INT NOT NULL,
--   FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
-- );


-- CREATE TABLE matches (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(100) NOT NULL,
--   teamA VARCHAR(100) NOT NULL,
--   teamB VARCHAR(100) NOT NULL,
--   location VARCHAR(100),
--   overs INT NOT NULL,
--   status ENUM('ongoing', 'ended') DEFAULT 'ongoing',
--   created_by INT NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
-- );
USE cricket_scorer;

ALTER TABLE matches
ADD COLUMN tossDecision VARCHAR(100);

-- CREATE TABLE scores (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   match_id INT NOT NULL,
--   over_no INT NOT NULL,
--   ball_no INT NOT NULL,
--   batsman_id INT NOT NULL,
--   bowler_id INT NOT NULL,
--   runs INT DEFAULT 0,
--   wicket BOOLEAN DEFAULT FALSE,
--   extra_type ENUM('none', 'wide', 'no_ball', 'bye', 'leg_bye') DEFAULT 'none',
--   FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE,
--   FOREIGN KEY (batsman_id) REFERENCES players(id) ON DELETE CASCADE,
--   FOREIGN KEY (bowler_id) REFERENCES players(id) ON DELETE CASCADE
-- );
