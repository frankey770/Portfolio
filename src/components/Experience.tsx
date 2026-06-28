"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const experiences = [
  {
    date: "Apr 2025 – Jul 2025",
    title: "SmartBridge",
    role: "Machine Learning Intern",
    location: "Hyderabad, India",
    icon: "https://media.licdn.com/dms/image/v2/C510BAQHQCh6ucnJcNA/company-logo_200_200/company-logo_200_200/0/1630601762828/smartbridge_educational_services_pvt_ltd_logo?e=2147483647&v=beta&t=I3XZPZnLgGPj6Lgqq115R_oC8P20W5LIXgeyj3yDB8Y",
    description:
      "Developed backend services using Python and FastAPI to support machine learning inference and data processing workflows. Integrated external APIs including IBM Watson services to enable automated data exchange and system communication. Preprocessed and analyzed datasets using Python libraries to support ML experimentation and model development. Performed testing and debugging of application modules, and documented APIs, data workflows, and experiment results.",
    features: [
      "Backend Development with Python & FastAPI",
      "IBM Watson API Integration",
      "Dataset preprocessing and ML experimentation",
      "System testing, debugging & documentation",
    ],
    offerLetter: "",
    experienceLetter: "",
  },
  {
    date: "Dec 2023 – Jan 2024",
    title: "CodSoft",
    role: "Web Developer",
    location: "Remote",
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQGOOosM_QDLUQ/company-logo_200_200/company-logo_200_200/0/1695395411382?e=2147483647&v=beta&t=placeholder",
    description:
      "Developed responsive web interfaces using HTML, CSS, and JavaScript to improve usability and accessibility. Designed structured layouts and interactive elements to enhance user engagement and navigation. Tested and debugged website features to ensure functionality across multiple devices and browsers. Coordinated with development teams remotely using GitHub for version control.",
    features: [
      "Responsive frontend development (HTML, CSS, JS)",
      "UI/UX design & accessibility improvements",
      "Cross-browser & cross-device testing",
      "Remote collaboration via GitHub",
    ],
    offerLetter: "",
    experienceLetter: "",
  },
];

const certifications = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    description:
      "Demonstrated knowledge of AI/ML concepts and AWS AI services including machine learning fundamentals and cloud-based AI solutions.",
    certificateLink: "",
  },
  {
    title: "Research Publication – Soccer Player Analysis",
    issuer: "Peer-reviewed Journal",
    date: "2024",
    description:
      "Published research on Prediction and Analysis of Soccer Players Using Deep Neural Networks.",
    certificateLink: "",
  },
  {
    title: "Java Certification",
    issuer: "Udemy",
    date: "2023",
    description:
      "Comprehensive Java programming certification covering core concepts, OOP, and data structures.",
    certificateLink: "",
  },
  {
    title: "NPTEL – Internet of Things",
    issuer: "NPTEL / IIT",
    date: "2023",
    description:
      "Certification in IoT concepts, architectures, and applications from the National Programme on Technology Enhanced Learning.",
    certificateLink: "",
  },
  {
    title: "Elements of AI",
    issuer: "University of Helsinki",
    date: "2023",
    description:
      "Completed course covering the fundamentals of artificial intelligence including machine learning basics and real-world AI applications.",
    certificateLink: "",
  },
  {
    title: "Developer and Technology Job Simulation",
    issuer: "Forage",
    date: "2023",
    description:
      "Hands-on simulation of real-world developer and technology tasks in a professional environment.",
    certificateLink: "",
  },
];

const InternshipExperienceCard = () => {
  return (
    <div className="space-y-10">
      {/* Experience Section */}
      <div className="relative flex items-start gap-6">
        <div className="absolute top-0 left-8 bottom-0 w-[2px] bg-dashed bg-neutral-700"></div>

        <div className="flex flex-col items-center gap-40 mt-6">
          {experiences.map((experience, index) => (
            <Avatar key={index} className="w-16 h-16 bg-white border">
              <AvatarImage src={experience.icon} alt={experience.title} />
              <AvatarFallback>{experience.title[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <div className="flex-1 space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="p-6 border border-neutral-700 rounded-lg shadow-md bg-neutral-900">
              <p className="text-sm text-neutral-500">{experience.date}</p>
              <h2 className="text-xl font-bold text-white">{experience.title}</h2>
              <p className="text-sm font-medium text-neutral-400">{experience.role} - {experience.location}</p>

              <div className="mt-3">
                <h3 className="text-md font-semibold text-neutral-300">About the Role</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{experience.description}</p>
              </div>

              {experience.features.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-md font-semibold text-neutral-300">Key Contributions</h3>
                  <ul className="text-sm text-neutral-500 list-inside list-disc">
                    {experience.features.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex gap-4">
                {experience.offerLetter && (
                  <a href={experience.offerLetter} target="_blank" className="text-sm text-blue-500 underline">
                    View Offer Letter
                  </a>
                )}
                {experience.experienceLetter && (
                  <a href={experience.experienceLetter} target="_blank" className="text-sm text-blue-500 underline">
                    View Experience Letter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white">Certifications & Honors</h2>
        <div className="space-y-4 mt-4">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 border border-neutral-700 rounded-lg shadow-md bg-neutral-900">
              <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              <p className="text-sm font-medium text-neutral-400">{cert.issuer} - {cert.date}</p>
              <p className="text-sm text-neutral-400 leading-relaxed mt-2">{cert.description}</p>
              {cert.certificateLink && (
                <a href={cert.certificateLink} target="_blank" className="text-sm text-blue-500 underline mt-2 inline-block">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipExperienceCard;
