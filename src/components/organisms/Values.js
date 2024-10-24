import React, { useState } from "react"; 

const Values = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleValue = (index) => {
    // Toggle between opening and closing the clicked value
    setActiveIndex(activeIndex === index ? null : index);
  };

  const values = [
    {
      title: "Integrity",
      content: "We uphold the highest ethical standards in all our interactions, ensuring transparency and trust in our services.",
    },
    {
      title: "Excellence",
      content: "We are dedicated to delivering high-quality services and continuously improving our processes to exceed client expectations.",
    },
    {
      title: "Collaboration",
      content: "We believe in the power of teamwork, working closely with our clients to understand their unique needs and develop effective solutions",
    },
    {
      title: "Innovation",
      content: "We embrace technology and innovative practices to enhance our services and provide cutting-edge financial solutions.",
    },
    {
        title:"Client-Centricity",
        content:"Our clients are at the heart of everything we do. We prioritize their needs and strive to provide personalized support and guidance."
    },
    {
        title:"Continuous Learning",
        content:"We are committed to professional development and staying informed about industry trends, ensuring we deliver the best possible service to our clients."
    }
  ];

  return (
    <section className="values-section">
      <h2 className="values-header mtext-black">Our Values</h2>
      {values.map((value, index) => (
        <div key={index} className="value-item">
          <button
            className="value-header"
            onClick={() => toggleValue(index)}
          >
            {value.title}
            <span className="icon">{activeIndex === index ? "-" : "+"}</span>
          </button>
          <div
            className="value-content"
            style={{
              maxHeight: activeIndex === index ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <p>{value.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Values;
