import { ErrorMessage, Field, Form, Formik } from "formik";
import useLogin from "../hooks/useLogin";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { Navigate } from "react-router";

const loginSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});

function Login() {
  const { login, hasError } = useLogin();
  const isLoggedIn = useSelector((state: RootState) => !!state.user);
  const dispatch = useDispatch();
  const doLogin = (email: string, password: string) => {
    dispatch({ type: "user/login", payload: { email, password } });
  };

  if (isLoggedIn) {
    return <Navigate to="/products"></Navigate>;
  }

  return (
    <div className="card">
      <h1>Login</h1>
      <br></br>
      {hasError && <p style={{ color: "red" }}> Invalid login credential</p>}
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={({ email, password }) => doLogin(email, password)}
      >
        <Form>
          <Field name="email" type="email" placeholder="Email" />
          <br></br>
          <br></br>
          <ErrorMessage name="email"></ErrorMessage>
          <Field name="password" type="password" placeholder="Password" />
          <br></br>
          <br></br>
          <ErrorMessage name="password"></ErrorMessage>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
