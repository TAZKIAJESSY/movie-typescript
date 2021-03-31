import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        margin: 20,
        fontSize: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink exact to="/discover">
        Discover Movie Page
      </NavLink>
    </div>
  );
}

export default NavBar;
