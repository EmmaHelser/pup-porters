import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import DogType from './DogType.jsx';
import ChooseRole from './ChooseRole.jsx';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcome: {
    position: 'relative',
    top: 300,
  },
  title: {
    fontSize: 90,
    marginRight: 200,
    marginLeft: 200,
    marginBottom: 250,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 500,
    height: 150,
  },
  text: {
    fontSize: 40,
  },
  button: {
    height: 75,
    width: 500,
    borderRadius: 40,
    boxShadow: '0 5px 10px 5px rgba(128,128,128, .3)',
    fontSize: 30,
    margin: 50,
  }
});

const PersonalInfo = () => {
  const classes = useStyles();
  const [view, changeView] = useState(false);

  if (!view) {
    return (
      <div className={classes.welcome}>
        <div className={classes.container}>
        <div className={classes.title}>Personal Information</div>
        <form  className={classes.form} required autoComplete="off">
          <TextField
            className={classes.input}
            label="Email Address"
            inputProps={{style: {fontSize: 40}}}
            InputLabelProps={{style: {fontSize: 40}}}/>
          <TextField
            className={classes.input}
            label="Password"
            inputProps={{style: {fontSize: 40}}}
            InputLabelProps={{style: {fontSize: 40}}}/>
        </form>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => changeView('dogtype')}>
            Submit
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => changeView('back')}>
            Back
          </Button>
        </div>
      </div>
    )
  } else if (view === 'dogtype') {
    return (<DogType/>)
  } else if (view === 'back') {
    return(<ChooseRole/>)
  }
}

export default PersonalInfo;