import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
function Footer() {
  return (
    <footer className="bg-[#1a2533] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center flex-wrap gap-8">
          {/* Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-blue-400">
                  Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<FacebookOutlined />}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<TwitterOutlined />}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<InstagramOutlined />}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Online Unit Converter. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
