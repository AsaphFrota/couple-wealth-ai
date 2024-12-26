import { MenuIcon } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-darkBg fixed top-0 w-full">
      <div className="px-4">
        <div className="container bg-darkBg mx-auto">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#FFE9C5,#500CB0)] blur-md left-5"></div>
              <Image
                className="relative mt-1 md-1 left-5"
                width={35}
                height={35}
                priority
                src="/logo-v2.svg"
                alt="logo"
                onClick={() => {
                  window.location.href = "/";
                }}
              />
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <MenuIcon className="text-white" />
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Updates
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Help
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Customers
              </a>
              <button
                className="bg-white py-2 px-4 rounded-lg text-black"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
