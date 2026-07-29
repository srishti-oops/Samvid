import { useEffect, useRef, useState } from "react";
import { UserCircle2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import { logout } from "../../../services/authService";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function DashboardHeader() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    async function loadUser() {
      if (!auth.currentUser) return;

      const snap = await getDoc(
        doc(db, "users", auth.currentUser.uid)
      );

      if (snap.exists()) {
        setUserData({
          name: snap.data().displayName || "",
          email: snap.data().email || "",
        });
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  async function handleLogout() {
    try {
      await logout();

      setOpen(false);

      toast.success("Logged out successfully");
    } catch (error) {
      console.error(error);
      toast.error("Unable to log out.");
    }
  }

  return (
    <header className="bg-white border-b border-[#DCE3EB]">

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <h1
          onClick={() => navigate("/dashboard")}
          className="font-[Kameron] text-3xl text-[#384B8F] cursor-pointer"
        >
          Samvid
        </h1>

        <div
          className="relative"
          ref={dropdownRef}
        >

          <button
            onClick={() => setOpen(!open)}
            className="
              w-11
              h-11
              rounded-full
              border
              border-[#DCE3EB]
              flex
              items-center
              justify-center
              hover:border-[#384B8F]
              transition
            "
          >
            <UserCircle2
              size={24}
              className="text-[#384B8F]"
            />
          </button>

          {open && (

            <div
              className="
                absolute
                right-0
                mt-3
                w-72
                bg-white
                border
                border-[#DCE3EB]
                rounded-xl
                shadow-sm
                overflow-hidden
                z-50
              "
            >

              <div className="p-5">

                <h3 className="font-semibold text-[#18202A]">
                  {userData.name}
                </h3>

                <p className="text-sm text-[#5E6773] mt-1 break-all">
                  {userData.email}
                </p>

              </div>

              <div className="border-t border-[#DCE3EB]">

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    px-5
                    py-4
                    flex
                    items-center
                    gap-3
                    text-[#C95C54]
                    hover:bg-red-50
                    transition
                  "
                >
                  <LogOut size={18} />

                  Logout

                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}