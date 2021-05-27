import { React } from "react";
import { useState } from "react";
import { API_URI } from "../config";
import { useEffect } from "react";
import moment from "moment";

function User(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(props.match.url);
  }, [props.match.url]);
  const getUser = async (id) => {
    const data = await fetch(`${API_URI}${id}.json`);
    const user = await data.json();
    setUser(user);
  };

  return (
    <div className="user">
      <div className="container">
        <div className="name">User : {user.id}</div>
        Created : {moment(user.created).format("ll")}
      </div>
      <div className="karma">Karma : {user.karma}</div>
      <div className="about">About : {user.about}</div>
    </div>
  );
}

export default User;
