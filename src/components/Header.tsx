
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="fixed z-10 top-0 w-full text-gray-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold">GMBHUTTO.</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
