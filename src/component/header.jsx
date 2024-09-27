import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  ToolOutlined,
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
      <div>
        <Link to="/">
          <img
            src="../src/assets/logo.jpeg"
            alt="Logo"
            height={"60px"}
            width={"60px"}
            className="rounded-full object-contain"
          />
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
          <ul className="flex sm:gap-5">
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
                href="#about"
                className="hover:text-gray-300 flex gap-2 transition-colors duration-200"
              >
                {<SettingOutlined />}
                About
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
                Tools
              </a>
            </li>
          </ul>
        )}
      </div>
      <Drawer
        onClose={onClose}
        width={"70%"}
        className="offcanva"
        title="Unit Converter"
        open={open}
      >
        <div>
          <ul className="flex flex-col gap-10 sm:gap-4">
            <li>
              <a
                href="/"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Tools
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default MainHeader;
