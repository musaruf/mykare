import { useNavigate } from "react-router-dom";
import { useState } from "react";

function useHome() {
  // local states
  const [users, setUsers] = useState();
  const [usersList, setUsersList] = useState(false);

  // dependencies initialization
  let navigate = useNavigate();

  // user data gathering function
  const userFunc = () => {
    let auth = JSON.parse(localStorage.getItem("auth"));
    let userlogined = localStorage.getItem("userlogined");

    if (userlogined === "admin") {
      setUsersList(true);
    }
    const filterData = auth.filter((e) => e.username !== "admin");
    setUsers(filterData);
  };

  // logout users function
  const logout = () => {
    localStorage.removeItem("userlogined");
    navigate("/");
  };

  return { logout, userFunc, users, usersList };
}

export default useHome;
