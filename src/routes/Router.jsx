import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Cart,
  Error,
  Login,
  MyPage,
  Payment,
  ProductDetail,
  ProductUpload,
  SellerCenter,
  Signup,
} from "../pages";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productupload" element={<ProductUpload />} />
        <Route path="/sellercenter" element={<SellerCenter />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
