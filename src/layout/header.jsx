import { Container, Stack } from "@mui/material";
import { HeaderSearch } from "./components/header-search";
import { HeaderButtons } from "./components/header-buttons";
import { Navbar } from "./components/navbar";

export const Header = () => {
  return (
    <>
      <Container maxWidth={'xl'}>
        <Stack py={'31px'} direction={'row'} gap={'60px'} alignItems={'center'}>
          <HeaderSearch/>
          <HeaderButtons/>
        </Stack>
      </Container>
      <Navbar/>
    </>
  );
};
