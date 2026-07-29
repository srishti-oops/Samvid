import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import toast from "react-hot-toast";

export default function OnboardingPage() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  async function handleContinue() {

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    await updateDoc(
      doc(db, "users", auth.currentUser.uid),
      {
        displayName: name.trim(),
      }
    );

    toast.success("Welcome to Samvid!");

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-6">

      <div className="bg-white border border-[#DCE3EB] rounded-xl p-10 w-full max-w-md">

        <h1 className="font-[Kameron] text-5xl text-center text-[#384B8F]">
          Samvid
        </h1>

        <h2 className="mt-4 font-[Kameron] text-3xl text-center text-[#18202A]">
          Welcome!
        </h2>

        <p className="mt-3 text-center text-2xl text-[#5E6773] font-[Karla]">
          What should we call you?
        </p>

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter your first name"
          className="mt-8 w-full h-12 rounded-lg border border-[#DCE3EB] px-4"
        />

        <button
          onClick={handleContinue}
          className="mt-6 w-full h-12 rounded-lg bg-[#384B8F] text-white font-semibold"
        >
          Continue
        </button>

      </div>

    </div>
  );
}