import { Link } from "react-router-dom";
import { IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import { Location } from "../../assets/location";
import { SearchIcon } from "../../assets/search-icon";

export const HeaderSearch = () => {
  return (
    <>
      <Stack alignItems={"center"} flexGrow={1} direction={"row"} gap={"60px"}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton>
            <Location />
          </IconButton>
          <Typography sx={{ cursor: "pointer" }}>Алматы</Typography>
        </Stack>
        <Stack flexGrow={1}>
          <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end" sx={{ mb: '10px'}}>
                  <IconButton>
                    <SearchIcon/>
                  </IconButton>
                </InputAdornment>
              )
            }
          }}
            variant="standard"
            size="small"
            placeholder="Поиск по товарам"
          />
        </Stack>
      </Stack>
    </>
  );
};
