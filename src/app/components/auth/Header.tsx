import React from "react";
interface heading{
    name: string;
    subTitle: string;
}
const Header = (props:heading) => {
  return (
    <div className="mb-4">
          <h1 className="text-3xl sm:text-4xl text-start text-blue-600 font-bold mb-2">{props.name}</h1>
          <h2 className="text-sm sm:text-base text-start text-sky-500 mb-4">{props.subTitle}</h2>
        </div>
  );
};

export default Header;
