// src/components/Checkout.js
import React from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Checkout = ({ open, onClose }) => {
  const handlePaymentMethod = (method) => {
    const paymentUrl = `https://carlleon.com.br/`;

    if (paymentUrl) {
      window.open(paymentUrl, '_blank');
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          Selecione o Método de Pagamento
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => handlePaymentMethod('Boleto')}
              fullWidth
              startIcon={<AttachMoneyIcon />}
              sx={{ backgroundColor: '#ff4305', color: 'white' }}
            >
              Boleto
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => handlePaymentMethod('Cartão de Crédito')}
              fullWidth
              startIcon={<CreditCardIcon />}
              sx={{ backgroundColor: '#ff4305', color: 'white' }}
            >
              Cartão de Crédito
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => handlePaymentMethod('PIX')}
              fullWidth
              startIcon={<AccountBalanceWalletIcon />}
              sx={{ backgroundColor: '#ff4305', color: 'white' }}
            >
              PIX
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default Checkout;
