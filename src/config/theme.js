import { createTheme } from "@mui/material"
import { colors } from './colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    error: {
      main: colors.danger
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1000,
      xl: 1323,
    }
  },
  typography: {
    fontFamily: ["Ubuntu", 'serif'].join(','),
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "130%",
      color: colors.titleColor,
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "140%",
          padding: '13px 38px',
          borderRadius: '10px'
        }
      }
    }
  }
})
