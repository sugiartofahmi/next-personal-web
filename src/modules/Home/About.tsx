import { Fragment } from "react";
import { BsGithub, BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
const About = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-bold">About Me</h1>
      <p>
        I am a student pursuing a degree in technology. I have experience in web
        programming, especially in front-end development using HTML, CSS and
        JavaScript. I also have skills in using frameworks like React and Vue. I
        am very interested in doing an internship in front-end web development
        and am confident that I can add positive value to the company.
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
          href="https://www.instagram.com/mnfs.dev"
          target="_blank"
        >
          <BsInstagram size={23} />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-300 transition"
          href="https://api.whatsapp.com/send?phone=6285172470353"
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
