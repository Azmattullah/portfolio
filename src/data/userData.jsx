import { MdOutlineLoop, MdOutlineCloudSync, MdOutlineMonitorHeart, MdCode } from 'react-icons/md';

export const userData = {
    profile: {
        name: "Aditya Pratama",
        title: "DevOps | SRE | Cloud Engineer",
        email: "aditya@adityacprtm.dev",
        location: "Jakarta, ID",
        statusEmoji: "🍉",
        avatarUrl: "https://i.pravatar.cc/150?img=11",
    },
    about: {
        paragraphs: [
            "A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS for AWS Certified Cloud Practitioner.",
            "Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP, as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.",
            "With a Bachelor's degree in Computer Science and a strong GPA, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps, SRE and cloud engineering projects."
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
        { id: 1, name: "Transletin", color: "#6a35ff" },
        { id: 2, name: "Buangdisini", color: "#a0ff3c" }
    ],
    resume: {
        experience: [
            {
                id: 1,
                title: "Senior Cloud DevOps Engineer",
                date: "Jan 2024 - Present",
                subtitle: "Jakarta, Indonesia",
                descriptionPoints: [
                    "Build and continuously improve standard core infrastructure tooling, with challenges and Pythons, utilizing Docker and ECR on AWS, to optimize resource utilization.",
                    "Guarantee availability and performance while optimizing costs by 30% by implementing auto-scaling and ensuring smooth integrations with Cloud SLA.",
                    "Collaborate cross-functionally across products, utilizing software architecture patterns to reduce complex systems gap by migrating to microservices.",
                    "Spearhead infrastructure as code using Terraform, developing reusable code templates, integrating standard monitoring and secrets management into automated CI pipelines."
                ]
            },
            {
                id: 2,
                title: "Cloud DevOps Engineer (SRE)",
                date: "Jan 2022 - Aug 2023",
                subtitle: "Jakarta, Indonesia",
                descriptionPoints: [
                    "Provide technical support and solutions to developers, addressing complex infrastructure and scaling issues for mission-critical services.",
                    "Automated scaling systems on AWS EKS and ECS using CI/CD pipelines managed by GitHub Actions, significantly speeding up container deployments and improving developer team's CI turnaround time.",
                    "Create and maintain internal web apps to automate support processes that reduce manual effort by 40% and enhance service integration.",
                    "Configure real-time trace, logs, metrics routing across components with OpenTelemetry over Datadog, ensuring observability across platform and services.",
                    "Manage infrastructure and deployment on Google Cloud Platform, using Cloud Run, Pub/Sub, Cloud Storage, and Cloud SQL, to provide high availability systems."
                ]
            },
            {
                id: 3,
                title: "Junior Cloud DevOps Engineer",
                date: "May 2021 - Dec 2021",
                subtitle: "Jakarta, Indonesia",
                descriptionPoints: [
                    "Provide technical support while maintaining reliable auto-scaling features for scalable web applications.",
                    "Build and CI/CD pipelines to multiple environments with GitLab CI for API testing, serverless functions, and internal services.",
                    "Configure, develop, and maintain Linux servers to run core applications using Nginx, ensuring optimization and load balancing logic."
                ]
            },
            {
                id: 4,
                title: "Freelance Full Stack Developer",
                date: "Oct 2020 - Apr 2021",
                subtitle: "Remote",
                descriptionPoints: [
                    "Develop web applications utilizing Javascript tech stack (Vue.js, Express.js, Node.js) with PostgreSQL databases.",
                    "Design architecture and implement REST APIs."
                ]
            },
            {
                id: 5,
                title: "Information Technology Assistant (IT Support)",
                date: "Aug 2017 - Aug 2020",
                subtitle: "Bandar Lampung, Indonesia",
                descriptionPoints: [
                    "Assist staff with network and hardware issues. Repair computer malfunctions.",
                    "Deploy and configure internal domain servers and manage Active Directory."
                ]
            },
            {
                id: 6,
                title: "WiFi Installer / Network Engineer Intern",
                date: "Jan 2016 - Apr 2016",
                subtitle: "Lampung, Indonesia",
                descriptionPoints: [
                    "Perform pre-project surveys, design network topologies, and coordinate with clients for installations."
                ]
            }
        ],
        education: [
            {
                id: 1,
                title: "Universitas Teknokrat Indonesia",
                date: "Aug 2016 - Oct 2020",
                subtitle: "Bachelor's Degree in Computer Science (S.Kom)"
            },
            {
                id: 2,
                title: "SMK Negeri 5 Bandar Lampung",
                subtitle: "Computer and Network Engineering"
            },
            {
                id: 3,
                title: "SMP Negeri 1 Sidomulyo",
                subtitle: "Junior High School"
            }
        ],
        nonformalEducation: [
            {
                id: 1,
                title: "Dicoding - AWS",
                date: "Aug 2023 - Sep 2023 (176 hours)",
                subtitle: "Belajar Membangun Arsitektur Cloud AWS"
            },
            {
                id: 2,
                title: "Dicoding - IBM",
                date: "May 2023 - Jun 2023 (106 hours)",
                subtitle: "Menjadi Machine Learning Developer dengan IBM Watson"
            },
            {
                id: 3,
                title: "Dicoding - IDCamp",
                date: "Sep 2022 - Nov 2022 (70 hours)",
                subtitle: "Belajar Dasar Platform Cloud (Cloud Associate) dengan Google Cloud"
            },
            {
                id: 4,
                title: "Digitalent Scholarship 2022 by Kominfo",
                date: "May 2022 - Jun 2022 (120 hours)",
                subtitle: "Cloud Tech Internship (ClTI) - Google Cloud"
            }
        ],
        skills: [
            { id: 1, name: "Cloud Practitioner", percentage: 90 },
            { id: 2, name: "Cloud Architecture", percentage: 85 },
            { id: 3, name: "Containerization", percentage: 95 },
            { id: 4, name: "Continuous Integration", percentage: 90 },
            { id: 5, name: "Infrastructure & Ops", percentage: 85 },
            { id: 6, name: "Linux Administration", percentage: 95 },
            { id: 7, name: "CI/CD", percentage: 90 },
            { id: 8, name: "Git", percentage: 95 }
        ],
        codeSkills: [
            { id: 1, name: "Docker", percentage: 90 },
            { id: 2, name: "Kubernetes", percentage: 80 },
            { id: 3, name: "Node.js", percentage: 75 },
            { id: 4, name: "Python", percentage: 70 },
            { id: 5, name: "Bash Shell", percentage: 85 },
            { id: 6, name: "Terraform (IaC)", percentage: 80 },
            { id: 7, name: "React", percentage: 60 },
            { id: 8, name: "Vue.js", percentage: 65 },
            { id: 9, name: "Golang", percentage: 50 },
            { id: 10, name: "PostgreSQL", percentage: 75 }
        ]
    }
};
