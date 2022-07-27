import { useNavigate } from "react-router-dom";

function useLogin() {
  // dependencies initialization
  let navigate = useNavigate();

  // onSubmit handler
  const onSubmit = (d) => {
    let auth = JSON.parse(localStorage.getItem("auth"));

    if (auth === null) {
      alert("no user found!");
    }
    const same = auth.filter((n) => n.username === d.username);

    if (same.length !== 0) {
      if (same[0].password === d.password) {
        localStorage.setItem("userlogined", d.username);
        navigate("/home");
      } else {
        alert("password is wrong");
      }
    } else {
      alert(`${d.username} user not exist`);
    }
  };

  return { onSubmit };
}

export default useLogin;
