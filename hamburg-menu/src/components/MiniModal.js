import React from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';

const options = ['Laranja', 'Acerola', 'Goiaba', 'Uva'];

const MiniModal = ({ open, onClose, onSelectOption }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Escolha uma opção
        </Typography>
        <Grid container spacing={2}>
          {options.map((option) => (
            <Grid item xs={12} key={option}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => onSelectOption(option)}
                sx={{
                  borderColor: '#ff4305',
                  color: '#ff4305',
                  '&:hover': {
                    backgroundColor: '#ff4305',
                    color: 'white',
                  },
                }}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default MiniModal;
