import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  const navigationOptions = ["home", "poke", "form", "markdown", "table"];

  return (
    <div>
      <header className="bg-mainGrayLight flex justify-centerbasis-[1200px] px-6">
        <nav className="flex items-center h-16">
          <ul className="flex gap-2 h-10">
            {navigationOptions.map((item, index) => (
              <li key={index} className="">
                <NavLink
                  to={item === "home" ? "/" : `/${item}`}
                  className="px-4 h-full flex items-center hover:text-mainWhite duration-300 hover:bg-accentHover rounded-custom aria-[current=page]:bg-accent aria-[current=page]:text-mainWhite"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
