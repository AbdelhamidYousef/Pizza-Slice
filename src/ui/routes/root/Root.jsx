import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>

      {/* <main>{Outlet}</main> */}

      <footer>footer</footer>
    </>
  );
};

export default Root;
