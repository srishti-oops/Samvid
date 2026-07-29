import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import {
  login,
  loginWithGoogle,
} from "../../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const credential = await login(email, password);

      const userRef = doc(db, "users", credential.user.uid);

      const snapshot = await getDoc(userRef);

      toast.success("Welcome back!");

      if (!snapshot.exists() || !snapshot.data().displayName) {
        navigate("/onboarding");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          toast.error("Invalid email address.");
          break;

        case "auth/user-not-found":
          toast.error("No account found with this email.");
          break;

        case "auth/wrong-password":
          toast.error("Incorrect password.");
          break;

        case "auth/invalid-credential":
          toast.error("Incorrect email or password.");
          break;

        case "auth/too-many-requests":
          toast.error("Too many attempts. Please try again later.");
          break;

        default:
          toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      const credential = await loginWithGoogle();

      const userRef = doc(db, "users", credential.user.uid);

      const snapshot = await getDoc(userRef);

      toast.success("Logged in successfully!");

      if (!snapshot.exists() || !snapshot.data().displayName) {
        navigate("/onboarding");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-[500px] rounded-xl border border-[#DCE3EB] bg-white p-10 shadow-sm">

        <h1 className="font-[Kameron] text-[56px] text-center text-[#384B8F] leading-none">
          Samvid
        </h1>

        <h2 className="mt-2 text-center font-[Kameron] text-[28px] text-[#18202A]">
          Welcome Back!
        </h2>

        <p className="mt-2 text-center font-[Karla] text-[17px] text-[#5E6773]">
          Continue reviewing agreements securely.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-lg border border-[#DCE3EB] transition hover:bg-[#F8F9FB]"
        >
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.2 0 6 1.1 8.3 3.2l6.2-6.2C34.5 2.9 29.7 1 24 1 14.7 1 6.8 6.5 3 14.5l7.4 5.7C12.2 13.9 17.6 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.7-.4-4H24v8.1h12.7c-.3 2-1.6 5.1-4.5 7.1l6.9 5.4c4-3.7 6.4-9.1 6.4-16.6z"/>
            <path fill="#FBBC05" d="M10.4 28.2c-.5-1.4-.8-2.8-.8-4.2s.3-2.9.8-4.2L3 14.1C1.7 16.8 1 20.3 1 24s.7 7.2 2 9.9l7.4-5.7z"/>
            <path fill="#34A853" d="M24 47c5.8 0 10.7-1.9 14.3-5.2l-6.9-5.4c-1.8 1.3-4.3 2.2-7.4 2.2-6.4 0-11.8-4.4-13.7-10.4L3 33.9C6.8 41.9 14.7 47 24 47z"/>
          </svg>

          <span className="font-[Kameron] text-[20px] text-[#18202A]">
            Continue with Google
          </span>
        </button>

        <div className="my-7 flex items-center">
          <div className="flex-1 border-t border-[#DCE3EB]" />
          <span className="px-4 text-sm text-[#8C94A0]">OR</span>
          <div className="flex-1 border-t border-[#DCE3EB]" />
        </div>

        <form onSubmit={handleLogin}>

          <label className="font-[Kameron] text-[22px] text-[#18202A]">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 h-13 w-full rounded-lg border border-[#DCE3EB] px-4 outline-none focus:border-[#384B8F]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="mt-5 block font-[Kameron] text-[22px] text-[#18202A]">
            Password
          </label>

          <div className="relative mt-2">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="h-13 w-full rounded-lg border border-[#DCE3EB] px-4 pr-12 outline-none focus:border-[#384B8F]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

          <div className="mt-3 flex justify-end">

            <button
              type="button"
              className="text-[#384B8F] hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 h-14 w-full rounded-lg bg-[#384B8F] font-[Kameron] text-[22px] text-white transition hover:bg-[#2F417F] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="mt-5 text-center font-[Karla] text-[16px] text-[#5E6773]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#384B8F] hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}