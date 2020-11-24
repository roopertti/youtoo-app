import { createMuiTheme }  from '@material-ui/core/styles'

/*TODO: Add missing colors when there are more components to apply the colors to.
Add light theme
*/ 

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#495057",
      main: "#343A40",
      dark: "#212529",
      contrastText: "#F8F9FA"
    },
    secondary: {
      light: "",
      main: "#343A40",
      dark: "",
      contrastText: "#"
    },
    background: {
      default: "#212529",
      paper: "495057",
    }
  },
})
export default theme;