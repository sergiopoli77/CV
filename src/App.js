import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="container">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Helmet>

      <div className="container">
        <header className="left-side">
          <div className="banner">
            <h2 className="fadeIn">Welcome to My CV</h2>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            className="profile-img fadeIn"
          />
          <h1 className="fadeIn">Sergio Poli</h1>
          <p className="subtitle fadeIn">
            Mahasiswa Universitas Klabat | FILKOM
          </p>
          <section className="social-media fadeIn">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/sergiooyp/"
                className="social-icon"
                target="_blank"
                data-tooltip="Instagram"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://x.com/sergiooyp"
                className="social-icon"
                target="_blank"
                data-tooltip="Twitter"
                rel="noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://github.com/sergiopoli77"
                className="social-icon"
                target="_blank"
                data-tooltip="GitHub"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </section>
        </header>

        <main className="right-side">
          <section className="about-me fadeIn">
            <h2>About Me</h2>
            <p>
              Saya mahasiswa Universitas Klabat tahun ajaran 2022 yang mengambil
              prodi Informatika dan saya memiliki minat dan ketertarikan di Web
              Development. Dan saya ingin memperdalam lagi keterampilan saya di
              bagian Web Development
            </p>
          </section>
          <div className="section-divider" />
          <section className="skills fadeIn">
            <h2>My Skills</h2>
            <ul>
              <li>
                <i className="fab fa-html5" /> HTML, CSS, JavaScript
              </li>
              <li>
                <i className="fab fa-react" /> React Js, React Native
              </li>
              <li>
                <i className="fas fa-pencil-alt" /> UI/UX Design
              </li>
              <li>
                <i className="fab fa-git-alt" /> Git
              </li>
              <li>
                <i className="fab fa-unity" /> Unity 3D
              </li>
            </ul>
          </section>
          <div className="section-divider" />

          <section className="works fadeIn">
            <h2>My Projects</h2>
            <div className="portfolio">
              <div className="portfolio-item">
                <img
                  src="./images/alaise.png"
                  alt="Visual Programming Project"
                  className="project-img"
                />
                <h3>Visual Programming</h3>
                <p>Desktop Aplikasi Inventory Admin</p>
              </div>
              <div className="portfolio-item">
                <img
                  src="./images/tomatikweb.png"
                  alt="Front-End Web Project"
                  className="project-img"
                />
                <h3>Front-End Web</h3>
                <p>Tomatik, website informasi tentang tomat</p>
              </div>
              <div className="portfolio-item">
                <img
                  src="./images/scifigame.jpeg"
                  alt="Unity 3D Game Project"
                  className="project-img"
                />
                <h3>Unity 3D Game</h3>
                <p>Game FPS Shooter bertemakan sci-fi</p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          <contact className="contact-info fadeIn">
            <h3>Contact Me:</h3>
            <ul>
              <li>
                <i className="fas fa-envelope" /> sergio.poli0904@gmail.com
              </li>
              <li>
                <i className="fas fa-phone-alt" /> +65 895 635 363 191
              </li>
              <li>
                <i className="fas fa-map-marker-alt" /> Manado, Indonesia
              </li>
            </ul>
          </contact>
        </main>
      </div>
    </div>
  );
}

export default App;
