import React from "react";
import * as S from "./style";
import { MainContainer } from "../../components/MainContainer";
import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <MainContainer>
        <ul>
          <ProductCard />
        </ul>
      </MainContainer>
    </>
  );
}
