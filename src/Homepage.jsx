import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, MenuItem, Select, Box } from '@mui/material';
import { Search, ShoppingCart, Person, Twitter, Facebook, Instagram } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';
import {
  Menu,
  Button,
  ListItemIcon,
  ListItemText, 
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  Category as CategoryIcon,
  Checkroom as FashionIcon,
  Devices as ElectronicsIcon,
  DirectionsBike as BikesIcon,
  Home as HomeIcon,
  CardGiftcard as GiftIcon,
  MusicNote as MusicIcon,
  HealthAndSafety as HealthIcon,
  Pets as PetsIcon,
  ChildCare as BabyToysIcon,
  ShoppingCart as GroceriesIcon,
  DirectionsCar as AutomotiveIcon,
} from '@mui/icons-material';

import Carousel from 'react-bootstrap/Carousel';

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





const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
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

      <div>
      <Button
        variant="contained"
        startIcon={<MenuIcon />}
        onClick={handleClick}
        sx={{
          justifyContent:'left',
          backgroundColor: '#f5f5f5',
          color: '#000',
          fontWeight: 'bold',
          textTransform: 'none',
          width: '200px',
        }}
      >
        Categories
      </Button>


      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 2,
          style: {
            width: '250px',
            borderRadius: '8px',
            left:'-3px',  
            top:'173px'
          },
        }}
      >
        {/* Category List */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FashionIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Fashion</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ElectronicsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BikesIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bikes</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Home & Garden</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <GiftIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Gifts</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MusicIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Music</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HealthIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Health & Beauty</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PetsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Pets</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BabyToysIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Baby Toys</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <GroceriesIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Groceries</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AutomotiveIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Automotive</ListItemText>
        </MenuItem>
      </Menu>
      </div>


        <div style={{width:'60%'}}>
        <Carousel interval={3*1000}>
          <Carousel.Item>
            <img style={{width:'100%'}} height={500} 
            src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{width:'100%'}} height={500} 
            src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{width:'100%'}} height={500} 
            src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

    </>

    


  );
};

export default Header;
