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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `activated` tinyint(1) DEFAULT '0',
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `role` enum('USER','ADMIN') DEFAULT 'USER',
  `cguActivated` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,0,'Jane Doe','jane@doe.pt','$2a$10$hO58DlOIjFr6PNSN3XiFhOpJPr5ZXK.wyJlwh3Pj2K33G14zws9Qy','1990-01-01','ADMIN',0,'2024-12-20 14:58:35','2024-12-20 14:58:35'),(6,0,'Jane Doe','jane@doe.pt','$2a$10$asT/K4r.KIJfSu7R6dJ8uefmgyj6C0NjQsbcPg2CHJ4vLq4cQjFSO','1990-01-01','ADMIN',0,'2024-12-20 14:59:47','2024-12-20 14:59:47'),(7,0,'Jane Doe','jane@doe.pt','$2a$10$dkAm8me0iF462R8rd0nWW.avwtxevl9S/esYclqv1w/cM.SYeqZ5.','1990-01-01','ADMIN',0,'2024-12-20 15:00:26','2024-12-20 15:00:26'),(8,0,'Jane Doe','jane@doe.pt','$2a$10$IUBsIeP7K9i/ssId/VG/Se9Bodfqwp4fhvdUhnIi36rlynh1TPeme','1990-01-01','ADMIN',0,'2024-12-20 15:05:37','2024-12-20 15:05:37'),(9,0,'Jane Doe','jane@doe.pt','$2a$10$yhW2ge5WlcLGJ0Zr31s0yesHpBCxDqOPOEm1mGP2WAzFt.0XMUUvO','1990-01-01','ADMIN',0,'2024-12-20 15:11:03','2024-12-20 15:11:03'),(10,0,'Jane Doe','jane@doe.pt','$2a$10$3naZ676paI7c5GpLxfZYsO2sC.dQmmhX5uGymGCrYMWt/cfVDPPn6','1990-01-01','ADMIN',0,'2024-12-20 15:24:52','2024-12-20 15:24:52'),(11,0,'Jane Doe','jane@doe.pt','$2a$10$VwZa9Fxq1DWy0yWq1gwPbO77XLAmccuYoow35MJ.J5VLSij9k2uYi','1990-01-01','ADMIN',0,'2024-12-20 15:25:43','2024-12-20 15:25:43'),(12,0,'Jane Doe','jane@doe.pt','$2a$10$CK8C1tgh1Nj455Q6wN32v.PT/6i9XO62Q2A/7N4bnZWaeh2P/zDfu','1990-01-01','ADMIN',0,'2024-12-20 15:32:29','2024-12-20 15:32:29'),(13,0,'Jane Doe','jane@doe.pt','$2a$10$iK9LmjyB2xC/nu0zhlf6TOdif.TM/EoiGHr8/OAP2MrUtmj7kQzyO','1990-01-01','ADMIN',0,'2024-12-20 15:34:09','2024-12-20 15:34:09'),(14,0,'Jane Doe','jane@doe.pt','$2a$10$YkDVEIzbHGQX1yGvXAruqO2Q/WLXgexXjAJz0PllW0su8qsMdNsQW','1990-01-01','ADMIN',0,'2024-12-20 15:37:58','2024-12-20 15:37:58'),(15,0,'Jane Doe','jane@doe.pt','$2a$10$km2UpZT1DqJXqeWmlz7tAOdGxdOM7p6RG220OhnDnbPzSp5KBW9Ha','1990-01-01','ADMIN',0,'2024-12-20 15:45:42','2024-12-20 15:45:42'),(16,0,'Jane Doe','jane@doe.pt','$2a$10$0soxh3if8lTr.sZfkxNzqO8b0oqnwnLKQnsLdtPgPCqHFNtARj1bK','1990-01-01','ADMIN',0,'2024-12-20 15:54:42','2024-12-20 15:54:42'),(17,0,'Jane Doe','jane@doe.pt','$2a$10$691OTprmcgFH2.mHzv29EOv10j87KDQrhF2P1buvjJX5zvTNduhHS','1990-01-01','ADMIN',0,'2024-12-20 16:12:43','2024-12-20 16:12:43'),(18,0,'Jane Doe','jane@doe.pt','$2a$10$eWOckC3085ilKNUnEuvAVe/6Jfcnc4gVdwuOlOPHqdTHwAHlQOrsG','1990-01-01','ADMIN',0,'2024-12-20 16:19:33','2024-12-20 16:19:33');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
