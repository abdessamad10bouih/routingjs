import React from 'react'
import styled from 'styled-components'
import Cards from '../components/Cards';

const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99.99,
      img: "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg"
    },
    {
      id: 2,
      title: "Smartphone",
      price: 599.99,
      img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg"
    },
    {
      id: 3,
      title: "Smartwatch",
      price: 199.99,
      img: "https://images.pexels.com/photos/2773943/pexels-photo-2773943.jpeg"
    },
    {
      id: 4,
      title: "Laptop",
      price: 899.99,
      img: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 49.99,
      img: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg"
    },
    {
      id: 6,
      title: "Digital Camera",
      price: 799.99,
      img: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg"
    },
    {
      id: 7,
      title: "Gaming Console",
      price: 399.99,
      img: "https://images.unsplash.com/photo-1630526959194-5a2eb63b63aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      title: "Tablet",
      price: 299.99,
      img: "https://images.pexels.com/photos/5082563/pexels-photo-5082563.jpeg"
    },
    {
      id: 9,
      title: "4K TV",
      price: 1199.99,
      img: "https://images.pexels.com/photos/276723/pexels-photo-276723.jpeg"
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 29.99,
      img: "https://images.pexels.com/photos/1310534/pexels-photo-1310534.jpeg"
    }
  ];
  
  
const HomePage = () => {
    const HomePage = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    `;
    const HeroSection = styled.div`
        width: 100%;
        height: 30vh;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Title = styled.h1`
        color: white;
        font-size: 3rem;
    `
    const CardHolder = styled.div`
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
    `
  return (
    <HomePage>
        <HeroSection>
            <Title>HomePage</Title>
        </HeroSection>
        <CardHolder>
            {products.map((product) => (
                <Cards key={product.id} image={product.img} title={product.title} price={product.price} />
            ))}
        </CardHolder>
    </HomePage>
  )
}

export default HomePage