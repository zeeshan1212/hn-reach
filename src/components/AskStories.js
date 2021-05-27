import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { API_URI } from "../config";
import Story from "./Story";

const AskStories = ({ searchValue }) => {
  const [id, setId] = useState([]);

  const getTopId = async () => {
    const data = await fetch(`${API_URI}/askstories.json`);
    const allId = await data.json();
    const topTen = allId.slice(0, 10);
    setId(topTen);
  };

  useEffect(() => {
    getTopId();
  }, []);

  return (
    <div>
      {id.map((id, idx) => {
        return (
          <div key={idx} className="App">
            <Story searchValue={searchValue} id={id} key={id} />
          </div>
        );
      })}
    </div>
  );
};

AskStories.propTypes = {
  searchValue: PropTypes.string,
};

export default AskStories;
