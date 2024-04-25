-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 16 avr. 2024 à 05:58
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `salem`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `username` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `contact` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `name`, `username`, `contact`) VALUES
(1, 'coucou', 'salama', '0344896512'),
(2, 'Bonsoir', 'veloma', '0347852145'),
(3, 'Salut', 'manaona', '0331274163'),
(4, 'Alaprochaine', 'mandrapihaona', '0321547891');

-- --------------------------------------------------------

--
-- Structure de la table `reservation_chambre`
--

DROP TABLE IF EXISTS `reservation_chambre`;
CREATE TABLE IF NOT EXISTS `reservation_chambre` (
  `id_reservation_chambre` int NOT NULL AUTO_INCREMENT,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_client` int NOT NULL,
  `id_chambre` int NOT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id_reservation_chambre`),
  KEY `id_client` (`id_client`),
  KEY `id_chambre` (`id_chambre`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reservation_chambre`
--

INSERT INTO `reservation_chambre` (`id_reservation_chambre`, `date_debut`, `date_fin`, `id_client`, `id_chambre`, `status`) VALUES
(1, '2023-07-10', '2023-07-26', 1, 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `reservation_piscine`
--

DROP TABLE IF EXISTS `reservation_piscine`;
CREATE TABLE IF NOT EXISTS `reservation_piscine` (
  `id_reservation_piscine` int NOT NULL AUTO_INCREMENT,
  `date_piscine` date NOT NULL,
  `heure_debut_piscine` time DEFAULT NULL,
  `heure_fin_piscine` time DEFAULT NULL,
  `id_client` int NOT NULL,
  `id_piscine` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id_reservation_piscine`),
  KEY `id_client` (`id_client`),
  KEY `id_piscine` (`id_piscine`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reservation_piscine`
--

INSERT INTO `reservation_piscine` (`id_reservation_piscine`, `date_piscine`, `heure_debut_piscine`, `heure_fin_piscine`, `id_client`, `id_piscine`, `status`) VALUES
(1, '2023-07-25', '21:05:32', '21:10:32', 1, 1, 1),
(2, '2023-07-25', '14:24:18', '14:33:18', 3, 3, 0),
(3, '2023-08-09', '11:10:21', '11:33:03', 7, 7, 0);

-- --------------------------------------------------------

--
-- Structure de la table `reservation_salle`
--

DROP TABLE IF EXISTS `reservation_salle`;
CREATE TABLE IF NOT EXISTS `reservation_salle` (
  `id_reservation_salle` int NOT NULL AUTO_INCREMENT,
  `date_salle` date NOT NULL,
  `heure_debut_salle` time NOT NULL,
  `heure_fin_salle` time NOT NULL,
  `id_client` int NOT NULL,
  `id_salle` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id_reservation_salle`),
  KEY `id_client` (`id_client`),
  KEY `id_salle` (`id_salle`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reservation_salle`
--

INSERT INTO `reservation_salle` (`id_reservation_salle`, `date_salle`, `heure_debut_salle`, `heure_fin_salle`, `id_client`, `id_salle`, `status`) VALUES
(1, '2023-07-12', '71:35:58', '21:35:58', 1, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `visiteur`
--

DROP TABLE IF EXISTS `visiteur`;
CREATE TABLE IF NOT EXISTS `visiteur` (
  `id_visiteur` int NOT NULL AUTO_INCREMENT,
  `heure_visite` datetime NOT NULL,
  `mois_visite` int NOT NULL,
  `annee_visite` int NOT NULL,
  PRIMARY KEY (`id_visiteur`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `visiteur`
--

INSERT INTO `visiteur` (`id_visiteur`, `heure_visite`, `mois_visite`, `annee_visite`) VALUES
(1, '2023-07-11 18:19:13', 2, 2020),
(2, '2023-07-05 18:22:46', 3, 2020),
(3, '2023-07-12 18:23:07', 3, 2021),
(4, '2023-07-12 18:38:36', 3, 2021);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
