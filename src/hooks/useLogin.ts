import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser, setUSer } from "../store/slices/userSlicce";
import { useNavigate } from "react-router";

function useLogin() {
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  const login = async (email: string, password: string) => {
    try {
      const data = { email, password, returnSecureToken: true };
      const apiKey = "AIzaSyDVNvPEx36P74lYpiM9Id83QA1z6z_O-94";
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        apiKey;
      const res = await axios.post(url, data);
      console.log(res);
      dispatch(setUSer(res.data));
    } catch (e) {
      setHasError(true);
      console.log(e);
    }
  };
  return { login, hasError, logout };
}

export default useLogin;
