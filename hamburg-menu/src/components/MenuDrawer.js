import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { ListAlt, Fastfood, LocalDrink } from '@mui/icons-material';

function MenuDrawer({ onFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Itens do menu
  const menuItems = [
    { text: 'All', filter: 'all', icon: <ListAlt /> },
    { text: 'Bebidas', filter: 'drink', icon: <LocalDrink /> },
    { text: 'Vegano', filter: 'vegan', icon: <Fastfood /> },
  ];

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1300,
          backgroundColor: '#ff4305',
          color: 'white',
        }}
      >
        {isOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'black',
            color: 'white',
            width: 238,
          },
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Typography
            variant="h6"
            sx={{
              padding: 2,
              textAlign: 'center',
              backgroundColor: '#ff4305',
              color: 'white',
            }}
          >
            FatFry
          </Typography>
          <List>
            {menuItems.map(({ text, filter, icon }) => (
              <ListItem
                button
                key={filter}
                onClick={() => {
                  onFilter(filter);
                  toggleDrawer();
                }}
                sx={{
                  '&:hover': {
                    backgroundColor: 'black',
                    color: '#ff4305',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                }}
              >
                {icon}
                <ListItemText primary={text} sx={{ marginLeft: 1 }} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default MenuDrawer;
