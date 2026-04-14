import './App.css'

const projects = [
  {
    title: 'Gestion de ferme de poulet',
    description:
      'Application PHP locale construite pour gérer la production et le suivi des poulets de chair.',
    link: '#',
    status: 'À publier sur GitHub',
  },
  {
    title: 'Gestion de boutique',
    description:
      'Application de gestion de stock en local réalisée avec WAMP et PHP.',
    link: '#',
    status: 'À publier sur GitHub',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Portfolio étudiant</span>
          <h1>KIANPI TSAKOU STÈVE JUNIOR</h1>
          <p>
            Développeur en formation, passionné par les applications web et les
            solutions logicielles. Actuellement en DUT Génie Logiciel, je cherche
            à valoriser mes projets PHP/WAMP et à publier mes travaux sur GitHub.
          </p>
          <div className="hero-actions">
            <a href="/cv.html" className="button primary" target="_blank" rel="noreferrer">
              Télécharger le CV
            </a>
            <a
              href="https://www.linkedin.com/in/junior-kianpi"
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              Voir LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-content">
            <p className="label">Contact</p>
            <h2>juniorjkianpi@gmail.com</h2>
            <p>+237 686 578 397</p>
            <div className="contact-list">
              <a href="https://github.com/juniorkianpi-png" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/junior-kianpi" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="content-grid">
        <section className="section about">
          <h2>À propos</h2>
          <p>
            Étudiant en DUT Génie Logiciel à l’IUT Fotso Victor, je développe des
            applications web avec PHP, HTML, CSS et JavaScript. Je maîtrise aussi les
            bases de données MySQL et les modèles UML/MERISE pour structurer mes
            projets.
          </p>
        </section>

        <section className="section skills">
          <h2>Compétences</h2>
          <ul>
            <li>Programmation : C, Java (POO)</li>
            <li>Web : HTML5, CSS3, JavaScript, PHP Laravel</li>
            <li>Bases de données : MySQL</li>
            <li>Analyse & Modélisation : UML, MERISE</li>
            <li>Systèmes d'information : concepts et architecture</li>
          </ul>
        </section>

        <section className="section projects">
          <div className="section-header">
            <h2>Projets</h2>
            <p>Deux projets locaux à publier sur GitHub bientôt.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-badge">Étudiant</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>{project.status}</span>
                  <a href={project.link} className="project-link">
                    Voir
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education">
          <h2>Formation</h2>
          <div className="education-item">
            <strong>2024 - 2025</strong>
            <p>DUT Génie Logiciel — IUT Fotso Victor de Bandjoun</p>
          </div>
          <div className="education-item">
            <strong>2024</strong>
            <p>Baccalauréat C — Lycée Bilingue de Bafoussam Rural</p>
          </div>
        </section>

        <section className="section contact">
          <h2>Contact</h2>
          <p>
            Disponible pour un stage ou une mission de développement web. Je suis
            prêt à partager mes projets locaux et à les publier sur GitHub.
          </p>
          <div className="contact-grid">
            <div>
              <span>Email</span>
              <p>juniorjkianpi@gmail.com</p>
            </div>
            <div>
              <span>Téléphone</span>
              <p>+237 686 578 397</p>
            </div>
            <div>
              <span>Langues</span>
              <p>Français - très bon / Anglais technique</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Portfolio développé avec React · Couleurs violet et doré</p>
      </footer>
    </div>
  )
}

export default App
