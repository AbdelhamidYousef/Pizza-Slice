import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LoadingScreen from "../../shared/LoadingScreen";

const Root = () => {
  const [firstLoading, setFirstLoading] = useState(true);
  setTimeout(() => setFirstLoading(false), 1000);

  const isLoading = useNavigation().state === "loading";

  if (firstLoading) return <LoadingScreen />;
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <Main>
        {isLoading && <LoadingScreen />}
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
};

export default Root;
