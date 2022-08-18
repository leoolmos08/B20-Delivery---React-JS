import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: "row";
flex-wrap: wrap;
align-items: "flex-start";
margin: -3px; 
`;

const ProductsContainer = styled.div`
width: 100%;
padding: 3px;
`
const Product = styled.div`
padding: 10px;
background-color: "#f0f0f0";
flex-direction: "row"
`
const Image = styled.div`
height: 110px;
width: 110px;
resize-mode: "contain"
`
const Name =styled.h3`
font-size: 18px;
font-weight: "bold";
padding-bottom: 10px
`
const Description = styled.div`
margin-left: 20px;
width: 65%
`
const Price = styled.h5`
font-size: 16px;
font-weight: "bold";
text-align:"right"
`

export{ ProductsContainer, Container, Product, Image, Name, Description, Price }