import styled from "styled-components";

export const CardContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding-bottom: 50px;
  padding-top: 50px;
  padding-left: 8%;
  padding-right: 8%;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 875px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ProductCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
  box-shadow: 0 0 20px rgb(228, 228, 228);

  &:hover{
    box-shadow: 0 0 20px rgb(179, 179, 179);
  }
`;

export const CardH1 = styled.h1`
  color: #000000;
  font-family: poppins;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 1px;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const BarCard = styled.div`
  height: 5px;
  width: 75px;
  background-color: #000000;
  text-align: center;
  margin-top: 10px;
`;

export const CardH2 = styled.h2`
  font-family: poppins;
  color: #00a29b;
  margin-bottom: 10px;
  margin-top: 10px;
  text-transform: uppercase;
`;

export const CardsP = styled.p`
  color: #000000;
  font-family: roboto;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: justify;
  margin-bottom: 20px;
  height: 50px;
`;

export const CardImg = styled.div`
  max-width: auto;
  max-height: auto;
  min-width: 300px;
  min-height: 400px
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-space-around;
  width: auto;
`;
