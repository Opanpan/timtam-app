import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hamburger from '../components/Hamburger';
import logo from '../assets/logo_anamnesia.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  logo: {
    maxWidth: 160,
    marginTop: 10,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ backgroundColor: 'grey', color: 'black' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <Hamburger />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Typography>
          <Typography variant="h4">Music</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
