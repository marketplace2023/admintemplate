import React, { useState } from "react";
import Link from "next/link";
import { AiFillEnvironment } from "react-icons/ai";
import {
  BsSearch,
  BsArrowLeftShort,
  BsChevronDown,
  BsGrid1X2,
} from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { BiPurchaseTag } from "react-icons/bi";

interface SubmenuItem {
  title: string;
  href: string;
  submenu?: boolean;
  submenuItems?: SubmenuItem[];
  toggleSubmenu?: () => void;
}

interface MenuItem {
  title: string;
  icon?: JSX.Element;
  href: string;
  submenu: boolean;
  submenuItems: SubmenuItem[];
  toggleSubmenu: () => void;
}

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [Menus, setMenus] = useState<MenuItem[]>([
    {
      title: "Home",
      icon: <IoHomeOutline />,
      href: "/",
      submenu: false,
      submenuItems: [],
      toggleSubmenu: () => {},
    },
    {
      title: "Modulo de Usuarios",
      icon: <HiOutlineUsers />,
      href: "/ModuloUsuarios",
      submenu: true,
      submenuItems: [
        {
          title: "Procesos",
          href: "/ModuloUsuarios/Procesos",
          submenu: true,
          submenuItems: [
            {
              title: "Gestión de Usuarios",
              href: "/ModuloUsuarios/Procesos/gestiondeusuarios",
            },
            {
              title: "Gestión de Grupos de Usuarios",
              href: "/ModuloUsuarios/Procesos/group-management",
            },
          ],
          toggleSubmenu: () => handleSubmenuToggle([1, 0]),
        },
        {
          title: "Ajustes",
          href: "/ModuloUsuarios/Settings",
          submenu: true,
          submenuItems: [
            { title: "Ajuste 1", href: "/ModuloUsuarios/Settings/setting-1" },
            { title: "Ajuste 2", href: "/ModuloUsuarios/Settings/setting-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([1, 1]),
        },
        {
          title: "Reportes",
          href: "/ModuloUsuarios/Reports",
          submenu: true,
          submenuItems: [
            { title: "Reporte 1", href: "/ModuloUsuarios/Reports/report-1" },
            { title: "Reporte 2", href: "/ModuloUsuarios/Reports/report-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([1, 2]),
        },
      ],
      toggleSubmenu: () => handleSubmenuToggle([1]),
    },
    {
      title: "Modulo de Productos",
      icon: <BsGrid1X2 />,
      href: "/products",
      submenu: true,
      submenuItems: [
        {
          title: "Procesos",
          href: "/products/processes",
          submenu: true,
          submenuItems: [
            { title: "Subproceso 1", href: "/products/processes/subprocess-1" },
            { title: "Subproceso 2", href: "/products/processes/subprocess-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([2, 0]),
        },
        {
          title: "Ajustes",
          href: "/products/settings",
          submenu: true,
          submenuItems: [
            { title: "Ajuste 1", href: "/products/settings/setting-1" },
            { title: "Ajuste 2", href: "/products/settings/setting-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([2, 1]),
        },
        {
          title: "Reportes",
          href: "/products/reports",
          submenu: true,
          submenuItems: [
            { title: "Reporte 1", href: "/products/reports/report-1" },
            { title: "Reporte 2", href: "/products/reports/report-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([2, 2]),
        },
      ],
      toggleSubmenu: () => handleSubmenuToggle([2]),
    },
    {
      title: "Modulo de Ventas",
      icon: <BiPurchaseTag />,
      href: "/sales",
      submenu: true,
      submenuItems: [
        {
          title: "Procesos",
          href: "/sales/processes",
          submenu: true,
          submenuItems: [
            { title: "Subproceso 1", href: "/sales/processes/subprocess-1" },
            { title: "Subproceso 2", href: "/sales/processes/subprocess-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([3, 0]),
        },
        {
          title: "Ajustes",
          href: "/sales/settings",
          submenu: true,
          submenuItems: [
            { title: "Ajuste 1", href: "/sales/settings/setting-1" },
            { title: "Ajuste 2", href: "/sales/settings/setting-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([3, 1]),
        },
        {
          title: "Reportes",
          href: "/sales/reports",
          submenu: true,
          submenuItems: [
            { title: "Reporte 1", href: "/sales/reports/report-1" },
            { title: "Reporte 2", href: "/sales/reports/report-2" },
          ],
          toggleSubmenu: () => handleSubmenuToggle([3, 2]),
        },
      ],
      toggleSubmenu: () => handleSubmenuToggle([3]),
    },
  ]);

  const handleSubmenuToggle = (index: number[]) => {
    const updateSubmenu = (items: SubmenuItem[], idx: number[]) => {
      if (idx.length === 1) {
        items[idx[0]].submenu = !items[idx[0]].submenu;
      } else {
        const [first, ...rest] = idx;
        updateSubmenu(items[first].submenuItems!, rest);
      }
    };

    const newMenus = [...Menus];
    updateSubmenu(newMenus, index);
    setMenus(newMenus);
  };

  return (
    <div
      className={`bg-white h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-500 relative`}
    >
      <BsArrowLeftShort
        className={`text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <AiFillEnvironment
          className={`text-dark-purple text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-black origin-left font-medium text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          ERP Admin
        </h1>
      </div>

      <div
        className={`flex items-center rounded-md bg-gray-100 mt-6 ${
          !open ? "px-2.5" : "px-4"
        } py-2`}
      >
        <BsSearch
          className={`text-dark-purple text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-black focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu, menuIndex) => (
          <React.Fragment key={menuIndex}>
            <li
              className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md mt-2`}
              onClick={() => menu.toggleSubmenu()}
            >
              <span className="text-2xl block float-left">{menu.icon}</span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.submenu && open && (
                <BsChevronDown className={`rotate-180`} />
              )}
            </li>
            {menu.submenu && open && (
              <ul>
                {menu.submenuItems.map((submenuItem, submenuIndex) => (
                  <React.Fragment key={submenuIndex}>
                    <li
                      className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-200 rounded-md"
                      onClick={() => submenuItem.toggleSubmenu?.()}
                    >
                      <Link href={submenuItem.href}>{submenuItem.title}</Link>
                    </li>
                    {submenuItem.submenu && submenuItem.submenuItems && (
                      <ul>
                        {submenuItem.submenuItems.map(
                          (subSubmenuItem, subSubmenuIndex) => (
                            <li
                              key={subSubmenuIndex}
                              className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-10 hover:bg-gray-200 rounded-md"
                            >
                              <Link href={subSubmenuItem.href}>
                                {subSubmenuItem.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
