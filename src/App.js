import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const fontScaleFactor = 1.6; // to undo the base CSS 62.5% font size on the root element, html
const theme = createTheme({
  typography: {
    fontSize: 14 * fontScaleFactor,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained">Button</Button>
      </div>
      <div>
        <Link href="#">Link</Link>
      </div>
      <div>
        <Typography>Typography</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
