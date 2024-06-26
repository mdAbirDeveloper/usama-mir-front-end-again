import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Authentication/Authentication";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [nav, setNav] = useState(false);

  const toogleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div onClick={toogleNav} className="md:hidden z-30">
                {nav ? (
                  <AiOutlineClose size={30} />
                ) : (
                  <AiOutlineMenu size={30} />
                )}
              </div>
            </div>
            <div
              className={
                nav
                  ? "text-center z-20 fixed h-full w-full left-0  bg-blue-400"
                  : "fixed left-[-100%]"
              }
            >
              <ul className="font-semibold text-2xl space-y-3">
                <li className="text-white p-1 rounded font-serif uppercase shadow-lg">
                  <Link onClick={closeNav} href={"/"}>
                    Home
                  </Link>
                </li>
                <li className="text-white p-1 rounded text-md uppercase shadow-xl font-serif">
                  <Link onClick={closeNav} href={"/components/fashion"}>
                    Fashion
                  </Link>
                </li>
                <li className="text-white p-1 rounded text-md uppercase shadow-xl font-serif ">
                  <Link onClick={closeNav} href={"/components/beauty"}>
                    Beauty
                  </Link>
                </li>
                <li className="text-white p-1 rounded text-md uppercase shadow-xl font-serif ">
                  <Link onClick={closeNav} href={"/components/writeForUs"}>
                    Write For Us
                  </Link>
                </li>
                <li className="text-white p-1 rounded text-md uppercase shadow-xl font-serif ">
                  <Link onClick={closeNav} href={"/components/about"}>
                    About
                  </Link>
                </li>
                <li className="text-white p-1 rounded text-md uppercase shadow-xl font-serif ">
                  <Link onClick={closeNav} href={"/components/contact"}>
                    Contact
                  </Link>
                </li>
                {user ? (
                  <>
                    <li className="text-white text-md p-1 uppercase shadow-xl font-serif">
                      <Link onClick={closeNav} href={"/Dashboard"}>
                        DeshBoard
                      </Link>
                    </li>
                    <li
                      onClick={closeNav}
                      className="text-white text-md p-1 uppercase shadow-xl font-serif"
                    >
                      <Link href={"/components/login"} onClick={signOutUser}>
                        signOut
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="text-white text-md uppercase shadow-xl p-1 font-serif">
                    <Link onClick={closeNav} href={"/components/login"}>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost text-xl font-serif text-[#615956] md:text-left text-right">
            Fashion
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white p-1 rounded font-serif uppercase text-md mr-2 bg-[#615956]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-white p-1 rounded text-md mr-2 uppercase font-serif bg-[#615956]">
              <Link href={"/components/fashion"}>Fashion</Link>
            </li>
            <li className="text-white p-1 rounded text-md mr-2 uppercase font-serif bg-[#615956]">
              <Link href={"/components/beauty"}>Beauty</Link>
            </li>
            <li className="text-white p-1 rounded text-md mr-2 uppercase font-serif bg-[#615956]">
              <Link href={"/components/writeForUs"}>Write For Us</Link>
            </li>
            <li className="text-white p-1 rounded text-md mr-2 uppercase font-serif bg-[#615956]">
              <Link href={"/components/about"}>About</Link>
            </li>
            <li className="text-white p-1 rounded text-md mr-2 uppercase font-serif bg-[#615956]">
              <Link href={"/components/contact"}>Contact</Link>
            </li>
            {user && (
              <li className="text-white text-md p-1 mr-2 bg-[#615956] uppercase font-serif">
                <Link href={"/Dashboard"}>DeshBoard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal">
            {user ? (
              <>
                <li className="text-white text-md p-1 mr-2 bg-[#615956] uppercase font-serif">
                  <Link href={"/components/login"} onClick={signOutUser}>
                    signOut
                  </Link>
                </li>
              </>
            ) : (
              <li className="text-white text-lg mr-2 uppercase font-serif bg-[#615956]">
                <Link href={"/components/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
