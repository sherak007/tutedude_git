import Title from "./Title";
import ResumeImage from "./ResumeImage";
import { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, picture13 } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="MY TALKS & WORKSHOPS"
            des="My Talks Vibes"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ResumeImage src={pic1} />
          <ResumeImage src={pic2} />
          <ResumeImage src={pic3} />
          <ResumeImage src={pic4} />
          <ResumeImage src={pic5} />
          <ResumeImage src={pic6} />

          <ResumeImage src={pic8} />

          <ResumeImage src={pic7} />
          <ResumeImage src={picture13} />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
