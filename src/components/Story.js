import { React, useEffect, useState } from "react";
import { API_URI } from "../config";
import moment from "moment";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Story = ({ id, searchValue }) => {
  const [story, setStory] = useState({});

  const getStory = async (id) => {
    const data = await fetch(`${API_URI}/item/${id}.json`);
    const item = await data.json();
    setStory(item);
  };

  useEffect(() => {
    getStory(id);
  }, [id]);

  return !searchValue ||
    story.title
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase()) ? (
    <div className="story">
      <div className="container">
        <a href={story.url} target="_blank" rel="noreferrer">
          <h4>{story.title}</h4>
        </a>
        <div className="info">
          {story.score} Points by
          <NavLink to={`/user/${story.by}`} key={story.by}>
            {story.by}
          </NavLink>
          {moment(story.time).fromNow()} | {story.kids ? story.kids.length : 0}{" "}
          comments
        </div>
      </div>
    </div>
  ) : null;
};

Story.propTypes = {
  id: PropTypes.number,
  searchValue: PropTypes.string,
};

export default Story;
