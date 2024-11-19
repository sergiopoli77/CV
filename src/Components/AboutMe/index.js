import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [about, setAboutMe] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAboutMe(data);
    });
  }, []);

  return (
    <section className="about-me fadeIn">
      <h2>{about.title}</h2>
      <p>{about.subttitle}</p>
    </section>
  );
};

export default AboutMe;
