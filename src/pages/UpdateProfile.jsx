import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { auth, setUpdateImgname, updateimgname } = useContext(AuthContext);
  const [name, setName] = useState(auth.currentUser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(auth.currentUser?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!name || !photoURL) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // Update user profile
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        setUpdateImgname(!updateimgname);
        setTimeout(() => navigate("/my-profile"), 2000);
      })
      .catch((error) => {
        toast.error("Failed to update profile", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-6">Update Profile</h2>
      <form
        onSubmit={handleUpdateProfile}
        className="w-full max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-green-50 px-10 hover:bg-green-800 hover:text-white font-medium border border-green-500"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
