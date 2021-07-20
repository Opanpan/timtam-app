import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {
  return (
    <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, backgroundColor: 'black' }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; Anamnesia 2021 . Privacy Policy . Support
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
