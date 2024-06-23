import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';

const Sidebar = ({ isOpen }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{ width: 240, height: '100%', display: 'flex', flexDirection: 'column' }}
        role="presentation"
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <img src="https://www.acrossassist.com/images/acrossassist/aa_logo_horizontal_small.png" alt="Across Assist Logo" style={{ width: '100%' }} />
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Policy History" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;