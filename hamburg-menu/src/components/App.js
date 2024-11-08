import React, { useState } from 'react';
import menuOptions from './data/Data';
import {
  CssBaseline,
  Container,
  Typography,
  IconButton,
  Badge,
  Box,
} from '@mui/material';
import MenuDrawer from './MenuDrawer';
import ProductList from './ProductList';
import Cart from './Cart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { keyframes } from '@mui/system';
import MiniModal from './MiniModal';

// Animação para o ícone do carrinho piscar
const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(menuOptions);
  const [selectedJuice, setSelectedJuice] = useState(null);
  const [miniModalOpen, setMiniModalOpen] = useState(false);
  const [showJewelry, setShowJewelry] = useState(null);

  const handleFilter = (filterType) => {
    let productsToShow;
    if (filterType === 'drink') {
      productsToShow = menuOptions.filter((product) => product.Drink);
    } else if (filterType === 'vegan') {
      productsToShow = menuOptions.filter((product) => product.vegan);
    } else {
      productsToShow = menuOptions;
    }
    productsToShow.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredProducts(productsToShow);
  };

  const handleAddToCart = (product) => {
    if (product.name === 'Suco Natural') {
      setSelectedJuice(product);
      setMiniModalOpen(true);
    } else {
      addProductToCart(product);
    }
  };

  const addProductToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    setShowJewelry(product.name);
    setIsBlinking(true);
    setTimeout(() => {
      setShowJewelry(null);
      setIsBlinking(false);
    }, 1000);
  };

  const handleJuiceSelect = (option) => {
    const juiceProduct = {
      ...selectedJuice,
      name: `${selectedJuice.name} ${option}`,
      price: 8.1,
      src: selectedJuice.src,
    };
    addProductToCart(juiceProduct);
    setMiniModalOpen(false);
  };

  const toggleCart = () => {
    if (cartItems.length > 0) {
      setCartOpen(!cartOpen);
    }
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.name !== productToRemove.name,
      );
      if (updatedItems.length === 0) closeCart();
      return updatedItems;
    });
  };

  return (
    <Container>
      <CssBaseline />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 4 }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/img-Logo.png`}
          alt="Logo FatFry"
          style={{
            width: 60,
            height: 60,
            marginRight: 12,
            borderRadius: '50%',
          }}
        />
        <Typography variant="h3" component="h1">
          FatFry
        </Typography>
      </Box>

      <MenuDrawer onFilter={handleFilter} />
      <IconButton
        onClick={toggleCart}
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1300,
          backgroundColor: '#ff4305',
          color: 'white',
          animation: isBlinking ? `${blinkAnimation} 1s` : 'none',
        }}
      >
        <Badge
          badgeContent={cartItems.reduce(
            (total, item) => total + item.quantity,
            0,
          )}
          color="error"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
        showJewelry={showJewelry}
      />
      {cartOpen && (
        <Cart
          cartItems={cartItems}
          open={cartOpen}
          onClose={closeCart}
          onRemove={handleRemoveFromCart}
        />
      )}
      <MiniModal
        open={miniModalOpen}
        onClose={() => setMiniModalOpen(false)}
        onSelectOption={handleJuiceSelect}
      />
    </Container>
  );
}

export default App;
