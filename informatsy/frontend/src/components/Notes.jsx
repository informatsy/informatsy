import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import SearchAndFilter from "./resourcesComponents/SearchAndFilter";
import ResourceCard from "./resourcesComponents/ResourceCard";
import NoResource from "./resourcesComponents/NoResource";
import { useHistory, useLocation } from "react-router";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import axios from "axios";
import { authAxios } from "../Authaxios";
const useStyles = makeStyles((theme) => ({
  loader: {
    height: "50vh",
  },
  loaderProgress: {
    position: "absolute",
    left: "50%",
    top: "30%",
    transform: "translate(-50%,-50%)",
  },
}));
export default function Notes() {
  const classes = useStyles();
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [defaultSortOrder, setDefaultSortOrder] = useState("");
  const [defaultSelectedCourse, setDefaultSelectedCourse] = useState("");
  const [defaultSelectedYearOrSem, setDefaultSelectedYearOrSem] = useState("");
  const [loading, setLoading] = useState(false);
  const onSearch = (searchData) => {
    setData(
      allData.filter(
        (d) =>
          d.subjectName.toLowerCase().includes(searchData.toLowerCase()) ||
          d.subjectCode.toLowerCase().includes(searchData.toLowerCase())
        // &&
        // d.course === defaultSelectedCourse &&
        // d.yearOrSem === defaultSelectedYearOrSem
      )
    );
  };

  const onFilter = (selectedCourse, selectedYearOrSem, sortOrder) => {
    setDefaultSelectedCourse(selectedCourse);
    setDefaultSelectedYearOrSem(selectedYearOrSem);
    setDefaultSortOrder(sortOrder);
  };

  const onSort = () => {
    data.sort(function (a, b) {
      let x = a.subjectName.toLowerCase();
      let y = b.subjectName.toLowerCase();
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });
  };

  const onReverseSort = () => {
    data.sort(function (a, b) {
      let x = a.subjectName.toLowerCase();
      let y = b.subjectName.toLowerCase();
      if (x < y) return 1;
      if (x > y) return -1;
      return 0;
    });
  };
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    authAxios
      .get(`notes/`)
      .then((res) => {
        const data = res.data;
        setAllData(data);
        setLoading(false);
        if (defaultSelectedCourse === "" || defaultSelectedYearOrSem === "") {
          setData(data);
        } else {
          setData(
            data.filter(
              (dt) =>
                dt.course === defaultSelectedCourse &&
                dt.yearOrSem === defaultSelectedYearOrSem
            )
          );
          // setData(false);
        }
      })
      .catch((err) => {
        console.log(err.response);
        // setData(false);
        setLoading(false);
        if (err.response) {
          // setData(false);
          // history.push("/login");
        }
      });
  }, [defaultSelectedCourse, defaultSelectedYearOrSem]);

  useEffect(() => {}, [defaultSortOrder]);

  return !loading ? (
    <div>
      <Box mr={4} py={3}>
        <SearchAndFilter
          onSearch={onSearch}
          onFilter={onFilter}
          defaultSortOrder={defaultSortOrder}
          onSort={onSort}
          onReverseSort={onReverseSort}
          defaultSelectedCourse={defaultSelectedCourse}
          defaultSelectedYearOrSem={defaultSelectedYearOrSem}
        />
      </Box>
      <Box mr={3} ml={1} py={2}>
        <Grid container spacing={2} alignItems="center">
          {data.length === 0 ? (
            <NoResource />
          ) : (
            data.map((note) => (
              <Grid item xs={12} sm={6} md={4} key={note.id}>
                <ResourceCard
                  subjectName={note.subjectName}
                  subjectCode={note.subjectCode}
                  yearOrSem={note.yearOrSem}
                  course={note.course}
                  documentURL={note.documentURL}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </div>
  ) : (
    <div className={classes.loader}>
      <span className={classes.loaderProgress}>
        <CircularProgress size="2rem" />
      </span>
    </div>
  );
}
