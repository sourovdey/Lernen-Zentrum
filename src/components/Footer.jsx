import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../assets/Lernen_Zentrum_logo.svg";

export default function Footer() {
  const policyLinks = [
    { name: "Contact", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-slate-50 text-gray-800 border-t border-gray-300">
      <div className="container mx-auto px-4 py-8">

        {/* Logo + Founder */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-10 w-auto mb-2" />
            {/* <p className="text-sm">
              Founder: Sumit Saha - Official Website:{" "}
              <a href="https://sumitsaha.me" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                sumitsaha.me
              </a>
            </p> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-purple-500 hover:text-purple-700"><FaFacebookF /></a>
            <a href="#" className="text-purple-500 hover:text-purple-700"><FaInstagram /></a>
            <a href="#" className="text-purple-500 hover:text-purple-700"><FaYoutube /></a>
            <a href="#" className="text-purple-500 hover:text-purple-700"><FaLinkedin /></a>
            <a href="#" className="text-purple-500 hover:text-purple-700"><FaGithub /></a>
          </div>
        </div>

        {/* Bottom Section: Policies + Copyright */}
        <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center text-xs text-gray-500 text-center md:text-left">
          <p className="mb-2 md:mb-0">Copyright © 2026 Lernen Zentrum. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {policyLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gray-700">
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}