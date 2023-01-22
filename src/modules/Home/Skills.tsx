import { Fragment } from "react";

const Skills = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-bold">Skills</h1>
      <div className="flex flex-row gap-x-2">
        <h2 className="text-blue-500 font-bold">HTML/CSS</h2>
        <h2 className="text-blue-500 font-bold">Javascript</h2>
        <h2 className="text-blue-500 font-bold">Typescript</h2>
      </div>
      <div className="flex flex-row gap-x-2">
        <h2 className="text-blue-500 font-bold">Astro</h2>
        <h2 className="text-blue-500 font-bold">Vue</h2>
        <h2 className="text-blue-500 font-bold">React</h2>
      </div>
      <div className="flex flex-row gap-x-2">
        <h2 className="text-blue-500 font-bold">Tailwind CSS</h2>
        <h2 className="text-blue-500 font-bold">Uno CSS</h2>
        <h2 className="text-blue-500 font-bold">Chakra UI</h2>
      </div>
      <div className="flex flex-row gap-x-2">
        <h2 className="text-blue-500 font-bold">Java</h2>
        <h2 className="text-blue-500 font-bold">Python</h2>
        <h2 className="text-blue-500 font-bold">C++</h2>
      </div>
    </Fragment>
  );
};

export default Skills;
