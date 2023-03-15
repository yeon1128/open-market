import * as React from "react";
import * as S from "./style";
import { MainContainer } from "../../components/MainContainer";
import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <Carousel />
        <S.ProductList>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </S.ProductList>
      </MainContainer>
      <Footer />
    </>
  );
}
