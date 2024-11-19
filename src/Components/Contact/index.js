import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <section className="contact-info fadeIn">
      <h3>{contact.title}</h3>
      <ul>
        <li>
          <i className="fas fa-envelope" /> {contact.email}
        </li>
        <li>
          <i className="fas fa-phone-alt" /> {contact.number}
        </li>
        <li>
          <i className="fas fa-map-marker-alt" /> {contact.live}
        </li>
      </ul>
    </section>
  );
};

export default Contact;
