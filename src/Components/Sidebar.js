import React from 'react';
import './Sidebar.css';
import { MdCalendarMonth,MdOutlineDashboard,MdOutlineLeaderboard} from "react-icons/md";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/Calendar"><MdCalendarMonth/> Calendar</Link>
      <Link to="/Dashboard"><MdOutlineDashboard/> Dashboard</Link>
      <Link to="/Report"><MdOutlineLeaderboard/> Report</Link>
    </div>
  );
}

export default Sidebar;
