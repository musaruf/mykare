import { useNavigate } from "react-router-dom";

function useRegister() {
  // dependencies initialization
  let navigate = useNavigate();

  // onSubmit handler
  const onSubmit = (d) => {
    let auth = JSON.parse(localStorage.getItem("auth"));

    if (auth === null) {
      auth = [{ username: "admin", password: "admin" }];
    }
    const same = auth.filter((n) => n.username === d.username);

    if (same.length === 0) {
      auth = [...auth, { username: d.username, password: d.password }];
      localStorage.setItem("auth", JSON.stringify(auth));
      navigate("/home");
    } else {
      alert("user exist!");
    }
  };

  return { onSubmit };
}

export default useRegister;
