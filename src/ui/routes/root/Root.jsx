import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
};

export default Root;
