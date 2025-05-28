import { useContext, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";

const ForgotPass = () => {
  const { auth, forgotEmail } = useContext(AuthContext);
  const [email, setEmail] = useState(forgotEmail || "");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please provide a valid email!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!", {
          position: "top-center",
          autoClose: 2000,
        });
        toast("Redirecting to your Gmail!", {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 2000);
      })
      .catch(() => {
        toast.error("Failed to send reset email. Try again!", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="bg-[#d0d9d0] w-full h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="bg-white py-10 px-8 rounded-xl shadow-md w-[400px] sm:w-[450px] md:mh-[800px] md:min-h-[40rem] flex flex-col justify-center items-center">
       <div>
         <h2 className="text-2xl font-semibold text-center mb-5">Forgot Password?</h2>
        <p className="text-sm text-center mb-6 ">
          Please enter your email to receive a password reset link
        </p>
        <form onSubmit={handleResetPassword} className="space-y-8">
          <div>
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-green-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn bg-green-600 text-white hover:bg-green-800 w-full font-medium"
          >
            Send Reset Link
          </button>
        </form>
       </div>
      </div>
    </div>
  );
};

export default ForgotPass;
