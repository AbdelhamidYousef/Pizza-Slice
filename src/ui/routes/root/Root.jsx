import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LoadingScreen from "../../shared/LoadingScreen";

const Root = () => {
  const [firstLoading, setFirstLoading] = useState(true);
  const isLoading = useNavigation().state === "loading";

  useEffect(() => {
    const timer = setTimeout(() => setFirstLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

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
