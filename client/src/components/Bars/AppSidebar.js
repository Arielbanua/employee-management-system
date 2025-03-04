import React from 'react';
import { Link } from 'react-router-dom';
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
          <ListItemButton component={Link} to="/user-attendance">
            <ListItemText primary="Submit Attendance" />
          </ListItemButton>
        </ListItem>
      </List>
      
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
    </Drawer>
  );
}

export default AppSidebar;