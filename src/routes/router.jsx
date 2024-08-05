import { Route, Routes } from "react-router-dom";
import AuthLayout from "../_auth/AuthLayout";
import { Sign_In, Sign_Up } from "../_auth/pages";
import HomeLayout from "../components/Home/HomeLayout";
import {
  Home,
  Hoodies,
  HoodiesCart,
  OverSizeTShirt,
  Polos,
  RoundedNeckTshirts,
  SingleHoodies,
  Zipper,
} from "../components/Home/pages";

const router = () => {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<AuthLayout />}>
          <Route index element={<Sign_In />} />
        </Route>
        <Route path="/sign-up" element={<AuthLayout />}>
          <Route index element={<Sign_Up />} />
        </Route>

        {/* private routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/zippers" element={<Zipper />} />
          <Route path="/oversized" element={<OverSizeTShirt />} />
          <Route path="/rounded-Tshirts" element={<RoundedNeckTshirts />} />
          <Route path="/polo" element={<Polos />} />

          <Route path="/single-hoodies" element={<SingleHoodies />} />
          <Route path="/hoodies-cart" element={<HoodiesCart />} />
        </Route>
      </Routes>
    </>
  );
};

export default router;
