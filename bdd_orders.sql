drop table if exists `orders`;

create table `orders` (
     `id` int not null auto_increment,
     `clientID` varchar(255) not null,
     `status` varchar(10),
     `articles` json not null,
     `totalPrice` decimal(10,2), 
     `createdAt` datetime default current_timestamp,
     `updatedAt` datetime default current_timestamp on update current_timestamp,
     constraint pkey_orders primary key (`id`),
     constraint valid_status check (`status` in (
          'ordered',
          'in_transit',
          'delivered'
     )),
     constraint valid_totalPrice check (`totalPrice` >= 0)
) engine=InnoDB auto_increment=11 default charset=utf8mb4 collate=utf8mb4_0900_ai_ci;