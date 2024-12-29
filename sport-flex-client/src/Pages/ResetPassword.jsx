import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useContext(AuthContext);
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please provide a valid email address");
    } else {
      resetPassword(email)
        .then((result) => {
          window.location.href = "https://mail.google.com/";
          toast.success("Password Reset Email Sent");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-64">
      <h1 className="text-3xl font-bold text-center">
        Type your <span className="text-blue-600">email</span> to reset your
        <span className="text-blue-600"> password</span>
      </h1>
      <input
        type="text"
        ref={emailRef}
        placeholder="Type here"
        name="email"
        className="input input-bordered input-primary border-blue-600 w-full max-w-xs"
      />
      <div>
        <button
          onClick={handleForgetPassword}
          className="btn bg-blue-600 text-white px-10"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
