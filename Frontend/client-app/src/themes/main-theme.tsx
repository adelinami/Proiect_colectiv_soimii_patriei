import {createMuiTheme} from "@material-ui/core";
import {grey, indigo, red, green, deepPurple, blue, blueGrey} from "@material-ui/core/colors";

export const theme = createMuiTheme({ // material ui color palette: https://material-ui.com/style/color/#color-palette
  palette: {
    background: {
      default: "#9E99A6",
      paper: "#4C3B4D",
    },
    primary: {
      main: "#963358"
    },
    secondary: {
      main: "#FFEEDB"
    },
    text: {
      primary: grey[900]
    },
    error: {
      main: "#61C9A8"
    },
    action: {
      active: deepPurple[100],
      hover: blue[100],
    }
  },
  typography: {
    fontFamily: 'verdana',
    useNextVariants: true
  },
  spacing: {
    unit: 2
  }
});