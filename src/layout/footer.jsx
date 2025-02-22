import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../config/colors";
import styled from "@emotion/styled";
import img from "../assets/inputbg.svg";
import { Phone } from "../assets/phone";
import { Mail } from "../assets/mail";
import { Whatsapp } from "../assets/whatsapp";
import { Intagram } from "../assets/intagram";
import { Facebook } from "../assets/facebook";

const FooterLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${colors.greyText};
  margin-bottom: 13px;
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <>
      <Box bgcolor={"#F2F2F2"} mt={"100px"} py={"40px"}>
        <Container maxWidth={"xl"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography
                variant="h3"
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"130%"}
                mb={"24px"}
              >
                Каталог товаров
              </Typography>
              <FooterLink>Ковры</FooterLink>
              <FooterLink>Коврики</FooterLink>
              <FooterLink>Дорожки</FooterLink>
              <FooterLink>Для ванной</FooterLink>
              <FooterLink>Особенные ковры</FooterLink>
            </Stack>
            <Stack>
              <Typography
                variant="h3"
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"130%"}
                mb={"24px"}
              >
                Личный кабинет
              </Typography>
              <FooterLink>Личный кабинет</FooterLink>
              <FooterLink>Мои заказы</FooterLink>
              <FooterLink>Избранное</FooterLink>
            </Stack>
            <Stack>
              <Typography
                variant="h3"
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"130%"}
                mb={"24px"}
              >
                Центр поддержки
              </Typography>
              <FooterLink>Контакты</FooterLink>
              <FooterLink>Доставка</FooterLink>
              <FooterLink>Возвраты</FooterLink>
            </Stack>
            <Stack>
              <Typography
                variant="h3"
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"130%"}
                mb={"24px"}
              >
                Помощь и контакты
              </Typography>
              <Stack direction={"row"} alignItems={'end'}>
                <IconButton display={'inline-block'}>
                  <Phone />
                </IconButton>
                <FooterLink>+7 775 657 66 76</FooterLink>
              </Stack>
              <Stack direction={'row'} alignItems={'end'}>
                <IconButton>
                  <Mail/>
                </IconButton>
                <FooterLink>info@kilem.kz</FooterLink>
              </Stack>
              <Stack direction={'row'} gap={'8px'}>
                <IconButton><Whatsapp/></IconButton>
                <IconButton><Intagram/></IconButton>
                <IconButton><Facebook/></IconButton>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="h3"
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"130%"}
                mb={"24px"}
              >
                Рассылка
              </Typography>
              <FooterLink>
                Подпишитесь, чтобы всегда <br /> быть в курсе наших новый акций
              </FooterLink>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  maxWidth: "265px",
                }}
              >
                <input
                  type="text"
                  placeholder="Ваш email"
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    paddingLeft: "22px",
                    border: "none",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "145%",
                    outline: "none",
                    paddingRight: "20px",
                  }}
                />
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#618c78",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    top: 0,
                    right: 0,
                  }}
                >
                  <img
                    src={img}
                    alt="img"
                    style={{
                      marginLeft: "13px",
                      marginTop: "16px",
                    }}
                  />
                </div>
              </div>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
