import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const categories = [
  {
    title: "Entertainment",
    link: "entertainment",
  },
  {
    title: "Food",
    link: "food",
  },
  {
    title: "Travel",
    link: "travel",
  },
  {
    title: "Sport",
    link: "sport",
  },
];

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-center space-x-60 my-10">
        <span className="uppercase  cursor-pointer">
          <Link to="/">Blog</Link>
        </span>
        <ul className="list-none flex gap-x-12">
          {categories.map((category, index) => (
            <li
              className="cursor-pointer after:content-[*] hover:border-b-2 border-teal-500 scale-x-100 ease-in-out delay-100"
              key={index}
            >
              <Link to={category.link}>{category.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-10 uppercase">
          <div className="cursor-pointer border-2 rounded-md border-teal-300 border-spacing-1">
            <Link to="/login">Log in</Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/signup">Create an Account</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
