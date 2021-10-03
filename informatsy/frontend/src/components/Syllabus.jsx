import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "30px",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "20px",
    },
  },
  image: {
    paddingTop: "10px",
    maxHeight: "200px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "130px",
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "160px",
    },
  },
}));

export default function Syllabus() {
  const classes = useStyles();
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://informatsy.pythonanywhere.com/api/syllabus/")
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box mr={2} pb={{ xs: 3, sm: 5, md: 6 }} width="100%">
      <Box textAlign="center" pb={4}>
        <Typography variant="h4" component="h5" gutterBottom>
          Syllabus
        </Typography>
      </Box>
      <Box mr={2}>
        <Grid container spacing={5}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.branchName}>
              <Box textAlign="center" px={{ xs: 2, sm: 4, md: 4 }}>
                <Paper
                  className={classes.card}
                  elevation={5}
                  onClick={() => window.location.assign(item.documentURL)}
                >
                  <img
                    className={classes.image}
                    src={item.branchImage}
                    alt={item.branchName}
                  />

                  <Typography
                    variant="h6"
                    component="h5"
                    gutterBottom
                    style={{ paddingBottom: "10px", paddingTop: "5px" }}
                  >
                    {item.branchName}
                    <br />
                    {item.scheme}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
