-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bdd
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `authorId` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Smartphone X1','Smartphone haut de gamme avec écran OLED et caméra 48MP',1,799.99,150,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(2,'Laptop Pro 15','Ordinateur portable puissant avec processeur Intel Core i7',2,1499.99,75,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(3,'Casque sans fil AirX','Casque Bluetooth avec réduction de bruit active',3,299.99,200,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(4,'Montre connectée FitX','Montre intelligente avec suivi d\'activité et notifications',1,199.99,120,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(5,'Tablette Tab10','Tablette Android avec écran 10 pouces et 64Go de stockage',4,399.99,180,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(6,'Enceinte Bluetooth BassBooster','Enceinte portable avec son stéréo puissant',5,129.99,250,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(7,'Appareil photo reflex Canon EOS','Appareil photo reflex numérique avec objectif 18-55mm',2,799.00,50,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(8,'Sac à dos anti-vol','Sac à dos avec compartiments de sécurité et design élégant',6,59.99,300,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(9,'Chargeur solaire EcoPower','Chargeur solaire portable avec batterie intégrée',7,49.99,400,'2024-12-20 13:47:36','2024-12-20 13:47:36'),(10,'Batterie externe PowerMax','Batterie externe 20,000mAh pour recharger vos appareils',8,39.99,500,'2024-12-20 13:47:36','2024-12-20 13:47:36');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-20 17:46:52
