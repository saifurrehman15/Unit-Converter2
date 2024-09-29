import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import image from "../assets/logo.jpeg";

import {
  MenuOutlined,
  HomeOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  ToolOutlined,
  MessageOutlined,
} from "@ant-design/icons";
function MainHeader() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#001529]   w-full h-20 header flex items-center p-4 sm:p-8 justify-between text-white fixed top-0 z-10">
      <div className="flex items-center p-2  sm:p-4">
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform transform hover:scale-105"
        >
          <img
            src={image}
            alt="Logo"
            height={"60px"}
            width={"60px"}
            className="rounded object-cover"
          />
          Unitify
        </Link>
      </div>

      <div>
        {screen.width < 768 ? (
          <span
            className="bg-transparent p-4 text-xl outline-none border-none hover:outline-none border-none"
            onClick={showDrawer}
          >
            {<MenuOutlined />}
          </span>
        ) : (
          <ul className="flex sm:gap-5 pe-8">
            <li>
              <a
                href="/"
                className="hover:text-gray-300 flex gap-2 transition-colors duration-200"
              >
                {<HomeOutlined />}
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-gray-300 flex gap-2 transition-colors duration-200"
              >
                {<CustomerServiceOutlined />}
                Services
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="hover:text-gray-300 flex gap-2 transition-colors duration-200"
              >
                {<ToolOutlined />}
                Conversion Tool
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 flex gap-2 transition-colors duration-200"
              >
                {<SettingOutlined />}
                About
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-gray-300 flex gap-2 transition-colors duration-200"
              >
                {<MessageOutlined />}
                Reviews
              </a>
            </li>
          </ul>
        )}
      </div>
      <Drawer
        onClose={onClose}
        width={"70%"}
        title="Unit Converter"
        open={open}
        className="offcanva"
        maskClosable={true} // allows closing by clicking outside
      >
        <div>
          <ul className="flex flex-col gap-10 sm:gap-4">
            <li onClick={() => setOpen(false)}>
              <a
                href="/"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </a>
            </li>

            <li onClick={() => setOpen(false)}>
              <a
                href="#services"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a
                href="#tools"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Conversion Tool
              </a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a
                href="#reviews"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Reviews
              </a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default MainHeader;
