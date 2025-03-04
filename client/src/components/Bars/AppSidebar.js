import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Divider,
  Typography,
  Toolbar
} from '@mui/material';

const AppSidebar = () => {
  const { account } = useSelector(state => state.account);
  const isAdmin = account?.user?.role === 'admin';

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/user-attendance">
            <ListItemText primary="Submit Attendance" />
          </ListItemButton>
        </ListItem>
      </List>
      
      {isAdmin && (
        <>
          <Divider />
          <Typography variant="subtitle1" sx={{ px: 2, py: 1, fontWeight: 'bold' }}>
            Admin
          </Typography>
          <List>
            <ListItem>
              <ListItemButton component={Link} to="/admin-employee">
                <ListItemText primary="Employee Data" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component={Link} to="/admin-attendance">
                <ListItemText primary="Employee Attendance" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </Drawer>
  );
}

export default AppSidebar;