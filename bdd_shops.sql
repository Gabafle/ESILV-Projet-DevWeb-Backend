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
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT 'NewShop',
  `description` varchar(255) DEFAULT '',
  `address` varchar(255) DEFAULT 'Sweet Home Alabama',
  `avis` varchar(255) DEFAULT '',
  `note` int DEFAULT '0',
  `articles` json DEFAULT NULL,
  `owner` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
INSERT INTO `shops` VALUES (1,'Shop A','Description for Shop A','Address A','Good',4,'[\"item1\", \"item2\"]',1,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(2,'Shop B','Description for Shop B','Address B','Very Good',5,'[\"item3\", \"item4\"]',2,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(3,'Shop C','Description for Shop C','Address C','Okay',3,'[\"item5\", \"item6\"]',3,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(4,'Shop D','Description for Shop D','Address D','Excellent',5,'[\"item7\", \"item8\"]',4,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(5,'Shop E','Description for Shop E','Address E','Poor',2,'[\"item9\", \"item10\"]',5,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(6,'Shop F','Description for Shop F','Address F','Bad',1,'[\"item11\", \"item12\"]',6,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(7,'Shop G','Description for Shop G','Address G','Great',4,'[\"item13\", \"item14\"]',7,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(8,'Shop H','Description for Shop H','Address H','Excellent',5,'[\"item15\", \"item16\"]',8,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(9,'Shop I','Description for Shop I','Address I','Good',4,'[\"item17\", \"item18\"]',9,'2024-12-20 17:06:00','2024-12-20 17:06:00'),(10,'Shop J','Description for Shop J','Address J','Very Good',5,'[\"item19\", \"item20\"]',10,'2024-12-20 17:06:00','2024-12-20 17:06:00');
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
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
