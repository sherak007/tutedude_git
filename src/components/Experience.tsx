import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DevOps Engineer"
            subTitle="2ndbussinessconsulting - (2024 - 2025)"
            result="Remote"
            des="As a DevOps Engineer at 2ndBusinessConsulting, I focused on streamlining development processes, automating deployments, and ensuring the stability and scalability of infrastructure. By implementing CI/CD pipelines, monitoring systems, and cloud automation, I help bridge the gap between development and operations, fostering efficient collaboration and delivering robust software solutions"
          />

          <ResumeCard
            title="DevOps Track Lead"
            subTitle="Bytewise Limited - (2024 - 2024)"
            result="Remote"
            des="Led a team of DevOps fellow student, overseeing the design and implementation of CI/CD pipelines, infrastructure automation, and monitoring solutions. Collaborated with cross-functional teams to optimize development workflows, enhance system reliability, and drive continuous improvement initiatives."
          />
          <ResumeCard
            title="Machine Learning Intern"
            subTitle="Al-Khawarizmi Institute of Computer Science (2023)"
            result="Lahore"
            des="Worked on applying machine learning algorithms and data analysis techniques to solve real-world problems, enhancing my understanding of AI/ML models and their practical applications"
          />
          <ResumeCard
            title="Backend Developer"
            subTitle="Bytewise Limited - (2023)"
            result="Remote"
            des="Developed and maintained efficient backend systems, focusing on server-side logic, database management, and API integration to support dynamic and scalable applications."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Z-Tech Solution - (2022)"
            result="Afghanistan"
            des="Focused on building responsive and interactive web interfaces, utilizing modern frontend technologies to deliver seamless user experiences."
          />
          <ResumeCard
            title="Academic Manager"
            subTitle="Basharat Vocational Institute - (2020)"
            result="Afghanistan"
            des="Managed academic operations, curriculum development, and student engagement, fostering a conducive learning environment and ensuring academic excellence."
          />
          <ResumeCard
            title="English Language Trainer"
            subTitle="Latoon English Language Institute - (2019)"
            result="Afghanistan"
            des="Taught English language skills to students, focusing on grammar, vocabulary, and communication, enhancing their proficiency and confidence in the language."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Volunteer Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technial Writer"
            subTitle=" Medium (2023 - Present)"
            result="Remote"
            des="I write about AI, ML, DevOps, DevSecOps, System Design, Django, and other technologies. I have written over 100 articles on Medium and have over 200,000 views on my articles."
          />
          <ResumeCard
            title="GitHub Campus Expert"
            subTitle=" GitHub (2022 - Present)"
            result="Pakistan"
            des="A GitHub Campus Expert is a student leader who empowers their developer community by organizing events, workshops, and initiatives that promote open-source contributions, coding skills, and collaboration. They act as a bridge between GitHub and their campus, providing resources, support, and guidance to help fellow students succeed in tech and software development."
          />
          <ResumeCard
            title="Microsoft Learn Student Ambassador"
            subTitle="UET Lahore (2022 - Present)"
            result="Pakistan"
            des="Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future."
          />
          <ResumeCard
            title="Vice President"
            subTitle="ACM UET Lahore (2024 - Present)"
            result="Pakistan"
            des="As Vice President of ACM UET Lahore, I lead initiatives to promote computer science and technology on campus. I collaborate with fellow officers to organize events, workshops, and hackathons, fostering a vibrant tech community and helping students enhance their skills in programming, research, and innovation."
          />
            <ResumeCard
            title="Tech Speaker"
            subTitle="(2023 - Present)"
            des="I have delivered tech talks and workshops at various universities, conferences, and events, sharing my knowledge and experience in AI, ML, DevOps, and other tech topics. I aim to inspire and educate students, professionals, and tech enthusiasts, helping them stay updated with the latest trends and technologies in the industry."
          />
            <ResumeCard
            title="Vice Head IT Section"
            subTitle="Institute of Engineering and Technology (IET) (2023 - 2024)"
            result="UET Lahore"
            des="As Vice Head of the IT Section at IET, I managed a team of IT enthusiasts to develop and maintain the institute's website, manage online events, and provide technical support to students and faculty. I also organized workshops and training sessions to enhance IT skills and promote digital literacy among students."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
