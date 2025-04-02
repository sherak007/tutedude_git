import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
    <FadeIn>
  <Title title="Features" des="What I Do" />
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
    <Card
      title="Consulting"
      des="Providing expert advice to optimize your business processes."
      icon={null}
    />
    <Card
      title="DevOps Services"
      des="Streamlining software delivery with automated pipelines and infrastructure."
      icon={<AiFillAppstore />}
    />
    <Card
      title="Full Stack Development"
      des="Building robust web applications from frontend to backend."
      icon={<SiProgress />}
    />
    <Card
      title="Mobile Development"
      des="We as a team creating seamless and responsive mobile applications for iOS and Android."
      icon={<FaMobile />}
    />
    <Card
      title="UX Design"
      des="Crafting intuitive and user-friendly digital experiences."
      icon={<SiAntdesign />}
    />
    <Card
      title="Hosting Websites"
      des="Offering reliable and scalable website hosting solutions."
      icon={<FaGlobe />}
    />
  </div>
</FadeIn>

    </section>
  );
};

export default Feature;
