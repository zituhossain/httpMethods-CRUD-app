import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

const UserForm = ({ handleSubmitData, btnText }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = user;
  const handleChange = (e) => {
    const selectedField = e.target.name;
    const selectedValue = e.target.value;

    setUser((prevState) => {
      return { ...prevState, [selectedField]: selectedValue };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitData(user);
    setUser({
      username: "",
      email: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn">
        {btnText}
      </button>
    </form>
  );
};

UserForm.propTypes = {};

export default UserForm;
