import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from "../Link/Link";
import { useState } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/pricing", name: "Pricing" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <IoMenu className="text-3xl" />
        )}
      </div>
      <ul className="md:flex absolute bg-white border-gray-100 border shadow-xl rounded-xl p-3">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar2;
