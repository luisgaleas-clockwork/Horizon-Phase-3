-- CREATE DATABASE horizon_db;

-- USE horizon_db;

CREATE TABLE Products 
(
idProducts INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30),
descripton VARCHAR(250),
img_url VARCHAR(100),
artist VARCHAR(15),
genre VARCHAR(15)
PRIMARY KEY (idProducts)
)



-- INSERT INTO Products (product_name,artist,img_url,descripton,genre)
-- VALUES
-- ("Bohemian Rhapsody",
-- "Queen",
-- "https://m.media-amazon.com/images/I/81yo5sz9-cL._SS500_.jpg",
-- "Bohemian Rhapsody is a song by the British rock band Queen. It was written by Freddie Mercury for the band's 1975 album A Night at the Opera.",
-- "rock"),
-- ("SYRE",
-- "Jaden Smith",
-- "https://m.media-amazon.com/images/I/61rr2Hv5RFL._SS500_.jpg",
-- "The album debuted at number 24 on the U.S. Billboard 200 for the chart dated December 9, 2017.",
-- "rap"),
-- ("Stir Fry",
-- "Migos",
-- "https://m.media-amazon.com/images/I/81rzvejZXXL._SS500_.jpg",
-- "It was released on December 20, 2017, as the second single from Migos' third studio album Culture II (2018).",
-- "rap"),
-- ("X100PRE",
-- "Bad Bunny",
-- "https://m.media-amazon.com/images/I/7114WsBoV6L._SS500_.jpg",
-- "Debut studio album by Puerto Rican Latin trap singer Bad Bunny. It was announced on December 23, 2018, and released on Christmas Eve, by Rimas Entertainment.It features guest appearances from Diplo, El Alfa and Drake.",
-- "latino"),
-- ("ZUU",
-- "Denzel Curry",
-- "https://m.media-amazon.com/images/I/815MX-TKfiL._SS500_.jpg",
-- "Zuu (stylized in all caps) is the fourth studio album by American rapper Denzel Curry, released through Loma Vista Recordings on May 31, 2019.",
-- "rap"),
-- ("Man on the Moon:The End of Day",
-- "Kid Cudi",
-- "https://m.media-amazon.com/images/I/81f5NWkRW+L._SS500_.jpg",
-- "Man on the Moon: The End of Day is the debut studio album by American rapper Kid Cudi. It was released on September 15, 2009, by Dream On, GOOD Music and Universal Motown Records.",
-- "unknown"),
-- ("Die Lit",
-- "Playboi Carti",
-- "https://m.media-amazon.com/images/I/81Be7v9SsfL._SS500_.jpg",
-- "Die Lit is the debut studio album by American rapper Playboi Carti. It was released on May 11, 2018, by AWGE Label and Interscope Records.",
-- "rap"),
-- ("Section.80",
-- "Kendrick lamar",
-- "https://m.media-amazon.com/images/I/71pFVtJW-GL._SS500_.jpg",
-- "The concept album features lyrical themes delivered by Lamar such as the 1980s crack epidemic, racism and medication tolerance.",
-- "rap"),
-- ("Wake up in the sky",
-- "Gucci Mane",
-- "https://m.media-amazon.com/images/I/613p0+GFw3L._SS500_.jpg",
-- "The art cover features Mane's signature ice cream cone, which is also tattooed on his face, in the clouds during a flight.",
-- "rap"),
-- ("Funk Wav Bounces Vol.1",
-- "Calvin Harris",
-- "https://m.media-amazon.com/images/I/91E1jJ0l8tL._SS500_.jpg",
-- "The album features guest vocals by Frank Ocean, Migos, Schoolboy Q.",
-- "EDM"),
-- ("ye",
-- "Kanye West",
-- "https://m.media-amazon.com/images/I/714yVKHQM-L._SS500_.jpg",
-- "Ye is the second of five seven-track albums produced by West in what have been referred to as the Wyoming Sessions,[5][6] and set to be released weekly following the release of Pusha T's Daytona.",
-- "rap"),
-- ("CrasH Talk",
-- "Schoolboy Q",
-- "https://m.media-amazon.com/images/I/71RHxs0dqzL._SS500_.jpg",
-- "Crash Talk (stylized as CrasH Talk) is the fifth studio album by American rapper Schoolboy Q, released on April 26, 2019, through Interscope Records and Top Dawg Entertainment.",
-- "rap");

-- SELECT 
--         Products.idProducts,
--         Products.product_name,
--         Products.descripton,
--         Products.img_url,
--         Products.artist,
--         Price.price,
--         Price.currency
--     FROM Products 
--     INNER JOIN Price ON Price.idProducts = Products.idProducts
--     ORDER BY Price.price DESC








