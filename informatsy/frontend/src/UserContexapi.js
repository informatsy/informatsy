import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { authAxios, axiosinfo } from "./Authaxios";
import { useHistory, useLocation } from "react-router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    status: false,
    profile_img: "",
    name: "",
    isLoaded: false,
  });
  const [notes, setNotes] = useState([]);
  const [qnspaper, setQnspaper] = useState([]);
  const [syllabus, setSyllabus] = useState([]);
  const expires = 1 / 48;
  const history = useHistory();
  useEffect(() => {
    // console.log(user.user.status);
    //-----------progress event in axios--------------
    // onUploadProgress: progressEvent => console.log(progressEvent.loaded)
    authAxios
      .get(`getuserinfo/`)
      .then((res) => {
        console.log(res.data);
        setUser({
          status: true,
          profile_img:
            res.data.profile_img === null
              ? res.data.name[0]
              : res.data.profile_img,
          name: res.data.name,
          isLoaded: true,
        });

        // //console.log(user);
      })
      .catch((err) => {
        //console.log(err.response);
        if (err.response) {
          axiosinfo
            .post(`token/refresh/`, {
              refresh: Cookies.get("refresh_token"),
            })
            .then((res) => {
              Cookies.set("access_token", res.data.access, {
                expires: expires,
              });
              authAxios
                .get("/getuserinfo/")
                .then((res) => {
                  setUser({
                    status: true,
                    profile_img: res.data.profile_img,
                    name: res.data.name,
                    isLoaded: true,
                  });
                })
                .catch((err) => {
                  //console.log("Can't get user info");

                  setUser({
                    status: false,
                    profile_img: "",
                    name: "",
                    isLoaded: true,
                  });
                  // history.push("/login");
                });
            })
            .catch((err) => {
              // history.push("/login");
              setUser({
                status: false,
                profile_img: "",
                name: "",
                isLoaded: true,
              });
            });
        }
      });
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        qnspaper,
        setQnspaper,
        notes,
        setNotes,
        syllabus,
        setSyllabus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
