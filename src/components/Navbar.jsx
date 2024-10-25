import { ShoppingBag } from 'lucide-react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Navbar = () => {
    const Navbar = styled.nav`
        width: 100%;
        height: 80px;
        display: flex;
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `;
    const Logo = styled.div`
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: bold;
    `;
    const List = styled.ul`
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        list-style: none;
    `;
    const Cart = styled.div`
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const Button = styled.button`
        width: 110px;
        height: 35px;
        border-radius: 10px;
        border: 2px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        gap: 8px;
        color: black;
    `
  return (
    <Navbar>
        <Logo>
            Logo
        </Logo>
        <List>
            <NavLink to="/" className={({isActive}) => isActive ? "text-red-500" : "text-black"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-red-500" : "text-black"}>About</NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? "text-red-500" : "text-black"}>checkboxes</NavLink>
        </List>
        <Cart>
            <Button>
                <ShoppingBag />
                <h1 >Cart</h1>
            </Button>
        </Cart>
    </Navbar>
  )
}

export default Navbar