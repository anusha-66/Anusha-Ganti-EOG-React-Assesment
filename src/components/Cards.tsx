import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Weather from '../Features/Weather/Weather';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});



type CardsProps = {
    metricValue: []
  }
const anotherQuery = `
    query {
        getMeasurements(input: {metricName: "flareTemp"}) {
            metric
            value
            unit
            at
          }
    }
`

export default (props: { metricValue: any }) => {
  const classes = useStyles();

  return (
    <>
    
    </>
  );
};
