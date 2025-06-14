import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Book3.css';


function Book() {
    const portfolioData = [
        {
            title: "About Me",
            content: "I'm a passionate Software and Mechanical Engineer with expertise in modern web technologies and engineering solutions. My journey combines traditional engineering principles with cutting-edge software development.",
            image: "https://via.placeholder.com/400x200/4f46e5/ffffff?text=About+Me",
            skills: ["React", "JavaScript", "Node.js", "Python"]
        },
        {
            title: "Frontend Skills", 
            content: "Specializing in modern frontend technologies and responsive design. I create intuitive user interfaces that provide exceptional user experiences across all devices.",
            image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Frontend",
            skills: ["React.js", "Vue.js", "TypeScript", "Tailwind CSS"]
        },
        {
            title: "Backend Development",
            content: "Building robust server-side applications and APIs. I focus on scalable architecture, database optimization, and secure authentication systems.",
            image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Backend", 
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
        },
        {
            title: "Engineering Projects",
            content: "Mechanical engineering solutions and automation systems. I bridge the gap between physical systems and digital control interfaces.",
            image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Engineering",
            skills: ["CAD Design", "Automation", "IoT", "Robotics"]
        },
        {
            title: "Mobile Development",
            content: "Cross-platform mobile applications for iOS and Android. I develop native-feeling apps that work seamlessly across different devices and platforms.",
            image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Mobile",
            skills: ["React Native", "Flutter", "Swift", "Kotlin"]
        },
        {
            title: "DevOps & Cloud",
            content: "Infrastructure management and cloud deployment strategies. I implement CI/CD pipelines and manage scalable cloud architectures for optimal performance.",
            image: "https://via.placeholder.com/400x200/ef4444/ffffff?text=DevOps",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
        }
    ];

    return (
        <HTMLFlipBook width={450} height={600}
            maxShadowOpacity={0.5}
            showCover={true}
            drawShadow={true}
            flippingTime={1000}
            size="fixed"
        >
          <div className="demoPage" style={{ background: 'transparent' }}>
        <div className='page-content cover'>
        <img src=".\assets\picturepax.jpg" alt="avatar.png" />
        </div>
          </div>
            {portfolioData.map((item, index) => (
                <div className="demoPage" key={index}>
                <div className="page-content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <img src={item.image} alt={item.title} />
                    <ul>
                    {item.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                    ))}
                    </ul>
                </div>
                </div>
            ))}
    </HTMLFlipBook>
    );
}

export default Book;