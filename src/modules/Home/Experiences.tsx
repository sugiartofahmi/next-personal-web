import { Fragment } from "react";

const Experiences = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-bold">Experiences</h1>

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col">
          <h2 className="font-bold">PT. Ruang Raya Indonesia</h2>
          <p className="text-sm">Asisten Mentor</p>
          <ul className="list-disc ml-5">
            <li>Help students to re-understand previous learning</li>
            <li>Fixed a bug that students found when creating a website</li>
            <li>Give tests to students to find out their understanding</li>
            <li>Make student progress reports</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Nusantara Islamic University</h2>
          <p className="text-sm">Lab Assistant</p>
          <ul className="list-disc ml-5">
            <li>Explain the learning material before practice</li>
            <li>Practicing the demo before the practicum implementation</li>
            <li>Supervise during practicum activities</li>
            <li>Provide an assessment during the practicum</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">PT. Dirgantara Indonesia</h2>
          <p className="text-sm">Technical IT Support</p>
          <ul className="list-disc ml-5">
            <li>Ensure that all computers used by the user can be used</li>
            <li>Assembling a network in a new room</li>
            <li>Install and configure antivirus for computer security</li>
            <li>
              Ensure that supporting systems such as printers and scanners can
              operate
            </li>
            <li>Repair a broken user's computer</li>
            <li>Make sure all computers are connected to the network</li>
            <li>
              Ensure that the application used by the user can run as it should
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Experiences;
