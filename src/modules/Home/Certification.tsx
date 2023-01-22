import { Fragment } from "react";

const Certification = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-bold">Certification</h1>

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col">
          <a
            className="hover:scale-105 ease-in-out duration-200 transition"
            href="https://drive.google.com/file/d/1A4_pKxUs-AB6beS7p2uvLCFDYoWWdL8z/view"
            target="_blank"
          >
            <h2 className="font-bold">Studi Independen Ruangguru CAMP</h2>

            <p className="text-sm">
              In this program, learn about Front-End Developers using the react
            </p>
          </a>
        </div>
        <div className="flex flex-col">
          <a
            className="hover:scale-105 ease-in-out duration-200 transition"
            href="https://progate.com/course_certificate/7b5f2f4brinu0j"
            target="_blank"
          >
            <h2 className="font-bold">Course Git</h2>

            <p className="text-sm">Learn how git works</p>
          </a>
        </div>
        <div className="flex flex-col">
          <a
            className="hover:scale-105 ease-in-out duration-200 transition"
            href="https://progate.com/course_certificate/502ed64bqp1bu7"
            target="_blank"
          >
            <h2 className="font-bold">Course Command Line</h2>

            <p className="text-sm">
              Learn about the command line in powershell
            </p>
          </a>
        </div>
        <div className="flex flex-col">
          <a
            className="hover:scale-105 ease-in-out duration-200 transition"
            href="https://progate.com/course_certificate/0a304f7cqhxj0c"
            target="_blank"
          >
            <h2 className="font-bold">Course HTML & CSS</h2>

            <p className="text-sm">HTML & CSS fundamentals course</p>
          </a>
        </div>
        <div className="flex flex-col">
          <a
            className="hover:scale-105 ease-in-out duration-200 transition"
            href="https://drive.google.com/file/d/1qkU9JavG2AEWKQcucm7LgeXhXc3s7bHA/view"
            target="_blank"
          >
            <h2 className="font-bold">Cisco Certified Network Associate</h2>

            <p className="text-sm">CCNA V7 Certification</p>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Certification;
