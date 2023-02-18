const categories = [
  {
    title: "Entertainment",
    link: "",
  },
  {
    title: "Food",
    link: "",
  },
  {
    title: "Travel",
    link: "",
  },
  {
    title: "Sport",
    link: "",
  },
];

const Navigation = () => {
  return (
    <div className="flex justify-center space-x-60 my-10">
      <span className="uppercase  cursor-pointer">Blog</span>
      <ul className="list-none flex gap-x-12">
        {categories.map((category, index) => (
          <li
            className="cursor-pointer after:content-[*] hover:border-b-2 border-teal-500 scale-x-100 ease-in-out delay-100"
            key={index}
          >
            {category.title}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-10 uppercase">
        <div className="cursor-pointer"> Log in</div>
        <div className="cursor-pointer">Create an Account</div>
      </div>
    </div>
  );
};

export default Navigation;
