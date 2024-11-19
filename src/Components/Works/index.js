import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Works = () => {
  const [works, setWorks] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const worksRef = ref(db, "works");
    onValue(worksRef, (snapshot) => {
      const data = snapshot.val();
      setWorks(data);
    });
  }, []);

  return (
    <section className="works fadeIn">
      <h2>{works.title}</h2>
      <div className="portfolio">
        <div className="portfolio-item">
          <img
            src={`data:image/jpeg;base64, ${works.g1}`}
            alt="Visual Programming Project"
            className="project-img"
          />
          <h3>{works.p1}</h3>
          <p>{works.p1j}</p>
        </div>
        <div className="portfolio-item">
          <img
            src={`data:image/jpeg;base64, ${works.g2}`}
            alt="Front-End Web Project"
            className="project-img"
          />
          <h3>{works.p2}</h3>
          <p>{works.p2j}</p>
        </div>
        <div className="portfolio-item">
          <img
            src={`data:image/jpeg;base64, ${works.g3}`}
            alt="Unity 3D Game Project"
            className="project-img"
          />
          <h3>{works.p3}</h3>
          <p>{works.p3j}</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
