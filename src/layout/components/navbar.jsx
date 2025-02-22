import { Box, Container, Stack } from "@mui/material";
import { navLinks } from "../data";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../config/colors";

const CustomLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: ${colors.titleColor};

  &:hover {
    color: ${colors.danger};
  }
`;

export const Navbar = () => {
  return (
    <>
      <Box py={"30px"} bgcolor={"#f9f9f9"}>
        <Container maxWidth={"xl"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            {navLinks.map((item) => (
              <CustomLink key={item.id} to={item.path}>
                {item.name}
              </CustomLink>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
