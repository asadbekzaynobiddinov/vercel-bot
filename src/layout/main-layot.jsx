import { Stack } from "@mui/material";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Stack height={'100vh'} justifyContent={'space-between'}>
        <div className="wrapper">
          <header><Header/></header>
          <main>
            <Outlet/>
          </main>
        </div>
        <footer><Footer/></footer>
      </Stack>
    </>
  );
};
