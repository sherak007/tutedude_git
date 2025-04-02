import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="UET Lahore (2021 - 2025)"
            result="Pakistan"
            des="At UET Lahore, I built a strong foundation in software engineering, focusing on full-stack development, object-oriented programming, DevOps, and AI/ML. Through hands-on projects, internships, and job experience, I gained expertise in coding, system design, and cloud technologies, preparing me for the evolving tech landscape."
          />
          <ResumeCard
            title="High School Diploma"
            subTitle="Hada High School (2008 - 2020)"
            result="Afghanistan"
            des="At Hada High School, I built a strong academic foundation, excelling in various subjects and developing critical thinking skills that prepared me for higher education. My time there helped shape my problem-solving abilities and fostered a passion for learning, which I carried forward into my future studies."
          />
        </div>
      </div>

      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DevOps Engineer"
            subTitle="2ndbussinessconsulting - (2024 - 2025)"
            result="Remote"
            des="As a DevOps Engineer at 2ndBusinessConsulting, I focus on streamlining development processes, automating deployments, and ensuring the stability and scalability of infrastructure. By implementing CI/CD pipelines, monitoring systems, and cloud automation, I help bridge the gap between development and operations, fostering efficient collaboration and delivering robust software solutions"
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
    </motion.div>
  );
};

export default Education;
