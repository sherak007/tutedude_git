import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {
  project1,
  projectThree,
  projectTwo,
  projectFour,
  projectFive,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
} from "../assets";
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
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Machine Learning Projects"
            des="Here you will find a collection of my machine learning projects ranging from regression models to neural networks. Each project explores different aspects of machine learning algorithms, along with practical examples and visualization techniques."
            src={project1}
            githubLink="https://github.com/samsorrahman/Machine-Learning-Projects"
          />
          <ProjectsCard
            title="End to End DevSecOps CICD Pipeline"
            des="I deployed using a DevSecOps approach, integrating GitHub, Jenkins for CI/CD, and Docker for containerization. I handled scaling with Kubernetes and ensured security with SonarQube, Trivy, and OWASP Dependency Check. I also implemented monitoring with Prometheus, Grafana, and Node Exporter for real-time performance tracking and system health."
            src={projectTwo}
            githubLink="https://towardsaws.com/day-89-90daysofdevops-end-to-end-devsecops-kubernetes-project-using-aws-jenkins-cicd-pipeline-5d0f143606f4"
          />
          <ProjectsCard
            title="Multi-Tier Microservices Deployment on AWS EKS"
            des="Automated CI/CD with Jenkins, deployed containerized microservices on Amazon EKS, and used Kubernetes for orchestration. Managed services efficiently and monitored system health with Prometheus and Grafana."
            src={projectThree}
            githubLink="https://medium.com/@samsorrahman/10-tier-application-deployment-on-aws-eks-a8a8abcd46dd"
          />

          <ProjectsCard
            title="End-to-end GitOps Project using AWS EKS & Argo CD"
            des="Developed an end-to-end GitOps pipeline using AWS EKS and ArgoCD. Built and optimized Docker images for reduced size and enhanced security. Deployed Kubernetes manifests, services, and ingress controllers with load balancer configuration. Implemented CI using GitHub Actions and CD with GitOps workflow via ArgoCD. Leveraged Helm charts for Kubernetes packaging and automated deployment management across the EKS cluster"
            src={projectFour}
            githubLink="https://github.com/samsorrahman/Deploying-Golang"
          />

          <ProjectsCard
            title="Automated Kubernetes Cluster Security with Kyverno and ArgoCD"
            des="Implemented automated policy enforcement, governance, and compliance across Kubernetes clusters using Kyverno Policy Generator and ArgoCD. Ensured security through the automatic generation of network policies, validation of image tags, and mutation of pod security policies. Verified the integrity of container images, ensuring compliance and security standards across cloud (AWS, Azure, GCP) and on-premises environments."
            src={projectFive}
            githubLink="https://medium.com/@samsorrahman/10-tier-application-deployment-on-aws-eks-a8a8abcd46dd"
          />

          <ProjectsCard
            title="DevSecOps End-to-End Project"
            des=" End-to-End DevSecOps Kubernetes Project guide! In this comprehensive project, I will walk through the process of setting up a robust Three-Tier architecture on AWS using Kubernetes, DevOps best practices, and security measures. This project aims to provide hands-on experience in deploying, securing, and monitoring a scalable application environment."
            src={project6}
            githubLink="https://github.com/samsorrahman/DevSecOps-CICD-Deployment"
          />

          <ProjectsCard
            title="GreatKart Full-Stack eCommerce App"
            des="GreatKart is an eCommerce app built with Django, featuring a custom user model, product categories, carts with add/remove functionality, order processing, and payments. It includes a product gallery, reviews and half-star ratings, customer account management for profiles and orders, and post-order features like email notifications, cart clearing, and invoice generation."
            src={project7}
            githubLink="https://github.com/samsorrahman/greatkart-django"
          />

          <ProjectsCard
            title="DevSearch Developer Platform"
            des=" DevSearch is a developer-focused platform where users can create, update, and delete profiles, upload resumes, and showcase projects. Developers can also write blogs and connect with others in the community, fostering collaboration and networking opportunities."
            src={project8}
            githubLink="https://github.com/samsorrahman/DEV-Search-Blog"
          />

          <ProjectsCard
            title="Microservices-Python-Docker-Kubernetes-MongoDB-MySql-and-RabbitMQ"
            des="This project combines the power of React, Django, Flask, MySQL, and RabbitMQ to create a microservices-based web application. The frontend, built with React, provides a user-friendly interface for interacting with the application. It consumes a Django REST API, which serves as the backend for handling CRUD operations and managing the underlying database."
            src={project9}
            githubLink="https://github.com/samsorrahman/Microservices-Python-Django-Flask-React-Docker"
          />

<ProjectsCard
            title="Banking-System"
            des="Banking System (Django): Built a banking application with Django featuring account creation, KYC verification, secure user authentication, and payment processing. Users can manage virtual credit/debit cards, send and receive money, and perform transactions between accounts and cards. Focused on business logic and practical challenges, gaining foundational Django skills for junior developer roles."
            src={project10}
            githubLink="https://github.com/samsorrahman/Banking-System?tab=readme-ov-file"
          />

<ProjectsCard
            title="Multi-Vender-Restaurant (Sell-Order-Receive)"
            des="Developed a multi-vendor platform using Django and PostgreSQL, featuring location-based search for nearby restaurants, cart functionality with AJAX, and payment integration with RazorPay and PayPal. Implemented vendor registration, approval, and dashboards, along with dynamic business hours and tax modules. Built CRUD functionalities for restaurant menus, and integrated Google Autocomplete for location. Enhanced user experience with custom validators, email templates, and responsive design for mobile. Added post-order functionalities like email notifications and order tracking."
            src={project11}
            githubLink="https://github.com/samsorrahman/Multi-Vender-Restaurant"
          />

<ProjectsCard
            title="DRF API built with Multi Stage Docker,NGINX,Redis,Portainer and more"
            des="Developed a robust Django application utilizing Docker for containerization alongside Celery and Redis for asynchronous task management. Integrated NGINX as a reverse proxy and secured the API with HTTPS using SSL certificates from Let's Encrypt. Implemented API testing with Pytest and managed multiple containers using Portainer. Automated processes with shell scripts, logged activities in Django, and handled email services with Mailgun and Mailhog. Included searching capabilities with Elasticsearch and ensured test coverage with Python's coverage tool."
            src={project12}
            githubLink="https://github.com/samsorrahman/Advance-Backend-Blogging-with-DRF"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
