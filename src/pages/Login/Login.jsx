import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { signIn, signInGoogle,auth,ForgotPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(); // Moved emailRef to the top-level

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {

      });
  };
  const handleForgotPassword = ()=>{
    ForgotPassword(emailRef)
    navigate('/forgotpass')
  }



  return (
    <div className="my-5">
      <div>
    
        <h1 className="text-3xl mt-7 ralewayfont font-bold text-center mb-6">
        Please <span className="text-[#309255]">Login</span>
      </h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              ref={emailRef} // Attach ref here
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <label className="label">
              <div>
                <a
                  onClick={handleForgotPassword} // Call forgot password handler
                  className="label-text-alt link link-hover cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-white px-10 hover:bg-green-800 hover:text-white font-medium border border-green-500">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account{" "}
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
        <div>
          <GoogleLoginButton signInGoogle={signInGoogle}></GoogleLoginButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
