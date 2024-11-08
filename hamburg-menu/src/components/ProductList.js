import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

function ProductList({ products, onAddToCart, cartItems = [] }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productName) => {
    setHoveredProduct(productName);
    setShowEmoji(true);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
    setShowEmoji(false);
  };

  const handleClick = (product) => {
    onAddToCart(product);
    setShowEmoji(true);
    setTimeout(() => {
      setShowEmoji(false);
    }, 1000);
  };

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.name}>
          <Card
            style={{
              backgroundColor: cartItems.some(
                (item) => item.name === product.name,
              )
                ? '#d0ffd0'
                : 'white',
              color: 'black',
              transition: 'background-color 0.3s ease',
            }}
          >
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100px',
                  height: '100px',
                }}
              >
                <img
                  src={product.src}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    filter: cartItems.some((item) => item.name === product.name)
                      ? 'grayscale(100%)'
                      : 'none',
                    transition: 'filter 0.3s',
                  }}
                />
                {cartItems.some((item) => item.name === product.name) && ( // Se o produto estiver no carrinho, exibe a estrela
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '5%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '30px',
                      color: 'gold',
                      zIndex: 1300,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 10.5 }}
                  >
                    <StarIcon />
                  </motion.div>
                )}
              </div>
              <Typography variant="h5" align="center">
                {product.name}
              </Typography>
              <Typography variant="body2" align="center">
                {product.descrip}
              </Typography>
              <Typography variant="h6" align="center">
                R$ {product.price.toFixed(2)}
              </Typography>
              <Button
                onMouseEnter={() => handleMouseEnter(product.name)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(product)}
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#ff4305',
                  color: 'white',
                  marginTop: 1,
                }}
              >
                Adicionar
              </Button>

              {showEmoji && hoveredProduct === product.name && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '70%',
                    transform: 'translateX(-50%)',
                    fontSize: '50px',
                    color: '#ff4305',
                    zIndex: 1300,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <EmojiEmotionsIcon />
                </motion.div>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
