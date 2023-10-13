import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LoadingScreen from "../../shared/LoadingScreen";

const Root = () => {
  const [firstLoading, setFirstLoading] = useState(true);

  setTimeout(() => setFirstLoading(false), 1000);

  if (firstLoading) return <LoadingScreen />;

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
