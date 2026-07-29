import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function WelcomeSection() {
  const [name, setName] = useState("");

  useEffect(() => {
    async function loadUser() {
      if (!auth.currentUser) return;

      const snapshot = await getDoc(
        doc(db, "users", auth.currentUser.uid)
      );

      if (snapshot.exists()) {
        setName(snapshot.data().displayName || "");
      }
    }

    loadUser();
  }, []);

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <section>

      <h2 className="font-[Kameron] text-5xl text-[#18202A] leading-tight">
        {greeting}
        {name && (
          <span className="text-[#384B8F]">
            {`, ${name}`}
          </span>
        )}
      </h2>

      <p className="mt-4 max-w-6xl font-[Karla] text-lg text-[#5E6773] leading-8">
        Review agreements with confidence. Upload contracts, identify risky clauses, and understand legal documents before signing.
      </p>

    </section>
  );
}