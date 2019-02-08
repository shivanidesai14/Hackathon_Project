-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2019 at 01:35 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alpazo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(30) NOT NULL,
  `fk_cat_id` int(11) NOT NULL,
  `cat_img` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `fk_cat_id`, `cat_img`) VALUES
(1, 'Mobiles', 0, '../assets/icon/mobiles.jpg'),
(2, 'Televisions', 0, '../assets/icon/televisions.jpg'),
(3, 'IphoneX', 1, ''),
(4, 'Iphone Xc', 1, ''),
(5, 'Grocery', 0, '../assets/icon/grocery.jpg'),
(6, 'Electronics', 0, '../assets/icon/electronics.jpg'),
(7, 'Washing Machine', 6, '');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`) VALUES
(1, 'Ahmedabad'),
(2, 'Rajkot'),
(3, 'Surat'),
(4, 'Baroda'),
(5, 'Jamangar'),
(6, 'Delhi');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `fk_retailer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `delivery` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order1`
--

CREATE TABLE `order1` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `retailer_id` int(11) NOT NULL,
  `date` varchar(12) NOT NULL,
  `customer_otp` int(11) NOT NULL,
  `verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_color` varchar(12) NOT NULL,
  `product_warranty` int(11) NOT NULL,
  `product_specification` text NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `product_img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `retailer`
--

CREATE TABLE `retailer` (
  `retailer_id` int(11) NOT NULL,
  `retailer_email` varchar(30) NOT NULL,
  `retailer_password` varchar(8) NOT NULL,
  `retailer_name` varchar(30) NOT NULL,
  `retailer_city_id` int(10) NOT NULL,
  `retailer_mobile` int(11) NOT NULL,
  `retailer_pincode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `retailer`
--

INSERT INTO `retailer` (`retailer_id`, `retailer_email`, `retailer_password`, `retailer_name`, `retailer_city_id`, `retailer_mobile`, `retailer_pincode`) VALUES
(1, 'bhavya@gmail.com', '123458', 'Bhavya', 1, 1122334455, 38007),
(2, 'meet@schemer.com', '129090', 'Meet', 1, 555556666, 380007),
(3, 'dhwani@gmail.com', '120909', 'Dhwani', 1, 989898989, 380007),
(4, 'riya@gmail.com', '122909', 'Riya', 1, 989866689, 380007),
(5, 'giya@gmail.com', '122999', 'Giya', 1, 889866689, 380007),
(6, 'priya@gmail.com', '998809', 'Priya', 1, 99966689, 380007),
(7, 'rama@gmail.com', '422909', 'Rama', 2, 98986777, 38383838),
(8, 'jaya@gmail.com', '522999', 'jaya', 2, 87776689, 38383838),
(9, 'susma@gmail.com', '698809', 'Susma', 2, 88866689, 38383838),
(10, 'ramesh@gmail.com', '990809', 'Ramesh', 2, 888976689, 383839),
(11, 'Raju@gmail.com', '422909', 'Raju', 3, 94486777, 3893893),
(12, 'Manu@gmail.com', '522999', 'Manu', 3, 84476689, 3893893),
(13, 'Haresh@gmail.com', '698809', 'Haresh', 3, 8446689, 998899),
(14, 'Jayeh@gmail.com', '990809', 'Jayesh', 3, 83376689, 889988);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(40) NOT NULL,
  `service_icon` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`, `service_icon`) VALUES
(1, 'Yoga Trainer', '../assets/icon/yoga.png'),
(2, 'Fitness Trainer', '../assets/icon/gym.png'),
(3, 'Tv Repair', '../assets/icon/tv.png'),
(4, 'Ro Water Purifyer', '../assets/icon/water.png'),
(5, 'Electricians', '../assets/icon/electrician.png'),
(6, 'Ac Services', '../assets/icon/ac.png'),
(7, 'Plumber', '../assets/icon/plumber.png'),
(8, 'Water Heater Repair', '../assets/icon/waterheater.png'),
(9, 'Crapenters', '../assets/icon/carpenter.png'),
(10, 'Mobile Repairs', '../assets/icon/smartphone.png'),
(11, 'Microwave Repair', '../assets/icon/microwave.png'),
(12, 'Refrigrator Rpair', '../assets/icon/fridge.png'),
(13, 'Photographer', '../assets/icon/pp.png'),
(14, 'Mehendi Artisr', '../assets/icon/Mehendi.ico');

-- --------------------------------------------------------

--
-- Table structure for table `service_man`
--

CREATE TABLE `service_man` (
  `service_id` int(11) NOT NULL,
  `retailer_id` int(11) NOT NULL,
  `visiting_fees` int(11) NOT NULL,
  `availability` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service_man`
--

INSERT INTO `service_man` (`service_id`, `retailer_id`, `visiting_fees`, `availability`) VALUES
(1, 1, 200, 1),
(1, 3, 500, 1),
(1, 2, 500, 0),
(1, 4, 200, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(25) NOT NULL,
  `user_password` varchar(8) NOT NULL,
  `user_phone` varchar(12) NOT NULL,
  `user_city_id` int(11) NOT NULL,
  `user_address` text NOT NULL,
  `user_pincode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_phone`, `user_city_id`, `user_address`, `user_pincode`) VALUES
(1, 'Fenil Shah', 'fenil@gmail.com', '12345', '9409407344', 1, '3/4 vitrag society,p.t. college road,paldi,\r\nahmedabad', 380007),
(2, 'Raju', 'raju@gmail.com', '234', '1231231231', 2, 'rajani pol,near hotel taj,behrampura,rajkot', 38383838),
(3, 'manu', 'manu@gmail.com', '239898', '9877899877', 3, 'golimar road,bhaijan colony,ghayal,surat', 3893893),
(4, 'panchal', 'panchal@gmail.com', '98981212', '67895432112', 4, 'sumsam gali,goal road,chakde,broda', 9876543),
(5, 'Karina', 'karina@gmail.com', '12345', '9898989898', 1, 'poojan apartment,don road,Jivraj,ahmedabad', 380006),
(6, 'Disha', 'disha@gmail.com', '1234567', '9898121221', 5, 'love,fake road,dontdo,jamnagar', 3456789);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `retailer`
--
ALTER TABLE `retailer`
  ADD PRIMARY KEY (`retailer_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `retailer`
--
ALTER TABLE `retailer`
  MODIFY `retailer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
