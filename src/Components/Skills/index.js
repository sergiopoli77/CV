import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "skills");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);
  return (
    <section className="skills fadeIn">
      <h2>{skills.title}</h2>
      <ul>
        <li>
          <i className="fab fa-html5" /> {skills.sk1}
        </li>
        <li>
          <i className="fab fa-react" /> {skills.sk2}
        </li>
        <li>
          <i className="fas fa-pencil-alt" /> {skills.sk3}
        </li>
        <li>
          <i className="fab fa-git-alt" /> {skills.sk4}
        </li>
        <li>
          <i className="fab fa-unity" /> {skills.sk5}
        </li>
        <li>
          <i className="fab fa-python" /> {skills.sk6}
        </li>
      </ul>
    </section>
  );
};

export default Skills;
