import React from "react";
import styled from "styled-components";

const Cards = ({image, title, price}) => {
  const Card = styled.div`
    width: 350px;
    height: 400px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  `;
  const ImageHolder = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  `;
  const Title = styled.h1`
    font-size: 30px;
  `;
  const Price = styled.h5`
    font-size: 10px;
  `;
  const InfoHolder = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Button = styled.button`
    width: 140px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
  `;
  return (
    <Card>
      <ImageHolder>
        <img
          style={{ borderRadius: "10px" }}
          src={image}
          alt="image"
        />
      </ImageHolder>
      <InfoHolder>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </InfoHolder>
      <Button>Add to cart</Button>
    </Card>
  );
};

export default Cards;
