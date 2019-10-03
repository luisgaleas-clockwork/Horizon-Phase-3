CREATE DATABASE horizon_db;

USE horizon_db;

drop table Products;

CREATE TABLE Products 
(
idProducts INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30),
descripton VARCHAR(250),
img_url VARCHAR(100),
artist VARCHAR(50),
genre VARCHAR(30),
PRIMARY KEY (idProducts)
);




INSERT INTO Products (product_name,artist,img_url,descripton,genre)
 VALUES
 ("Astro World",
 "Travis Scott",
 "https://m.media-amazon.com/images/I/81bCqW8HNvL._SS500_.jpg",
 "Astroworld is the third studio album by American rapper and record producer Travis Scott. It was released on August 3, 2018, through Cactus Jack Records and Grand Hustle Records, and distributed by Epic Records.",
 "rap"
 ),
("Vibras",
 "J Balvin",
 "https://m.media-amazon.com/images/I/5134B2lEaxL._SS500_.jpg",
 "Fifth studio album by Colombian reggaeton singer J Balvin released on 25 May 2018 through Universal Latin.",
 "latino"
 ),
 ("Oasis",
 "J Balvin, Bad Bunny",
 "https://m.media-amazon.com/images/I/71SXKTp8PlL._SS500_.jpg",
 "Oasis is a collaborative album by Colombian singer J Balvin and Puerto Rican rapper Bad Bunny, released on 28 June 2019.",
 "latino"
 ),
("Eject",
 "Cazzette",
 "https://m.media-amazon.com/images/I/61ktdYVkqTL._SS500_.jpg",
 "Cazzette are a Swedish electronic dance music duo, founded in 2011 by musicians Alexander Björklund and Sebastian Furrer.",
 "EDM"
 ),
("More Than You know",
 "Axwell /\ Ingrosso",
 "https://m.media-amazon.com/images/I/81nkS39Hu9L._SS500_.jpg",
 "The album was in the making since 2014. It was stated numerous times that it would be released in November 2016 and February 2017, although this never came to fruition.",
 "EDM"
 ),
("Stories",
 "Avicii",
 "https://m.media-amazon.com/images/I/61xhLvXwHHL._SS500_.jpg ",
 "Stories is the second studio album by Swedish electronic music producer Avicii, released on 2 October 2015 by PRMD Music and Island Records.",
 "EDM"
 ),
("Cage The Elephant",
 "Cage The Elephant",
 "https://m.media-amazon.com/images/I/81rIXLB+qDL._SS500_.jpg",
 "Cage the Elephant is the first studio album by American rock band Cage the Elephant after changing their name.",
 "rock"
 ),
("Origins",
 "Imagine Dragons",
 "https://m.media-amazon.com/images/I/81TwY1AcKBL._SS500_.jpg",
 "Origins is the fourth studio album by the American pop rock band Imagine Dragons, released on November 9, 2018 by Kidinakorner, Polydor Records and Interscope Records.",
 "rock"
 ),
("LAUNCH FLY LAND",
 "DREAMERS",
 "https://m.media-amazon.com/images/I/71KwrafT24L._SS500_.jpg",
 "The album cover displays a picture of a SpaceX Falcon 9 at liftoff with a purple hue.",
 "rock"
 ),
