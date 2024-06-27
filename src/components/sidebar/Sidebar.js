import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Divider, ListSubheader, IconButton, Typography, Tooltip } from '@mui/material';
import { Dashboard as DashboardIcon, History as HistoryIcon, ChevronLeft as ChevronLeftIcon, Menu as MenuIcon, Person as PersonIcon } from '@mui/icons-material';

const navigationItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Policy History', icon: <HistoryIcon />, path: '/policy-history' },
  { text: 'Profile', icon: <PersonIcon />, path: '/profile' }
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: isOpen ? 240 : 70,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isOpen ? 240 : 70,
            boxSizing: 'border-box',
            backgroundColor: '#f7f9fc',
            color: '#333',
            transition: 'width 0.3s, box-shadow 0.3s',
            boxShadow: isOpen ? '2px 0 5px rgba(0,0,0,0.1)' : 'none',
            borderRight: 'none',
          },
        }}
        open={isOpen}
      >
        <Box
          sx={{ width: isOpen ? 240 : 70, height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}
          role="presentation"
        >
          {isOpen ? (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={toggleSidebar} sx={{ color: '#333' }}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton onClick={toggleSidebar} sx={{ color: '#333' }}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          <Divider sx={{ borderColor: '#e0e0e0' }} />
          <List
            subheader={
              isOpen && (
                <ListSubheader component="div" id="nested-list-subheader" sx={{ color: '#333', backgroundColor: '#f7f9fc' }}>
                  Navigation
                </ListSubheader>
              )
            }
          >
            {navigationItems.map((item) => (
              <Tooltip key={item.text} title={isOpen ? '' : item.text} placement="right">
                <ListItem 
                  button 
                  onClick={() => navigate(item.path)}
                  sx={{
                    padding: '10px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: '#333',
                    '&:hover': {
                      backgroundColor: '#e0e7ff',
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#1e88e5',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                      }
                    },
                    borderRadius: '8px',
                    margin: '10px 10px',
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>{item.icon}</ListItemIcon>
                  {isOpen && (
                    <ListItemText 
                      primary={
                        <Typography variant="body1" sx={{ fontWeight: isOpen ? '500' : '400' }}>
                          {item.text}
                        </Typography>
                      }
                    />
                  )}
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;