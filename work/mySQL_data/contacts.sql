USE horizon_db;

CREATE TABLE Contacts
(
idContacts INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(45),
last_name VARCHAR(45),
email VARCHAR(45),
contact_comment VARCHAR(300),
PRIMARY KEY (idContacts)
);

INSERT INTO Contacts(first_name, last_name, email, contact_comment)
VALUES
(
"Luis","Galeas",
"luis.galeas@gmail.com",
"I love this streaming service brings alot of variety"
),
(
"Lovepreet","Thind",
"lovepreet.thind@gmail.com",
"I think im not going to use it. Its bad. I have spotify"
),
(
"Reggie","Johnson",
"luis.galeas@gmail.com",
"Love the limited selection"
),
(
"Braxton","Jackson",
"charles.jackson@gmail.com",
"Love it. I use this streaming service on a daily."
),
(
"Luis","Quevedo",
"luis.Q294@gmail.com",
"What more could I ask for form this service"
),
(
"Walter","Smith",
"Walter.smith@gmail.com",
"Such a bad service. Never going to use it again."
),
(
"Roy","Vasquez",
"Roy.Vasquez@gmail.com",
"It's an alright service. Could need some work in the future."
),
(
"Jesus","Arroyo",
"J.Arroyo@gmail.com",
"This is a random comment."
),
(
"Toni","Clark",
"T.Clark4321@gmail.com",
"..."
),
(
"Mr.","Stranger",
"mr.Stranger@gmail.com",
"This is fine. Might hack it later"
);

select * from Contacts;