import { MdOutlineLoop, MdOutlineCloudSync, MdOutlineMonitorHeart, MdCode } from 'react-icons/md';
import profileImg from '../assets/images/profile-img.jpg';


export const userData = {
    profile: {
        name: "Md Azmattullah",
        title: "DevOps | SRE | Cloud Engineer",
        email: "azmattullah100@gmail.com",
        location: "Chennai, India",
        statusEmoji: "OPEN TO WORK",
        avatarUrl: profileImg,
    },
    about: {
        paragraphs: [
            "Results-driven DevOps Engineer with 3+ years of experience architecting and operating cloud-native infrastructure on AWS. I specialize in building scalable, secure, and highly available environments using EKS, ECS, EC2, S3, RDS, and CloudFront to support high-traffic production workloads, including OTT platforms serving thousands of daily active users.",

            "My expertise in Kubernetes orchestration, CI/CD automation with Jenkins and GitHub, Infrastructure as Code using Terraform and Ansible, and end-to-end monitoring with Prometheus, Grafana, and CloudWatch. I focus on optimizing deployment velocity, improving system reliability, and enhancing cost efficiency across cloud environments.",

            "I have successfully reduced deployment time by 30–40%, improved uptime to 99%, and strengthened incident response processes through proactive monitoring and structured root-cause analysis. With strong Linux, networking, and automation skills in Python and Bash, I collaborate closely with development teams to deliver stable, production-ready systems.",

            "I am committed to building resilient, automated, and scalable infrastructure that enables organizations to innovate with confidence."
        ]
    },
    services: [
        {
            id: 1,
            icon: <MdOutlineLoop />,
            title: "DevOps",
            description: "I enjoy to improve the speed and quality of delivery, automate and achieve CICD"
        },
        {
            id: 2,
            icon: <MdOutlineCloudSync />,
            title: "Cloud Engineer",
            description: "I enjoy design, secure and maintenance of an organization's cloud-based infrastructure and application"
        },
        {
            id: 3,
            icon: <MdOutlineMonitorHeart />,
            title: "SRE",
            description: "I curious the processes and tools that ensure the scalability, reliability and availability of software systems"
        },
        {
            id: 4,
            icon: <MdCode />,
            title: "Software Development",
            description: "I enjoy learning software development either for personal or specific purposes"
        }
    ],
    clients: [
        { id: 1, name: "Codezin", color: "#ffc400ff" },
        { id: 2, name: "Bestcast", color: "#ff3c3cff" }
    ],
    resume: {
        experience: [
            {
                id: 1,
                title: "DevOps Engineer at Bestcast IT Limited",
                date: "Oct 2024 - Present",
                subtitle: "Chennai, India",
                descriptionPoints: [
                    "Owned the design, deployment, and operations of a highly available AWS-based infrastructure (EKS, ECS, EC2, S3, RDS, CloudFront) supporting thousands of daily active users.",
                    "Built and maintained containerized CI/CD pipelines using Jenkins, Docker, and GitHub, reducing deployment time by ~30% and significantly lowering release failures.",
                    "Implemented Kubernetes (EKS) production workloads, handling rolling deployments, scaling policies, and environment isolation for stability.",
                    "Designed and enforced monitoring and alerting using CloudWatch, achieving 99% uptime and reducing average incident response time by ~30 minutes.",
                    "Actively participated in incident triage and root-cause analysis, ensuring fast recovery and continuous service availability for a customer-facing OTT platform."
                ]
            },
            {
                id: 2,
                title: "DevOps Engineer at Codezin Technology Solution Pvt. Ltd",
                date: "Feb 2023 - Sept 2024",
                subtitle: "Kolkata, India",
                descriptionPoints: [
                    "Performed server migration and infrastructure modernization, improving system performance, reliability, and resource utilization across production environments.",
                    "Designed and implemented end-to-end monitoring and alerting using Prometheus and Grafana, significantly reducing troubleshooting time during production incidents.",
                    "Supported CI/CD-driven deployments and worked closely with development teams to stabilize releases and reduce release cycle time by ~40%.",
                    "Diagnosed and resolved Linux, networking, and deployment-level issues in distributed environments, minimizing service disruption.",
                    "Contributed to operational best practices, including log analysis, performance tuning, and incident response support for business-critical systems."
                ]
            },
            {
                id: 3,
                title: "Python Developer Intern at Iniesta Webtech Solution Pvt. Ltd",
                date: "May 2021 - Dec 2021",
                subtitle: "Noida, India",
                descriptionPoints: [
                    "Developed a dynamic eCommerce application using Django, implementing features such as user authentication, product category, shopping cart.",
                    "Optimized database queries and improved application performance, resulting in a 25% reduction in page load times and enhanced user experience.",
                    "Collaborated with cross-functional teams to design and deploy new features, ensuring seamless integration with existing systems and adherence to best practices.",
                    "Implemented automated testing and continuous integration processes to ensure code quality and facilitate rapid deployment of updates and new features."
                ]
            }
        ],
        education: [
            {
                id: 1,
                title: "R.V.S. College of Engineering & Technology",
                date: "July 2019 - April 2023",
                subtitle: "Bachelor of Technology in Computer Science"
            },
            {
                id: 2,
                title: "Karim City College",
                date: "July 2017 - April 2019",
                subtitle: "Higher Secondary Education"
            }
        ],
        nonformalEducation: [
            {
                id: 1,
                title: "Dicoding MLOps",
                date: "Nov 2025 - Present",
                subtitle: "Belajar Membangun Arsitektur Cloud AWS"
            }
        ],
        skills: [
            { id: 1, name: "AWS Cloud", percentage: 90 },
            { id: 2, name: "Orchestration ", percentage: 75 },
            { id: 3, name: "Containerization", percentage: 80 },
            { id: 4, name: "Infrastructure & Ops", percentage: 80 },
            { id: 5, name: "Continuous Integration", percentage: 85 },
            { id: 6, name: "Linux Administration", percentage: 90 },
            { id: 7, name: "Monitoring & Logging", percentage: 85 },
            { id: 8, name: "Scripting & Automation", percentage: 80 }
        ],
        codeSkills: [
            { id: 1, name: "AWS", category: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { id: 2, name: "Kubernetes", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
            { id: 3, name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
            { id: 4, name: "Terraform", category: "Infrastructure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
            { id: 5, name: "Ansible", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
            { id: 6, name: "Python", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { id: 7, name: "Bash Shell", category: "Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
            { id: 7, name: "Linux", category: "Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
            { id: 3, name: "Jenkins", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
            { id: 7, name: "Git", category: "Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { id: 7, name: "GitHub", category: "Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
            { id: 7, name: "Prometheus", category: "Monitoring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
            { id: 7, name: "Grafana", category: "Monitoring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
            { id: 7, name: "ArgoCD", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg" },
            { id: 7, name: "Helm", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg" },
        ]
    }
};
