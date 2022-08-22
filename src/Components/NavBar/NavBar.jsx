import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import user1 from "../../Image/user.svg";
import logomain from "../../Image/logoUnwallpers.png";
const NavBar = () => {
  return (
    <div className="mainNavBar">
      <NavLink to="/">
        <img
          className="logonavbarinanime"
          id="logoMain"
          src={logomain}
          alt="image"
          title="На главную страницу"
        />
      </NavLink>

      <NavLink to="/type" className="navBarWords">
        {" "}
        Релизы
      </NavLink>

      <NavLink to="/favorite" className="navBarWords">
        {" "}
        Закладки
      </NavLink>

      <NavLink to="/about" className="navBarWords">
        {" "}
        О нас
      </NavLink>

      <NavLink to="/add" className="navBarWords">
        {" "}
        Добавить
      </NavLink>

      {/* <div className="navBarAuthAndSearch">
        <img className="authAndSearch" src={user1} alt="user" />
      </div> */}
    </div>
  );
};

export default NavBar;
