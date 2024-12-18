import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, MenuItem, Select, Box } from '@mui/material';
import { Search, ShoppingCart, Person, Twitter, Facebook, Instagram } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';
import { Body } from './body';
import { Category } from './newCategoryComp';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  marginLeft: theme.spacing(1),
}));





const HomePage = () => {
  
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar sx={{ backgroundColor: '#1c2430', color: '#ffffff', justifyContent: 'space-between' }}>
          {/* Free Shipping and Language Section */}
          <Box display="flex" alignItems="center">
            <Box sx={{ backgroundColor: '#f50057', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold', marginRight: 2 }}>
              HOT
            </Box>
            <Typography variant="body2">Free Express Shipping</Typography>
          </Box>
          
          {/* Language and Social Icons */}
          <Box display="flex" alignItems="center">
            <Select defaultValue="EN" variant="standard" disableUnderline sx={{ color: '#ffffff', marginRight: 2 }}>
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="FR">FR</MenuItem>
            </Select>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
          </Box>
        </Toolbar>

        <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 24px' }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <img src="your_logo_url_here" alt="Logo" style={{ height: 40, marginRight: 10 }} />
            <Typography variant="h6" noWrap sx={{ color: '#1c2430', fontWeight: 'bold' }}>bazaar</Typography>
          </Box>

          {/* Search Bar */}
          <SearchBar>
            <IconButton><Search /></IconButton>
            {/* <StyledInputBase placeholder="Searching for…" inputProps={{ 'aria-label': 'search' }} /> */}
            <TextField id="outlined-search" label="Search field" type="search" />
            <Box display="flex" alignItems="center">
              <Typography variant="body2" sx={{ marginLeft: 2 }}>All Categories</Typography>
            </Box>
          </SearchBar>

          {/* Profile and Cart Icons */}
          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <Person />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

    <Body></Body>



    </>

    


  );
};

export default HomePage;
