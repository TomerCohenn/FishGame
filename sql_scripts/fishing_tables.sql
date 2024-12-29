CREATE TABLE `fishing_rev_data` (
  `id` varchar(20) NOT NULL,
  `trialnum` int(11) DEFAULT NULL,
  `choice` int(11) DEFAULT NULL,
  `side` int(11) DEFAULT NULL,
  `lake` int(11) DEFAULT NULL,
  `reward` int(11) DEFAULT NULL,
  `rt` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `blocknum` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `fishing_rev_demog` (
  `ID` varchar(20) NOT NULL,
  `Responses` varchar(200) NOT NULL,
  `time` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `fishing_rev_finished` (
  `ID` varchar(20) NOT NULL,
  `worker` varchar(20) NOT NULL,
  `sumrewards` int(11) DEFAULT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `fishing_rev_subcode` (
  `subcode` varchar(19) NOT NULL,
  `time` varchar(19) DEFAULT NULL,
  `ID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

