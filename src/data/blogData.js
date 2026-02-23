import projectThumbnail from '../assets/images/project_thumbnail.png';

export const blogData = [
  {
    id: 1,
    title: "Connecting AWS to GCP: A Comprehensive Guide to Site-to-Site VPN",
    date: { day: "1", month: "Oct", year: "2023" },
    excerpt: "With the rise of multi-cloud strategies, more and more organizations are operating in environments where they deploy resources across multiple cloud providers.",
    image: projectThumbnail,
    series: "AWS Projects",
    content: `
      <p>With the rise of multi-cloud strategies, more and more organizations are operating in environments where they deploy resources across multiple cloud providers. This trend necessitates secure and efficient communication between resources located in different cloud platforms. In this post, we'll walk you through setting up a Site-to-Site VPN connection between Amazon Web Services (AWS) and Google Cloud Platform (GCP), allowing resources in both clouds to communicate with each other securely over the internet.</p>
      
      <h3>What is a Site-to-Site VPN?</h3>
      <p>A Site-to-Site Virtual Private Network (VPN) is a connection that helps in bridging two networks in different locations over the internet in a secure manner. Traffic is encrypted on one end and decrypted on the other, ensuring data confidentiality and integrity between the two sites.</p>
      
      <h3>Prerequisites:</h3>
      <ul>
        <li>Active AWS and GCP accounts</li>
        <li>Basic understanding of VPC in AWS and GCP</li>
      </ul>
      
      <h3>Steps to Establish a Site-to-Site VPN between AWS and GCP:</h3>
      <p><strong>1. AWS Setup:</strong></p>
      <ul>
        <li><strong>Virtual Private Gateway (VPG):</strong>
          <ul>
            <li>Navigate to the VPC Dashboard.</li>
            <li>Create a Virtual Private Gateway and attach it to the desired VPC.</li>
          </ul>
        </li>
        <li><strong>Customer Gateway (CGW):</strong>
          <ul>
            <li>For the IP, you'll need the external IP address of the GCP VPN.</li>
            <li>Create a new Customer Gateway with the GCP VPN's IP.</li>
          </ul>
        </li>
        <li><strong>Site-to-Site VPN Connection:</strong>
          <ul>
            <li>Create a new VPN connection. Choose the previously created VPG and CGW.</li>
            <li>Note the Tunnel details, especially the shared keys and IP addresses.</li>
          </ul>
        </li>
      </ul>

      <p><strong>2. GCP Setup:</strong></p>
      <ul>
        <li><strong>Cloud Router and VPN:</strong>
          <ul>
            <li>Go to the Hybrid Connectivity section in GCP.</li>
            <li>Create a Cloud Router.</li>
            <li>Create a VPN, linking it to the previously created Cloud Router.</li>
            <li>Under the Tunnels section, use the AWS Tunnel details. Ensure that IKE version, shared secrets, and traffic selectors match with AWS settings.</li>
          </ul>
        </li>
      </ul>

      <h3>Benefits:</h3>
      <ol>
        <li><strong>Security:</strong> Data is encrypted end-to-end.</li>
        <li><strong>Flexibility:</strong> Resources in both AWS and GCP can communicate seamlessly.</li>
        <li><strong>Cost-Effective:</strong> Reduces the need for dedicated, physical connections.</li>
      </ol>

      <h3>Conclusion:</h3>
      <p>Connecting AWS to GCP using a Site-to-Site VPN establishes a secure, private connection between the two cloud platforms. This guide provides a basic understanding of setting up this connection, but real-world scenarios might require additional configurations.</p>
    `
  },
  {
    id: 2,
    title: "Docker Swarm in GCP",
    date: { day: "25", month: "Aug", year: "2023" },
    excerpt: "This represents how the process I learned about Docker Swarm.",
    image: projectThumbnail,
    series: "Docker Projects",
    content: "<p>This is a placeholder for the Docker Swarm post content.</p>"
  }
  // {
  //   id: 3,
  //   title: "Post Deployment: Monitoring and Error Tracking",
  //   date: { day: "25", month: "Aug", year: "2023" },
  //   excerpt: "For status monitoring of applications (built with frontend and backend) I use the Status Pages from...",
  //   image: projectThumbnail,
  //   series: "Monitoring",
  //   content: "<p>This is a placeholder for the monitoring post content.</p>"
  // },
  // {
  //   id: 4,
  //   title: "Database Setup: MongoDB",
  //   date: { day: "22", month: "Aug", year: "2023" },
  //   excerpt: "Strapi currently supports several databases, one of which is MongoDB. Apart from MongoDB, Strapi is...",
  //   image: projectThumbnail,
  //   series: "Database",
  //   content: "<p>This is a placeholder for the database setup post content.</p>"
  // },
  // {
  //   id: 5,
  //   title: "Vue Setup: Design, Plugins and Deploy",
  //   date: { day: "19", month: "Aug", year: "2023" },
  //   excerpt: "How I Setup Design, Plugin and Deploy.",
  //   image: projectThumbnail,
  //   series: "Frontend",
  //   content: "<p>This is a placeholder for the Vue setup post content.</p>"
  // },
  // {
  //   id: 6,
  //   title: "Strapi Setup: Customize Response API",
  //   date: { day: "19", month: "Aug", year: "2023" },
  //   excerpt: "Here I share how to customize the response from the API. By default the responses given, but there ar...",
  //   image: projectThumbnail,
  //   series: "Backend",
  //   content: "<p>This is a placeholder for the Strapi API customization post content.</p>"
  // }
];
