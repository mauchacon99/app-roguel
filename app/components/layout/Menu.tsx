import { NavItem } from "./NavItem";

interface MenuI {
  label: string;
}

const Menu = () => {
  const menu: MenuI[] = [
    {
      label: "Home",
    },
    {
      label: "Service",
    },
    {
      label: "Contact",
    },
    {
      label: "About",
    },
  ];

  return menu.map((item, index) => <NavItem key={index} {...item} />);
};

export default Menu;
