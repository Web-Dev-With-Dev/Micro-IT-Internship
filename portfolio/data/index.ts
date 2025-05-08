import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a New animated 3D PROJECTs",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Ruby Cube Solver Simulation",
    title2: "NOT YET PUBLISHED",
    des: "Interactive 3D simulation that visualizes and solves a Ruby Cube puzzle step-by-step in real time.",
    img: "/p11.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "Not Yet Published",
  },
  {
    id: 2,
    title: "Packaging Manager For Long Trips",
    title2: "pack-together.vercel.app/",
    des: "A web app to help users efficiently organize and manage packing for extended trips.",
    img: "/p22.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://pack-together.vercel.app/",
  },
  {
    id: 3,
    title: "Animated Spotify Music Player",
    title2: "NOT YET PUBLISHED",
    des: "A sleek and modern animated music player that showcases Spotify's API integration.",
    img: "/p33.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "Not Yet Published",
  },
  {
    id: 4,
    title: "Ai-Powered Fraud Detection System",
    title2: "NOT YET PUBLISHED",
    des: "A web application that uses AI algorithms to detect and prevent fraudulent activities in real-time.",
    img: "/p44.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "Not Yet Published",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Dev was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dev's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dev is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with Dev exceeded all our expectations. From the initial concept to the final product, his attention to detail and clear communication made the process seamless. Dev brought our vision to life with creativity and precision.",
    name: "Sarah Mitchell",
    title: "Founder of BrightNest Studio" ,
  },
  {
    quote:
     "Dev is a rare find in the tech world—skilled, responsive, and genuinely invested in his clients' success. His ability to translate our business needs into an elegant, high-performing site was remarkable.",
    name: "James Thornton",
    title: "COO at NexaCore Solutions",
  },
  {
    quote:
     "From start to finish, Dev demonstrated a deep understanding of user experience and design strategy. His collaborative approach and technical expertise made a major impact on our brand's online presence.",
    name: "Emily Reyes",
    title: "Marketing Lead, Veridian Co.",
  },
  {
    quote:
     "Dev took our outdated site and turned it into a modern, fast, and user-friendly platform. His insight, professionalism, and commitment to quality were apparent in every step of the project. Highly recommended!",
    name: "Brian Carter",
    title: "CEO, Elevate Digital Group",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Dev – JSM Tech",
    desc: "Designed and developed responsive web applications using React.js, ensuring performance across various devices.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the development of a client web project, from initial concept to deployment on the web.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Web-Dev-With-Dev",
  },
  {
    id: 2,
    img: "/twit.svg",
    href: "https://twitter.com/DevGondaliya",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://linkedin.com/in/dev-gondaliya",
  },
];
