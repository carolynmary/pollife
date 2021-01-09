USE polls;

INSERT INTO polls (id, user, question, optionOne, optionTwo, optionThree, optionFour, createdAt)
VALUES (1, "Rick Grimes", "Where to eat?", "Rosa Mexicano", "Gino's Pizzaria Pizzaria", "home", "O'Brien's Irish Pub", "1999-12-31 23:59:11"),
       (2, "Rick Grimes", "What to watch?", "movie", "tv", "nothing", "documentary", "1999-12-31 23:59:22"),
       (3, "Carl Grimes", "Where to vaca?", "Florida", "Cali", "Vermont", "Vegas", "1999-12-31 23:59:33");

INSERT INTO votes (id, optionSelect, pollId, createdAt)
VALUES (1, "home", 1, "1999-12-31 23:11:59"),
       (2, "Rosa Mexicano", 1, "1999-12-31 23:22:59"),
       (3, "Rosa Mexicano", 1, "1999-12-31 23:33:59"),
       (4, "O'Brien's Irish Pub", 1, "1999-12-31 23:44:59"),
       (5, "Gino's Pizzaria", 1, "1999-12-31 23:55:59"),
       (6, "home", 1, "1999-12-31 23:09:59"),
       (7, "home", 1, "1999-12-31 23:08:59"),
       (8, "movie", 2, "1999-12-31 23:07:59"),
       (9, "movie", 2, "1999-12-31 23:06:59"),
       (10, "tv", 2, "1999-12-31 23:05:59"),
       (11, "documentary", 2, "1999-12-31 23:04:59"),
       (12, "documentary", 2, "1999-12-31 23:03:59"),
       (13, "documentary", 2, "1999-12-31 23:02:59"),
       (14, "documentary", 2, "1999-12-31 23:01:59"),
       (15, "Vermont", 3, "1999-10-31 23:14:59"),
       (16, "Vermont", 3, "1999-10-31 23:13:59"),
       (17, "Vermont", 3, "1999-10-31 23:12:59"),
       (18, "Vermont", 3, "1999-10-31 23:11:59"),
       (19, "Cali", 3, "1999-10-31 23:10:59");