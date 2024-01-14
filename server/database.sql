//create database
createdb youtubeclone

//create table videos
CREATE TABLE videos (
    videoId uuid NOT NULL PRIMARY KEY,
    videoTitle VARCHAR(300) NOT NULL,
    videoDescription TEXT NOT NULL,
    videoThumbnailUrl VARCHAR(100) NOT NULL
);

//create table users
CREATE TABLE users (
    userId uuid NOT NULL PRIMARY KEY,
    username VARCHAR(80) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL
);

//add userId foreign key in videos
ALTER TABLE videos
ADD COLUMN userId uuid;

ALTER TABLE videos
ADD CONSTRAINT fk_userId
FOREIGN KEY (userId)
REFERENCES users(userId);

//insert new user
INSERT INTO users VALUES ('40e6215d-b5c6-4896-987c-f30f3678f608', 'freeCodeCamp.org', 'freecodecamporg123@gmail.com', 'freecodecamporgpass');

//insert new video
INSERT INTO videos VALUES ('6ecd8c99-4036-403d-bf84-cf8400f67836', 'Learn PostgreSQL in the best possible way!', 'Test description', 'url supposed to be here', '40e6215d-b5c6-4896-987c-f30f3678f608');

//get all videos
SELECT * FROM videos;

//get videos by videoId
SELECT * FROM videos WHERE videoId='6ecd8c99-4036-403d-bf84-cf8400f67836';

//get all users
SELECT * FROM users;

//get user by userId
SELECT * FROM users WHERE userId='40e6215d-b5c6-4896-987c-f30f3678f608';

//get all videos for a specific userId
SELECT * FROM videos WHERE userId='40e6215d-b5c6-4896-987c-f30f3678f608';

//get user information for a specific video
SELECT users.userId, users.username  
FROM users
JOIN videos ON users.userId=videos.userId
WHERE videos.videoId='6ecd8c99-4036-403d-bf84-cf8400f67836';
