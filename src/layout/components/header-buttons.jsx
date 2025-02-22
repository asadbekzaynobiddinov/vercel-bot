import { Stack, IconButton, Badge } from "@mui/material";
import { UserIcon } from "../../assets/user.icon";
import { LikeIcon } from "../../assets/like-icon";
import { ShopIcon } from "../../assets/shop-icon";

export const HeaderButtons = () => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} gap={"25px"}>
        <IconButton>
          <UserIcon />
        </IconButton>
        <IconButton>
          <Badge badgeContent={5} color="error">
            <LikeIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={2} color="error">
            <ShopIcon />
          </Badge>
        </IconButton>
      </Stack>
    </>
  );
};
