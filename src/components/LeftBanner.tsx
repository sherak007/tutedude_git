import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaMedium, FaLinkedinIn, } from "react-icons/fa";
import { SiJenkins, SiKubernetes, SiTerraform, SiAmazonaws } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Cloud & DevSecOps Engineer.", "Goal Driven Individual & Mentor.", "Campus Expert @github.", "Preparing CKA, CKAD, CKS."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Samsor Rahman 
          <img 
        src="https://cdn.countryflags.com/thumbs/afghanistan/flag-400.png" 
        alt="Afghanistan Flag" 
        style={{ width: "24px", height: "24px", marginLeft: "8px", display: "inline-block" }} 
      />
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        DevOps Engineer with a passion for automating processes, optimizing CI/CD pipelines, and deploying scalable cloud solutions. I focus on improving collaboration,
         enhancing performance, and ensuring secure, reliable systems for faster software delivery.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://medium.com/@samsorrahman" target="_blank">
              <span className="bannerIcon">
                <FaMedium />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/samsor-rahman18/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/samsorrahman" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <SiJenkins />
            </span>
            <span className="bannerIcon">
            <SiKubernetes />
            </span>
            <span className="bannerIcon">
            <SiTerraform />
            </span>
            <span className="bannerIcon">
            <SiAmazonaws />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
