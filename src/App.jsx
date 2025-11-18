import React from 'react'
import logo from './assets/logo.png'

const sections = [
  { id: 'home', label: 'Accueil' },
  { id: 'research', label: 'Recherches' },
  { id: 'publications', label: 'Publications' },
  { id: 'activities', label: 'Activités' },
  { id: 'membership', label: 'Adhésion' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo CERS" className="logo" />
          <div>
            <h1 className="title">CERS</h1>
            <p className="subtitle">Centre d’Étude et de Recherche du Sahel</p>
          </div>
        </div>
        <nav className="nav">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="nav-link">
              {s.label}
            </button>
          ))}
        </nav>
      </header>

      <section id="home" className="hero">
        <h2>Connaissance – Paix – Développement</h2>
        <p>
          Le CERS est un centre de recherche multidisciplinaire dédié à la compréhension
          des dynamiques politiques, sécuritaires, économiques, sociales et environnementales du Sahel.
        </p>
        <a href="#research" onClick={(e) => { e.preventDefault(); scrollTo('research') }} className="btn">
          Découvrir nos axes de recherche
        </a>
      </section>

      <main className="content">
        <section id="research" className="block">
          <h3>Axes de recherche prioritaires</h3>
          <ul>
            <li>Gouvernance, démocratie et consolidation de la paix</li>
            <li>Développement socio-économique et résilience des communautés</li>
            <li>Sécurité, prévention des conflits et coopération régionale</li>
            <li>Environnement, changement climatique et gestion durable des ressources</li>
            <li>Culture, société et patrimoine intellectuel du Sahel</li>
          </ul>
        </section>

        <section id="publications" className="block">
          <h3>Publications et productions</h3>
          <p>
            Le CERS produit des notes d’analyse, des rapports d’études, des articles scientifiques et des synthèses 
            stratégiques destinées aux décideurs publics, aux partenaires techniques et financiers, ainsi qu’au grand public.
          </p>
          <p className="hint">Bientôt : une bibliothèque numérique avec accès aux documents en téléchargement.</p>
        </section>

        <section id="activities" className="block">
          <h3>Activités phares</h3>
          <ul>
            <li>Conférences et débats hybrides (présentiel / en ligne)</li>
            <li>Séminaires de formation sur les NTIC, la citoyenneté numérique et la cybersécurité</li>
            <li>Ateliers sur l’analyse des conflits, la médiation et la diplomatie préventive</li>
            <li>Programmes de recherche appliquée en partenariat avec les universités et centres de recherche</li>
          </ul>
        </section>

        <section id="membership" className="block">
          <h3>Adhésion au CERS</h3>
          <p>
            Le CERS est ouvert aux chercheurs, étudiants, praticiens et experts souhaitant contribuer à la production de 
            connaissances sur le Sahel.
          </p>
          <ul>
            <li><strong>Membres fondateurs</strong> : à l’origine de la création du centre.</li>
            <li><strong>Membres adhérents</strong> : chercheurs, doctorants, étudiants, praticiens.</li>
            <li><strong>Membres associés</strong> : experts ou personnalités ressources.</li>
          </ul>
          <p className="hint">
            Pour adhérer, contactez-nous par courrier ou par email avec votre CV et une lettre de motivation.
          </p>
        </section>

        <section id="contact" className="block">
          <h3>Contact</h3>
          <p><strong>Adresse :</strong> N’Djamena, République du Tchad</p>
          <p><strong>Email :</strong> contact@cers.td</p>
          <p><strong>Téléphone :</strong> (+235) XX XX XX XX</p>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} CERS – N’Djamena, Tchad
      </footer>
    </div>
  )
}

export default App
