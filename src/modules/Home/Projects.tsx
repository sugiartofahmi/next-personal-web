import { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="flex flex-col md:flex-row gap-x-5 gap-y-5">
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-himatif.png"
            alt="HIMATIF"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">HIMATIF</h2>
            <p>Create an organization website</p>
          </div>
        </div>
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-survey.png"
            alt="Survey Form"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">Survey Form</h2>
            <p>Create a talent interest survey website</p>
          </div>
        </div>
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img className="" src="src/assets/image/project-icc.png" alt="ICC" />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">Informatics Coding Camp</h2>
            <p>Create a training registration website</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-5 gap-y-5">
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-votsu.jpeg"
            alt="VOTING"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">Voting</h2>
            <p>Create a voting website</p>
          </div>
        </div>
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-makrab.jpeg"
            alt="Makrab"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">MAKRAB</h2>
            <p>create an event registration website</p>
          </div>
        </div>
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-adhoc.png"
            alt="ADHOC"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">ADHOC</h2>
            <p>Create an organization head registration website</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-5 gap-y-5">
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-taskxu.jpeg"
            alt="TASKXU"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">TASKXU</h2>
            <p>Create an assignment collection website</p>
          </div>
        </div>
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-makrab.jpeg"
            alt="Makrab"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">MAKRAB</h2>
            <p>create an event registration website</p>
          </div>
        </div>
        <div className="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer">
          <img
            className=""
            src="src/assets/image/project-adhoc.png"
            alt="ADHOC"
          />
          <div className="px-3 py-3">
            <h2 className="font-bold text-base">ADHOC</h2>
            <p>Create an organization head registration website</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
