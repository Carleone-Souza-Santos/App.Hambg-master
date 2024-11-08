import React, { useState } from 'react';
import {
  Drawer,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import Checkout from './Checkout';

const Cart = ({ cartItems, open, onClose, onRemove }) => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckoutOpen = () => {
    setCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setCheckoutOpen(false);
  };

  const totalValue = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 258, padding: '13px' }}>
        <IconButton onClick={onClose} style={{ float: 'right' }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          Cart
        </Typography>
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  src={item.src}
                  alt={item.name}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    marginRight: 10,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`unid: ${item.quantity} - Preço: R$ ${(
                  item.price * item.quantity
                ).toFixed(2)}`}
              />
              <IconButton
                onClick={() => onRemove(item)}
                color="secondary"
                style={{ padding: 0 }}
              >
                <DeleteIcon style={{ color: 'red', fontSize: '15px' }} />{' '}
              </IconButton>
            </ListItem>
          ))}
        </List>
        {/* Exibição do valor total com ícone de dinheiro */}
        <Typography
          variant="h6"
          style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}
        >
          <MonetizationOnIcon style={{ marginRight: 8 }} />{' '}
          {/* Ícone de dinheiro */}
          Total: R$ {totalValue.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCheckoutOpen}
          sx={{ backgroundColor: '#ff4305', color: 'white' }}
        >
          Ir para Pagamento
        </Button>
        <Checkout open={checkoutOpen} onClose={handleCheckoutClose} />
      </div>
    </Drawer>
  );
};

export default Cart;
