import React from "react";
import Grid from "@material-ui/core/Grid";
import ContestCard from "./ContestCard";
import { useEffect, useState } from "react";
import axios from "axios";
import NoResource from "../resourcesComponents/NoResource";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";
import Iccskeleton from "../layoutsComponent/skeletonLoads/Iccskeleton";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  loader: {
    height: "100%",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
}));

export default function IccHome() {
  const classes = useStyles();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const fetchData = () => {
    setLoading(true);
    const website1 = "http://127.0.0.1:8000/api/IccContest/";
    const website2 = "https://kontests.net/api/v1/all";

    const getWeb1 = axios.get(website1);
    const getWeb2 = axios.get(website2);

    axios.all([getWeb1, getWeb2]).then(
      axios.spread((...alldata) => {
        setData1(alldata[0].data);
        // all data
        // setData2(alldata[1].data);

        // filtered website data
        setData2(
          alldata[1].data.filter(
            (e) =>
              e.site === "CodeChef" ||
              e.site === "CodeForces" ||
              e.site === "LeetCode" ||
              e.site === "Kick Start"
          )
        );
        setLoading(false);
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return !loading ? (
    <div>
      <Helmet>
        <meta name="title" content="Informatsy coding club" />
        <meta
          name="description"
          content="Informatsy coding club includes all contests and their events registration here only."
        />
        <meta
          name="keywords"
          content="informatsy,vtu notes,vtu students,info,informat,informatsy-info,information,Informatsy"
        ></meta>
        <meta property="og:title" content="Informatsy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://informatsy.in/resources/questionPapers"
        />
        <title>ICC</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9672945121394472"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "30px" }}
        color="textPrimary"
      >
        Contests
      </Typography>
      <Grid container spacing={2}>
        {data1.length + data2.length === 0 ? (
          <NoResource />
        ) : (
          data1.map((e) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <ContestCard
                  name={e.contest_name}
                  site={"Informatsy"}
                  start_time={e.contest_time}
                  url={e.contest_link}
                />
              </Grid>
            );
          })
        )}
        {data2.map((e) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ContestCard
                name={e.name}
                site={e.site}
                start_time={e.start_time}
                url={e.url}
              />
            </Grid>
          );
        })}

        {/* {data2.length === 0
          ? "no contest"
          : data2.map((dataItem) => {
              <Grid item xs={12} sm={6} md={4}>
                <ContestCard
                  name={dataItem.name}
                  site={dataItem.site}
                  start_time={dataItem.start_time}
                  url={dataItem.url}
                />
              </Grid>
            })} */}
      </Grid>
    </div>
  ) : (
    <div className={classes.loader}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "30px" }}
        color="textPrimary"
      >
        Contests
      </Typography>
      <Grid container spacing={5}>
        {data.map((d) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Iccskeleton />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
