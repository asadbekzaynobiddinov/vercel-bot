import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { colors } from "../config/colors";

const Btn = styled(Button)`
  background-color: ${colors.danger};
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  text-align: center;

  &:hover {
    background-color: #aa3737;
  }
`;

export const SecondaryButton = ({ children, ...props }) => {
  return (
    <>
      <Btn {...props} disableRipple>{children}</Btn>
    </>
  );
};
