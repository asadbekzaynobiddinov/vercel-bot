import { Box, Container, Stack, Typography, Grid2 } from "@mui/material";
import { colors } from "../../config/colors";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import { SecondaryButton } from "../../components/secondary-button";
import { ProductCard } from "../../components/product-card";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MyLink = styled(Link)`
  text-decoration: none;
`

const CustomLink = styled(Link)`
  color: ${colors.primary};
` 

export const Home = () => {
  return (
    <>
      <section>
        <Box bgcolor={colors.primary} py={"98px"}>
          <Container maxWidth={"xl"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box maxWidth={"524px"}>
                <Typography
                  fontWeight={700}
                  fontSize={"60px"}
                  color="#fff"
                  mb={"32px"}
                >
                  Новая коллекция ковров Venetta
                </Typography>
                <SecondaryButton>Смотреть все</SecondaryButton>
              </Box>
              <Box>
                <img src={hero1} alt="hero1" />
                <img src={hero2} alt="hero2" />
              </Box>
            </Stack>
          </Container>
        </Box>
      </section>
      <Box pt={'100px'}>
        <Container maxWidth={"xl"}>
          <Stack direction={'row'} alignItems={'center'} gap={'32px'} mb={'29px'}>
          <Typography variant="h2">Новинки</Typography>
          <CustomLink to={'/'}>Все новинки</CustomLink>
          </Stack>
          <Grid2 container spacing={'40px'}>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>Новинка</ProductCard>
              </MyLink>
            </Grid2>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>Новинка</ProductCard>
              </MyLink>
            </Grid2>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>Новинка</ProductCard>
              </MyLink>
            </Grid2>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>Новинка</ProductCard>
              </MyLink>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box mt={'100px'}>
        <Container maxWidth={"xl"}>
          <Stack direction={'row'} alignItems={'center'} gap={'32px'} mb={'29px'}>
          <Typography variant="h2">Скидки</Typography>
          <CustomLink to={'/'}>Все скидки</CustomLink>
          </Stack>
          <Grid2 container spacing={'40px'}>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>-20%</ProductCard>
              </MyLink>
            </Grid2>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>-20%</ProductCard>
              </MyLink>
            </Grid2>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>-20%</ProductCard>
              </MyLink>
            </Grid2>
            <Grid2 size={3}>
              <MyLink to={'/product'}>
                <ProductCard>-20%</ProductCard>
              </MyLink>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