("Atlas",
 "The Score",
 "https://m.media-amazon.com/images/I/91cu6q8i4LL._SS500_.jpg",
 "The Score released an EP called Myths & Legends on April 14, 2017, including new songs Higher and Miracle.",
 "rock"
 ),
 ("AmericanBeauty...",
 "Fall Out Boy",
 "https://m.media-amazon.com/images/I/81rJON7fk6L._SS500_.jpg",
 "The album's title track was released as the second single in the UK on December 15, 2014, receiving a radio premiere a month before on November 24, 2014.",
 "rock"
 ),
 ("Bohemian Rhapsody",
 "Queen",
 "https://m.media-amazon.com/images/I/81yo5sz9-cL._SS500_.jpg",
 "Bohemian Rhapsody is a song by the British rock band Queen. It was written by Freddie Mercury for the band's 1975 album A Night at the Opera.",
 "rock"),
 ("SYRE",
 "Jaden Smith",
 "https://m.media-amazon.com/images/I/61rr2Hv5RFL._SS500_.jpg",
 "The album debuted at number 24 on the U.S. Billboard 200 for the chart dated December 9, 2017.",
 "rap"),
 ("Stir Fry",
 "Migos",
 "https://m.media-amazon.com/images/I/81rzvejZXXL._SS500_.jpg",
 "It was released on December 20, 2017, as the second single from Migos' third studio album Culture II (2018).",
 "rap"),
 ("X100PRE",
 "Bad Bunny",
 "https://m.media-amazon.com/images/I/7114WsBoV6L._SS500_.jpg",
 "Debut studio album by Puerto Rican Latin trap singer Bad Bunny. It was announced on December 23, 2018, and released on Christmas Eve, by Rimas Entertainment.It features guest appearances from Diplo, El Alfa and Drake.",
 "latino"),
 ("ZUU",
 "Denzel Curry",
 "https://m.media-amazon.com/images/I/815MX-TKfiL._SS500_.jpg",
 "Zuu (stylized in all caps) is the fourth studio album by American rapper Denzel Curry, released through Loma Vista Recordings on May 31, 2019.",
 "rap"),
 ("Man on the Moon:The End of Day",
 "Kid Cudi",
 "https://m.media-amazon.com/images/I/81f5NWkRW+L._SS500_.jpg",
 "Man on the Moon: The End of Day is the debut studio album by American rapper Kid Cudi. It was released on September 15, 2009, by Dream On, GOOD Music and Universal Motown Records.",
 "unknown"),
 ("Die Lit",
 "Playboi Carti",
 "https://m.media-amazon.com/images/I/81Be7v9SsfL._SS500_.jpg",
 "Die Lit is the debut studio album by American rapper Playboi Carti. It was released on May 11, 2018, by AWGE Label and Interscope Records.",
 "rap"),
 ("Section.80",
 "Kendrick lamar",
 "https://m.media-amazon.com/images/I/71pFVtJW-GL._SS500_.jpg",
 "The concept album features lyrical themes delivered by Lamar such as the 1980s crack epidemic, racism and medication tolerance.",
 "rap"),
 ("Wake up in the sky",
 "Gucci Mane",
 "https://m.media-amazon.com/images/I/613p0+GFw3L._SS500_.jpg",
 "The art cover features Mane's signature ice cream cone, which is also tattooed on his face, in the clouds during a flight.",
 "rap"),
 ("Funk Wav Bounces Vol.1",
 "Calvin Harris",
 "https://m.media-amazon.com/images/I/91E1jJ0l8tL._SS500_.jpg",
 "The album features guest vocals by Frank Ocean, Migos, Schoolboy Q.",
 "EDM"),
 ("ye",
 "Kanye West",
 "https://m.media-amazon.com/images/I/714yVKHQM-L._SS500_.jpg",
 "Ye is the second of five seven-track albums produced by West in what have been referred to as the Wyoming Sessions,[5][6] and set to be released weekly following the release of Pusha T's Daytona.",
 "rap"),
 ("CrasH Talk",
 "Schoolboy Q",
 "https://m.media-amazon.com/images/I/71RHxs0dqzL._SS500_.jpg",
 "Crash Talk (stylized as CrasH Talk) is the fifth studio album by American rapper Schoolboy Q, released on April 26, 2019, through Interscope Records and Top Dawg Entertainment.",
 "rap"),
 ("Baby Shark",
 "Pinkfong",
 "https://m.media-amazon.com/images/I/7186e0P7rgL._SS500_.jpg",
 "Baby Shark is a children's song about a family of sharks. Popular as a campfire song, it has become popular since 2016, spreading through social media, online video, and radio.",
 "unknown"
 );

SELECT 
        Products.idProducts,
        Products.product_name,
        Products.descripton,
        Products.img_url,
        Products.artist,
        Products.genre,
        Price.price,
        Price.currency
    FROM Products 
    INNER JOIN Price ON Price.idProducts = Products.idProducts;









