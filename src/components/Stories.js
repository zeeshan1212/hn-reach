import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { API_URI } from "../config";
import Story from "./Story";

const Stories = ({ searchValue }) => {
  const [id, setId] = useState([]);
  const getTopId = async () => {
    const data = await fetch(`${API_URI}/topstories.json`);
    const allIds = await data.json();
    const topTen = allIds.slice(0, 10);
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
            <Story id={id} key={id} searchValue={searchValue} />
          </div>
        );
      })}
    </div>
  );
};

Stories.propTypes = {
  searchValue: PropTypes.string,
};

export default Stories;
