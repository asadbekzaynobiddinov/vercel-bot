import { Box, IconButton, Typography, Rating, Stack } from "@mui/material";
import styled from "@emotion/styled";
import img from "../assets/product.png";
import { LikeIcon } from "../assets/like-icon";
import { colors } from "../config/colors";

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
  padding-top: 68px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 21px;
`;

const CardBadge = styled.span`
  padding: 3px 20px;
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #fff;
  background-color: #618c78;
`;

const CustomIcon = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ProductCard = ({ children }) => {
  return (
    <>
      <Card>
        <CardBadge>{children}</CardBadge>
        <CustomIcon>
          <LikeIcon />
        </CustomIcon>
        <Box textAlign={"center"} mb={"20px"}>
          <img src={img} alt="product Img" />
        </Box>
        <Typography
          maxWidth={"175px"}
          fontWeight={400}
          fontSize={"18px"}
          lineHeight={"100%"}
          color={colors.titleColor}
          mb={"8px"}
        >
          Aster Q893A LVIZON LVIZON
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={"14px"}
          lineHeight={"140%"}
          color={colors.titleColor}
          mb={"8px"}
        >
          Размер: 60x100
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={"14px"}
          lineHeight={"140%"}
          color={colors.titleColor}
          mb={"8px"}
        >
          Производитель: Казахстан
        </Typography>
        <Stack direction={"row"} alignItems={"center"} gap={"8px"} mb={"16px"}>
          <Rating readOnly value={0}></Rating>
          <Typography
            fontWeight={400}
            fontSize={"14px"}
            lineHeight={"140%"}
            color={colors.titleColor}
            sx={{ opacity: 0.5 }}
          >
            0 отзывов
          </Typography>
        </Stack>
        <Box>
          <Stack>
            <Typography
              fontWeight={400}
              fontSize={"14px"}
              lineHeight={"140%"}
              color={colors.titleColor}
              sx={{ opacity: 0.5 }}
              mb={"8px"}
            >
              Цена
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={"18px"}
              lineHeight={"100%"}
              color={colors.titleColor}
            >
              160.000 T
            </Typography>
          </Stack>
          <Stack></Stack>
        </Box>
      </Card>
    </>
  );
};
