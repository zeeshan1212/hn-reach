import "../App.css";
import { React } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Dashboard = ({ searchValue, setSearchValue }) => {
  return (
    <div className="App">
      <div className="container">
        <h2>Hacker Rank News</h2>
        <input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <div className="filter-link">
          <NavLink to="/top"> Top </NavLink>
          <NavLink to="/ask"> Ask </NavLink>
          <NavLink to="/job"> Job </NavLink>
          <NavLink to="/show"> Show </NavLink>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default Dashboard;
