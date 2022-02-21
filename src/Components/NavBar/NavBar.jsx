import React , { useState }from 'react';
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper, CantidadItem, LogoImg} from './NavBarStyles';
import logoRemolo from './../../assets/img/logo.jpg'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();

    const handleOnClickShop = () => {
        setShowMobileMenu(!showMobileMenu);
        navigate('/shopping');
    }

    const handleOnClickHome = () => {
        setShowMobileMenu(!showMobileMenu);
        navigate('/home');
    }

    const handleOnClickContact = () =>{
        setShowMobileMenu(!showMobileMenu);
        navigate('/contact');
    }


  return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <LogoImg src={logoRemolo} />
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                        showMobileMenu ? <FaTimes /> : <FaBars />
                    }
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem onClick={handleOnClickHome}>
                        <MenuItemLink>HOME</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <MenuItemLink>PIZZAS</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={handleOnClickContact}>
                        <MenuItemLink>EMPANADAS</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={handleOnClickContact}>
                        <MenuItemLink>POSTRES</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={handleOnClickContact}>
                        <MenuItemLink>BEBIDAS</MenuItemLink>
                    </MenuItem>
                    {/*<MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>*/}
                    <MenuItem onClick={handleOnClickShop}>
                        <MenuItemLink>CARRO
                        <CantidadItem>0</CantidadItem>
                    </MenuItemLink>
                    </MenuItem>
                    
                </Menu>
            </Wrapper>
        </Container>

  )
};

export default NavBar;
