import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 250,
    height: '100vw',
    backgroundColor: '#683CB8',
    color: 'white'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 10,
  },
});


const Sidebar = () => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
      <CardContent className={classes.pos}>
        <Typography variant="h5">
          Home
        </Typography>
        <Typography variant="h5"  >
          Contact
        </Typography>
        <Typography  variant="h5" >
          About
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
}

export default Sidebar;
