import { React, useEffect, useState } from "react";
import { API_URI } from "../config";
import PropTypes from "prop-types";
import Story from "./Story";

const ShowStories = ({ searchValue }) => {
  const [id, setId] = useState([]);

  const get_top_id = async () => {
    const data = await fetch(`${API_URI}/showstories.json`);
    const allIds = await data.json();
    const topTen = allIds.slice(0, 10);
    setId(topTen);
  };

  useEffect(() => {
    get_top_id();
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

ShowStories.propTypes = {
  searchValue: PropTypes.string,
};

export default ShowStories;
