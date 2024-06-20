
interface NavProps {
  label: string;
}

export const NavItem = (props: NavProps) => {
  return (
    <>
      <li className="font-semibold text-primary-500 text-sm sm:text-lg lg:text-2xl hover:text-gray-400 transition ease-in-out duration-300 ">
        <a href="#">{props?.label}</a>
      </li>
    </>
  );
};
