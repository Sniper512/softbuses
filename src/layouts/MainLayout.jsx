import { Outlet } from "react-router";
import { HeaderDesktop } from "../components/general/header/HeaderDesktop";
import { HeaderMobile } from "../components/general/header/HeaderMobile";
import { Footer } from "../components/general/Footer";

export default function MainLayout() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
      <Outlet />
      <Footer />
    </>
  )
}