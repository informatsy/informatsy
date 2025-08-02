import React from "react";
import { Skeleton } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 340,
    padding: "5px",
    marginBottom: "1em",
    borderRadius: "10px",
  },
  divider: {
    marginTop: "10px",
  },
  radius: {
    borderRadius: "10px",
  },
}));
function Iccskeleton() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Skeleton variant="circle">
                <Avatar />
              </Skeleton>
            }
            title={
              <Skeleton width="100%" className={classes.radius}>
                <Typography variant="h6">.</Typography>
              </Skeleton>
            }
            subheader={
              <Skeleton
                width="100%"
                variant="rect"
                height="2rem"
                className={classes.divider}
              >
                <Typography>.</Typography>
              </Skeleton>
            }
          />
        </Card>
      </Grid>
    </div>
  );
}

export default Iccskeleton;
