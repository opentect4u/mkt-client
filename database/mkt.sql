-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 11, 2019 at 11:22 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mkt`
--

-- --------------------------------------------------------

--
-- Table structure for table `md_district`
--

CREATE TABLE `md_district` (
  `district_code` int(10) NOT NULL,
  `district_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `md_district`
--

INSERT INTO `md_district` (`district_code`, `district_name`) VALUES
(1, 'OTHERS'),
(2, 'MALDAH'),
(3, 'BURDWAN'),
(4, 'KOLKATA'),
(5, 'ALIPURDUAR'),
(6, 'DAKHSHIN DINAJPUR'),
(7, 'WEST MIDNAPORE'),
(8, 'HOWRAH'),
(9, 'HOOGHLY'),
(10, 'MURSHIDABAD'),
(11, 'NORTH 24 PARGANAS'),
(12, 'EAST MIDNAPORE'),
(13, 'UTTAR DINAJPUR'),
(14, 'NADIA'),
(15, 'BANKURA'),
(16, 'PURULIA'),
(17, 'COOCHBEHAR'),
(18, 'BIRBHUM'),
(19, 'DARJEELING'),
(20, 'JALPAIGURI'),
(21, 'SOUTH 24 PARGANAS');

-- --------------------------------------------------------

--
-- Table structure for table `md_project_type`
--

