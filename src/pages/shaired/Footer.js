import Link from "next/link";
import React from "react";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto shadow-xl bg-[#615956] mt-20">
        <footer className="footer text-white p-10">
          <nav>
            <h6 className="footer-title opacity-100">Services</h6>
            <a className="link link-hover">Fashion Blog</a>
            <a className="link link-hover">Beauty Blog</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title opacity-100">Company</h6>
            <Link href={"/components/about"}>About us</Link>

            <Link href={"/components/contact"}>Contact us</Link>

            <Link href={"/components/writeForUs"}>Write For Us</Link>
          </nav>
          <nav>
            <h6 className="footer-title opacity-100">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <FaTwitter className="text-3xl text-white" />
              <FaPinterest className="text-3xl text-red-500"/>
              <FaInstagram className="text-3xl text-red-500 bg-white rounded-xl"/>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
