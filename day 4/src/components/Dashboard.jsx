import React from 'react';
import '../assets/css/Dashboard.css';
import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RedeemSharpIcon from '@mui/icons-material/RedeemSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { selectUser } from './redux/UserSlice';
import { useSelector } from 'react-redux';
const Dashboard = () => {
  const drawerWidth = "250px";
  const user = useSelector(selectUser);
  const email=user.user && user.user.email ? user.user.email :'Guest';
  // Sample volunteer data
  const volunteers = [
    'John Doe',
    'Jane Smith',
    'Bob Johnson',
    'Alice Brown',
    'Charlie Davis',
    'Eva Evans',
    'Frank Green',
    'Grace Harris',
    'Henry Jackson',
    'Isabel King',
    'Kevin Lee',
    'Linda Miller',
    'Mike Nelson',
    'Olivia Parker',
    'Peter Quinn',
    'Rachel Robinson',
    'Samuel Turner',
    'Tina White',
    'William Young',
  ];

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="navbar">
        {/* Navbar content */}
        <ul>
          <li>
            <a href="#organization">{email}</a>
          </li>
          <li>
            <a href="#volunteer">About</a>
          </li>
          <li>
            <a href="login">logout</a>
          </li>
        </ul>
      </div>

      <div className='sidebar'>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: 'rgb(49, 49, 48)',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', color: 'white' }} >
            <List>
              {[
                { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'white' }} /> },
                { text: 'Volunteers', icon: <HomeIcon sx={{ color: 'white' }} />, route: '/home' },
                { text: 'Events', icon: <RedeemSharpIcon sx={{ color: 'white' }} /> },
                { text: 'Analytics', icon: <AccountCircleRoundedIcon sx={{ color: 'white' }} /> }
              ].map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Grid Container */}
        <div className="grid-container">
          {/* Grid Items */}
          <div className="grid-item">
            <h2>No of events : 3</h2>
          </div>

          <div className="grid-item">
            <h2>No of events enrolled : 20</h2>
          </div>

          <div className="grid-item">
            <h2>Max.No of volunteers possible : 50</h2>
          </div>
        </div>
        
        {/* Event List Box */}
        <div className='total-event-vol'>
        <div className="event-list-box">
          <h2>Event List</h2>
          <div className="event">
            <h2>Event 1</h2>
            <p>25 volunteers enrolled</p>
          </div>

          <div className="event">
            <h2>Event 2</h2>
            <p>15 volunteers enrolled</p>
          </div>

          <div className="event">
            <h2>Event 3</h2>
            <p>10 volunteers enrolled</p>
          </div>
        </div>

        {/* Volunteer List Box */}
        <div className="volunteer-list-box">
          <h2>Volunteer List</h2>
          <div className="volunteer-scroll-container">
            <div className="volunteer-list">
              {volunteers.map((volunteer, index) => (
                <div className="volunteer" key={index}>
                  <h2>Volunteer {index + 1}</h2>
                  <p>{volunteer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        &copy; 2023 Your Organization Name
      </footer>
    </div>
  );
};

export default Dashboard;
