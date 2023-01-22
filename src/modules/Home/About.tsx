import { Fragment } from "react";
import { BsGithub, BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
const About = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-bold">About Me</h1>
      <p>
        Professional with 2 years experience in web development. Skilled in team
        collaboration, problem solving and project management
      </p>
      <h2 className="text-blue-500 font-bold text-base">
        sugiartofahmi@gmail.com
      </h2>
      <div className="flex fle-row gap-x-4 items-center">
        <a
          className="hover:scale-125 ease-in-out duration-300 transition"
          href="https://github.com/sugiartofahmi"
          target="_blank"
        >
          <BsGithub size={23} />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-300 transition"
          href="https://www.instagram.com/fahmisugiarto24"
          target="_blank"
        >
          <BsInstagram size={23} />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-300 transition"
          href="https://api.whatsapp.com/send?phone=6289643242453"
          target="_blank"
        >
          <BsWhatsapp size={23} />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-300 transition"
          href="https://www.linkedin.com/in/mohammad-nurfahmi-sugiarto-a2a8b0249/"
          target="_blank"
        >
          <BsLinkedin size={23} />
        </a>
      </div>
    </Fragment>
  );
};

export default About;
