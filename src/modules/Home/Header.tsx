import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <img
        width="100"
        className="rounded-lg border-solid border-2 border-gray-400 drop-shadow-lg"
        src="src/assets/image/my-foto.jpg"
        alt="My Foto"
      />
      <h1 className="text-xl font-bold">Mohammad Nurfahmi Sugiarto</h1>
      <p>Junior Web Developer</p>
      <div>
        <button className="hover:scale-105 ease-in-out duration-300 transition text-base py-2 px-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-green-400">
          Download CV
        </button>
      </div>
    </Fragment>
  );
};

export default Header;
