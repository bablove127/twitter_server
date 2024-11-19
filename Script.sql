use kdt;

create table users (
	id int auto_increment primary key,
    username varchar(50) unique not null,
    password varchar(500) not null,
    name varchar(20) not null,
    email varchar(50) not null,
    url varchar(200)
);

select * from users;
drop table users;

create table tweets (
	id int auto_increment primary key,
    userId int not null,
    createdAt datetime default now(),
    text varchar(2000) not null,
    foreign key(userId) references users(id)
);
drop table tweets;

desc tweets;

select * from tweets;

SELECT tw.id, u.username, u.name, u.url, tw.userId, tw.text, tw.createdAt FROM users as u JOIN tweets as tw  ON u.id = tw.userId