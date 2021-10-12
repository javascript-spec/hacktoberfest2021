-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2019 at 09:28 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `register_form`
--

CREATE TABLE `register_form` (
  `id` int(11) NOT NULL,
  `firstname` varchar(40) NOT NULL,
  `lastname` varchar(40) NOT NULL,
  `fathername` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `dob` varchar(40) NOT NULL,
  `contact` varchar(40) NOT NULL,
  `nationality` varchar(40) NOT NULL,
  `disease` varchar(40) NOT NULL,
  `bloodgroup` varchar(40) NOT NULL,
  `address` varchar(40) NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register_form`
--

INSERT INTO `register_form` (`id`, `firstname`, `lastname`, `fathername`, `email`, `password`, `dob`, `contact`, `nationality`, `disease`, `bloodgroup`, `address`, `img`) VALUES
(1, 'nilam', 'sista', 'ramlal', 'nilamsista29@gmail.com', '', '31/05/1996', '8352050210', 'indian', 'thumb pain', 'a+', 'mohali', ''),
(5, ' nilu', 'kumari', 'ramlal', 'kamla23@gmail.com', '', '2019-08-10', '27345978234', '', '', '', '', ''),
(7, 'roopa', 'kumari', 'ka', 'karmathinley@gmail.com', '', '2019-08-11', '43567', 'span', 'tumer', '', '', ''),
(8, 'sukrma', 'devi', 'ramlal', 'heena@gmail.com', '', '2019-08-09', '9817188175', 'usa', 'fever', '', 'solan', ''),
(9, 'kamlu', 'devi', 'mohan singh', 'kamla23@gmail.com', '', '2019-08-31', '54678', 'pakistan', 'tumer', '', 'shimla', ''),
(10, ' nilam', 'sista', 'ramlal', 'nilamsista29@gmail.com', '', '2019-08-09', '87879', 'usa', 'fever', 'A+', 'solan', ''),
(11, 'nilma', 'kumari', 'ramlal', 'kamla23@gmail.com', '', '2019-08-10', '9459860865', 'usa', 'fever', 'A+', 'mandi', ''),
(12, 'ghj', 'jhyi', 'rtiop9', 'nilamsista29@gmail.com', '', '31/05/1996', '8352050210', 'indian', 'thumb pain', 'a+', 'mohali', ''),
(13, ' kamla', 'kumari', 'ramlal', 'nilamsista29@gmail.com', '123', '13/5/1996', '9876543210', 'indian', 'blood', 'a+', 'mohali', 'IMG-20151022-WA0008.jpg'),
(14, ' nilu', 'kumari', 'mohan singh', 'karmathinley@gmail.com', '1234', '2019-09-12', '9459860865', 'pakistan', 'cancer', 'B+', 'gfryjuoii', 'IMG-20151021-WA0005.jpg'),
(15, ' hema', 'bhardwaj', 'rajender', 'hema1997@gmail.com', '123', '2019-09-12', '43567', 'indian', 'fever', 'A-', 'solan', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_addcamps`
--

CREATE TABLE `tbl_addcamps` (
  `id` int(11) NOT NULL,
  `location` varchar(40) NOT NULL,
  `city` varchar(40) NOT NULL,
  `state` varchar(40) NOT NULL,
  `date` varchar(40) NOT NULL,
  `timeing` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_addcamps`
--

INSERT INTO `tbl_addcamps` (`id`, `location`, `city`, `state`, `date`, `timeing`) VALUES
(1, 'sahibzadaajitsinghnagar', 'mohali', 'chandigrah', '12/04/2019', '10 to 5'),
(2, 'sahibjada ajit singh nagr', 'mohali', 'himachle perdesh', '2019-09-03', '02:00'),
(4, 'sahibjada ajit singh nagr', 'mohali', 'himachle perdesh', '2019-12-31', '12:59'),
(5, 'sahibjada ajit singh nagr', 'mohali', 'chandigrah', '2019-09-04', '01:00'),
(6, 'sahibzadaajitsinghnagar', 'kinnour', 'chandigrah', '67568', '10 to 5'),
(7, 'mandi', 'karsog', 'himachle perdesh', '2019-09-05', '14:59'),
(8, 'mandi', 'karsog', 'himachle perdesh', '2019-09-11', '13:00'),
(9, 'chandighar', 'mohali', 'himachle perdesh', '2019-09-17', '01:00'),
(11, 'chandighar', 'mohali', 'chandigrah', '2019-09-05', ''),
(12, 'chandighar', 'mohali', 'himachle perdesh', '2019-09-11', '13:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_checkuser`
--

CREATE TABLE `tbl_checkuser` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `contact` varchar(40) NOT NULL,
  `address` varchar(40) NOT NULL,
  `bloodgroup` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_checkuser`
--

INSERT INTO `tbl_checkuser` (`id`, `username`, `email`, `contact`, `address`, `bloodgroup`) VALUES
(1, 'roopa', 'nilamsista29@gmail.com', '8352050210', 'solan', 'A-'),
(2, 'manisha', 'manikaur@gmail.com', '9817188175', 'solan', 'B+'),
(3, 'roopa', 'kashyapmegha1997@gmail.com', '9459860865', 'mohali', 'a+'),
(4, 'nilam', 'nilamsista29@gmail.com', '8352050210', 'mohali', 'a+'),
(5, 'ankita', 'ankita@gmail.com', '9876543210', 'mohali', 'a+'),
(6, 'roopa', 'roopa@gmail.com', '8734650346', 'shimla', '-b'),
(7, 'roopa', 'roopa@gmail.com', '9876543210', 'solan', '-b'),
(8, 'fdgtfhy', 'karmathinley@gmail.com', '54356789', 'gtdfg', 'a-'),
(9, 'kartik', 'kartik@gmail.com', '38465983658', 'solan', 'a-'),
(10, 'nilam', 'nial@gmail.comnskj', '9876543210', 'solan', '-b');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

CREATE TABLE `tbl_feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `contact` varchar(40) NOT NULL,
  `message` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_feedback`
--

INSERT INTO `tbl_feedback` (`id`, `name`, `email`, `contact`, `message`) VALUES
(1, 'kamla', 'kamla281991@gmail.com', '8580417801', 'fghkj,iltyt'),
(2, 'nilam', 'kamla23@gmail.com', '27345978234', 'hiiib ,'),
(3, 'nilam', 'kamla23@gmail.com', '27345978234', 'hiiib ,');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

CREATE TABLE `tbl_login` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`id`, `name`, `password`) VALUES
(1, 'kamla', '123'),
(2, 'admin', '1234'),
(3, 'nilam', '123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_requestview`
--

CREATE TABLE `tbl_requestview` (
  `id` int(11) NOT NULL,
  `requestid` int(11) NOT NULL,
  `bloodgroup` varchar(30) NOT NULL,
  `campaddress` varchar(30) NOT NULL,
  `contact` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_send`
--

CREATE TABLE `tbl_send` (
  `id` int(11) NOT NULL,
  `bloodgroup` varchar(40) NOT NULL,
  `no_of_unit` varchar(40) NOT NULL,
  `camp_address` varchar(40) NOT NULL,
  `contact_no` varchar(40) NOT NULL,
  `requestid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_send`
--

INSERT INTO `tbl_send` (`id`, `bloodgroup`, `no_of_unit`, `camp_address`, `contact_no`, `requestid`) VALUES
(1, 'a+', '12', 'mohali', '9817188175', 13),
(2, '', '9', 'mohali', '987656333', 0),
(3, 'a-', '10', 'chandigrah', '987656333', 0),
(8, 'a-', '2', 'solan', '987656333', 0),
(9, 'a-', '2', 'mandi', '987656333', 0),
(10, 'a-', '2', 'shimla', '9817188175', 0),
(11, 'a-', '6', 'mohali', '987656333', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_view`
--

CREATE TABLE `tbl_view` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `uemail` varchar(40) NOT NULL,
  `contact` varchar(40) NOT NULL,
  `address` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_view`
--

INSERT INTO `tbl_view` (`id`, `username`, `uemail`, `contact`, `address`) VALUES
(1, 'nilam', 'kamla@gmail.com', '1234', ''),
(2, 'hema', 'hema@gmail.com', '12345', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register_form`
--
ALTER TABLE `register_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_addcamps`
--
ALTER TABLE `tbl_addcamps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_checkuser`
--
ALTER TABLE `tbl_checkuser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_login`
--
ALTER TABLE `tbl_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_requestview`
--
ALTER TABLE `tbl_requestview`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_send`
--
ALTER TABLE `tbl_send`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_view`
--
ALTER TABLE `tbl_view`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register_form`
--
ALTER TABLE `register_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_addcamps`
--
ALTER TABLE `tbl_addcamps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_checkuser`
--
ALTER TABLE `tbl_checkuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_login`
--
ALTER TABLE `tbl_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_requestview`
--
ALTER TABLE `tbl_requestview`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_send`
--
ALTER TABLE `tbl_send`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_view`
--
ALTER TABLE `tbl_view`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