CREATE TABLE `md_project_type` (
  `type_cd` int(11) NOT NULL,
  `type_desc` varchar(50) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_dt` datetime NOT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `md_project_type`
--

INSERT INTO `md_project_type` (`type_cd`, `type_desc`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 'PACS', 'Aritra  Basu Roy Chowdhury', '2018-04-24 18:04:08', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:40:10'),
(2, 'CCS', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:29:44', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:41:27'),
(3, 'ECCS', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:50:01', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:41:35'),
(4, 'UCB', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:50:45', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:41:43'),
(5, 'ARDB', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:51:44', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:41:20'),
(6, 'LAMPS', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:52:22', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:40:27'),
(7, 'Others - Private	', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:55:10', 'Aritra  Basu Roy Chowdhury', '2018-05-02 12:02:28'),
(8, 'Others - Government', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:55:33', 'Aritra  Basu Roy Chowdhury', '2018-05-02 12:03:14'),
(9, 'Multi Purpose Society', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:55:58', 'Aritra  Basu Roy Chowdhury', '2018-05-02 12:01:24'),
(10, 'Sales & Marketing', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:56:25', 'Aritra  Basu Roy Chowdhury', '2018-05-02 12:01:35'),
(11, 'Balaji ETIM', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:56:49', 'Aritra  Basu Roy Chowdhury', '2018-05-02 12:03:40'),
(12, 'Cold Store', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:57:20', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:42:53'),
(13, 'Dealer / Reseller', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:57:43', 'Aritra  Basu Roy Chowdhury', '2018-05-02 12:05:31'),
(14, 'CCB', 'Aritra  Basu Roy Chowdhury', '2018-05-02 11:58:36', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:42:36'),
(15, 'MARKETTING SOC', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:43:06', NULL, NULL),
(16, 'Institution', 'Aritra  Basu Roy Chowdhury', '2018-05-02 15:43:22', NULL, NULL),
(17, 'Web', 'Tanmoy Mondal', '2018-11-20 15:07:39', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `md_users`
--

CREATE TABLE `md_users` (
  `emp_id` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_status` char(1) NOT NULL DEFAULT 'A',
  `user_type` char(2) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `md_users`
--

INSERT INTO `md_users` (`emp_id`, `user_id`, `password`, `user_name`, `user_status`, `user_type`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
('105', '105', '$2a$10$84rAFVVz6wnOY5Y5lMAq6eVPT8mQ1QCHhVNN/ZWeSiI0XCHdEvw4a', 'Pritam Maity', 'A', 'E', NULL, NULL, 'SSS', '2019-03-29 12:19:24'),
('sss', 'sss', '$2a$10$EmcAM/a9lHshmpl2f7U3uO4XmOUmoifE.0r2Fru2S.IpZdVUvKyUy', 'SSS', 'A', 'A', 'SSS', '2018-08-20 00:00:00', 'SSS', '2019-03-28 10:41:04'),
('tanmoy', 'tanmoy', '$2a$10$tmBBV6qPeTc6M205ZnOVH.Z6z7RjoEY6h.JWDVD/YqoYMm7FISVRa', 'Tanmoy Mondal', 'A', 'E', 'SSS', '2019-03-25 15:04:41', 'SSS', '2019-03-28 11:33:31');

-- --------------------------------------------------------

--
-- Table structure for table `td_project_details`
--

CREATE TABLE `td_project_details` (
  `id` int(11) NOT NULL,
  `project_name` varchar(50) NOT NULL,
  `project_type` int(11) DEFAULT NULL,
  `contact_person` varchar(50) DEFAULT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `designation` varchar(20) DEFAULT NULL,
  `dist` int(11) NOT NULL,
  `block` varchar(20) DEFAULT NULL,
  `order_dt` date NOT NULL,
  `order_dtls` varchar(50) DEFAULT NULL,
  `order_value` decimal(10,2) DEFAULT '0.00',
  `tax` varchar(20) DEFAULT NULL,
  `payment_terms` varchar(50) DEFAULT NULL,
  `monthly_rental` varchar(50) DEFAULT NULL,
  `payment_status` varchar(50) DEFAULT NULL,
  `proposed_instl_dt` date DEFAULT NULL,
  `sales_person` varchar(50) DEFAULT NULL,
  `installed_by` varchar(50) DEFAULT NULL,
  `installation_dt` date DEFAULT NULL,
  `online_dt` date DEFAULT NULL,
  `sss_remarks` text,
  `cust_remarks` text,
  `created_by` varchar(50) DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `td_project_details`
--

INSERT INTO `td_project_details` (`id`, `project_name`, `project_type`, `contact_person`, `contact_no`, `designation`, `dist`, `block`, `order_dt`, `order_dtls`, `order_value`, `tax`, `payment_terms`, `monthly_rental`, `payment_status`, `proposed_instl_dt`, `sales_person`, `installed_by`, `installation_dt`, `online_dt`, `sss_remarks`, `cust_remarks`, `created_by`, `modified_by`, `created_dt`, `modified_dt`) VALUES
(1, 'ABCD', 6, NULL, '9735327356', 'AN', 5, 'OPO', '2019-03-26', 'cbs banking', '1000000.00', NULL, NULL, NULL, NULL, NULL, 'SSS', NULL, NULL, '2019-05-01', 'Successfully Installedsedfsdfkshgdfigoieugfilgzseofigsefiugsefigsi Successfully Installedsedfsdfkshgdfigoieugfilgzseofigsefiugsefigsi iusgefiousheifsiusgefiousheifs', NULL, 'SSS', 'SSS', '2019-03-27 16:39:15', '2019-05-06 14:27:35'),
(2, 'Mnopqrst', 2, 'dfsd', '9735327356', 'dsfsdf', 2, 'sdfs', '2019-03-27', NULL, NULL, 'Excluding Tax', NULL, 'AB', NULL, '2019-03-20', NULL, NULL, NULL, NULL, NULL, 'Successfully Installedsedfsdfkshgdfigoieugfilgzseofigsefiugsefigsi iusgefiousheifsSuccessfully Installedsedfsdfkshgdfigoieugfilgzseofigsefiugsefigsi iusgefiousheifsSuccessfully Installedsedfsdfkshgdfigoieugfilgzseofigsefiugsefigsi iusgefiousheifs', 'SSS', NULL, '2019-03-29 12:24:05', NULL),
(3, 'Pqr', 5, 'sfdds', '9735327356', 'dfsd', 6, 'sdf', '2019-03-25', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SSS', NULL, '2019-03-27 14:33:10', NULL),
(4, 'PKP', 3, 'Shubhankar', '9735327356', 'S', 7, NULL, '2019-03-12', NULL, NULL, NULL, NULL, 'NAa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SSS', NULL, '2019-03-29 12:07:22', NULL),
(5, 'OKOKOK', 2, 'kgigi', NULL, NULL, 2, 'hkg', '2019-03-13', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pritam Maity', NULL, '2019-03-29 12:31:50', NULL),
(6, 'OLLL', 5, NULL, NULL, NULL, 3, NULL, '2019-03-13', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SSS', NULL, NULL, NULL, NULL, NULL, 'SSS', 'SSS', '2019-03-29 14:10:47', '2019-03-29 14:11:07'),
(7, 'LOC', 1, 'KPK', '9735327356', NULL, 2, NULL, '2019-05-06', NULL, NULL, 'Excluding Tax', NULL, NULL, NULL, NULL, 'SSS', NULL, NULL, NULL, NULL, NULL, 'SSS', NULL, '2019-05-06 14:28:27', NULL),
(8, 'sdf', 3, NULL, NULL, NULL, 2, NULL, '2019-05-02', NULL, NULL, 'Excluding Tax', NULL, NULL, NULL, NULL, 'SSS', NULL, NULL, '2019-05-01', NULL, NULL, 'SSS', 'SSS', '2019-05-06 14:28:49', '2019-05-06 14:29:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `md_district`
--
ALTER TABLE `md_district`
  ADD PRIMARY KEY (`district_code`);

--
-- Indexes for table `md_project_type`
--
ALTER TABLE `md_project_type`
  ADD PRIMARY KEY (`type_cd`);

--
-- Indexes for table `md_users`
--
ALTER TABLE `md_users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `td_project_details`
--
ALTER TABLE `td_project_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `md_district`
--
ALTER TABLE `md_district`
  MODIFY `district_code` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `md_project_type`
--
ALTER TABLE `md_project_type`
  MODIFY `type_cd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `td_project_details`
--
ALTER TABLE `td_project_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
