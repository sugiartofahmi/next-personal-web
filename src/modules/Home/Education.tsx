import { Fragment } from "react";

const Education = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-bold">Education</h1>

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col">
          <h2 className="font-bold">Ruangguru Camp</h2>
          <p>Studi Independent(React)</p>
          <p className="text-sm">Aug 2022 - Dec 2022</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Nusantara Islamic University</h2>
          <p>Informatics Engineering</p>
          <p className="text-sm">Sep 2020 - Now</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Vocational High School 2 Baleendah</h2>
          <p>Computer and Network Engineering</p>
          <p className="text-sm">Jul 2017 - Jun 2020</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
