import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Randall Liao Resume',
  description: 'Resume of Randall Liao – Software Engineer, Research Assistant, and Teaching Assistant',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Randall Liao.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a versatile engineer with experience as a Research Assistant, Teaching Assistant, and Software Development
        Engineer.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in developing scalable software solutions and driving innovation in cloud-native environments.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'I am a dedicated and versatile engineer with hands-on experience in research, teaching, and software development. I have led teams, optimized processes, and delivered scalable, cloud-native solutions. Passionate about continuous learning and innovation.',
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    {label: 'Education', text: 'University of Toronto, Rutgers University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Shenzhen Rural Commercial Bank, University of Toronto', Icon: BuildingOffice2Icon},
    {label: 'Interests', text: 'Software Development, Research, Teaching', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Java', level: 9},
      {name: 'Python', level: 8},
      {name: 'SQL', level: 8},
      {name: 'PL/SQL', level: 7},
      {name: 'Bash', level: 7},
      {name: 'JavaScript', level: 8},
      {name: 'Groovy', level: 7},
      {name: 'C', level: 8},
      {name: 'C++', level: 7},
    ],
  },
  {
    name: 'Frameworks & Tools',
    skills: [
      {name: 'Spring Boot', level: 9},
      {name: 'JUnit', level: 8},
      {name: 'Mockito', level: 8},
      {name: 'Tomcat', level: 8},
      {name: 'Oracle', level: 8},
      {name: 'JMeter', level: 7},
      {name: 'Nginx', level: 7},
      {name: 'Docker', level: 9},
      {name: 'CI/CD', level: 8},
      {name: 'JSON', level: 8},
      {name: 'REST API', level: 9},
    ],
  },
  {
    name: 'Cloud & Distributed Systems',
    skills: [
      {name: 'AWS', level: 9},
      {name: 'GCP', level: 8},
      {name: 'Kubernetes', level: 8},
      {name: 'Redis', level: 8},
      {name: 'Kafka', level: 8},
      {name: 'RabbitMQ', level: 7},
      {name: 'Blockchain', level: 6},
      {name: 'NoSQL', level: 7},
    ],
  },
  {
    name: 'Certifications & Patents',
    skills: [
      {name: 'AWS Certified Solution Architect', level: 10},
      {name: 'Yogurt Fermentation Patent (CN201721005435.0)', level: 10},
    ],
  },
];

/**
 * Portfolio section
 * (Not used – leave empty)
 */
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section
 */
// Education timeline
export const education: TimelineItem[] = [
  {
    date: 'Jan 2025',
    location: 'Toronto, ON',
    title: 'M.Eng in Electrical and Computer Engineering',
    content: <p>University of Toronto</p>,
  },
  {
    date: 'May 2020',
    location: 'New Brunswick, NJ',
    title: 'BS in Management Information Systems & Supply Chain Management',
    content: <p>Rutgers, The State University of New Jersey</p>,
  },
];

// Experience timeline (Work section)
export const experience: TimelineItem[] = [
  {
    date: 'Sep 2024 - Jan 2025',
    location: 'Toronto, ON',
    title: 'Research Assistant, University Of Toronto',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Developed end-to-end tests for a cloud-native tool for pharmacogenetic analysis on Google Cloud using Google
          Kubernetes Engine, Cloud Storage, Cloud Logging, GitLab CI/CD, and Python.
        </li>
        <li>
          Refactored over 20 duplicated Python test scripts into cohesive, reusable modules employing various design
          patterns.
        </li>
        <li>
          Integrated Google Cloud Code into the container runtime to enable auto-sync of code changes with remote K8S
          pods, eliminating the need to rerun a 50-minute CI/CD pipeline for deployments.
        </li>
        <li>
          Enabled remote debugging for containerized Python applications with Skaffold, replacing print statements with
          full debugging capabilities including breakpoints and step-through execution.
        </li>
      </ul>
    ),
  },
  {
    date: 'Dec 2023 - Jan 2025',
    location: 'Toronto, ON',
    title: 'Teaching Assistant, University Of Toronto',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Software Design: Guided 6 teams on their Java projects, mentoring students in object-oriented design, version
          control, unit testing, refactoring, and design patterns.
        </li>
        <li>Software Tools and Systems Programming: Hosted lab sessions on C language and system programming.</li>
        <li>
          Engineering Economic Analysis & Entrepreneurship: Tutored over 120 engineering students in business,
          economics, and entrepreneurship concepts.
        </li>
      </ul>
    ),
  },
  {
    date: 'Jul 2020 - Aug 2023',
    location: 'Shenzhen, China',
    title: 'Software Development Engineer, Shenzhen Rural Commercial Bank',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Led a team of six developers in an agile project, collaborating with design, business, and engineering teams
          to ensure consistent high-quality technical deliveries.
        </li>
        <li>
          Identified critical improvements in DevOps, software engineering, and system architecture; established
          standards and best practices; built CI/CD tools, shared Java modules, and maintained a team Wiki.
        </li>
        <li>
          Migrated a Java monolithic application to a containerized microservices architecture using a lift-and-shift
          strategy, integrating with Spring Cloud and cloud-native features to eliminate 1 hour/week of maintenance
          downtime and increase throughput by 300%.
        </li>
        <li>
          Engineered a Java push notification pipeline processing over 30,000 notifications daily by integrating data
          from Kafka, RESTful APIs, and an Enterprise Service Bus.
        </li>
        <li>
          Implemented an auditing microservice with Spring AOP for RESTful APIs, capable of handling 1000 RPS per
          instance, and enhanced performance by integrating a write-optimized LSM database, saving $10,000 annually in
          Oracle licensing costs.
        </li>
        <li>
          Transformed an overnight batch process into a real-time streaming pipeline using change data capture, Apache
          Flink, Kafka, and OLAP databases, reducing data latency from hours to seconds.
        </li>
        <li>
          Led the development of backup and disaster recovery planning with an RPO of 5 seconds and RTO of 2 hours,
          successfully meeting objectives during a data center power outage caused by flooding.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 * (Not used – leave empty)
 */
export const testimonial: TestimonialSection = {
  imageSrc: '',
  testimonials: [],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out via email or LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'randall.y.liao@gmail.com',
      href: 'mailto:randall.y.liao@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Toronto, ON',
      href: 'https://www.google.com/maps/place/Toronto,+ON',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/randall-y-liao'},
];
