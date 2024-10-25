import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
    const date = new Date().getFullYear()
    const Container = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
    `
    const Main = styled.main`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Footer = styled.footer`
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fafafa;
    `
  return (
    <Container>
        <Navbar />
        <Main>
            <Outlet />
        </Main>
        <Footer>
            <p>CopyRight @ {date}</p>
        </Footer>
    </Container>
  )
}

export default Layout