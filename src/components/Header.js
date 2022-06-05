import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import styled from '@emotion/styled';
import { Badge } from '@mui/material';
import {mobile} from '../responsive';

import styled from 'styled-components';
import { Link } from "react-router-dom";

const Title = styled.h1`
margin:0 10px;
flex:1;
text-align:center;
${'' /* ${mobile({  })} */}
`

const Center = styled.div`
 display: flex;
    flex: 1;
    align-items: center;
    flex:1;
`

const Right = styled.div`
font-size:16px;
display: flex;
flex:1;
justify-content: end;
gap: 4vh;

${mobile({fontSize:"11px", gap:"1vh"})}
`



function Header() {
    return (
        <div className='header'>

            <Center className="header__search">

                <input className="header_searchInput" type="text" placeholder='SEARCH' />
                <SearchIcon className='header__searchIcon' />

            </Center>

            <Title><Link to="/">Myns</Link> </Title>

            <Right >
                <div className='header__option'>
                    <Link to="/register">REGISTER</Link>
                </div>

                <div className='header__option'>
                <Link to="/login">SIGN-IN</Link>
                </div>

                <div className='header__option'>
                    <Badge badgeContent={4} color="primary">

                    <Link to="/cart"><ShoppingCartOutlinedIcon className='header__cartImage' /></Link>
                    </Badge>

                </div>
            </Right>
        </div>
    );
}

export default Header
