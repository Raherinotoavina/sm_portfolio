import { profile } from "@/content/profile";
import { CareerSections } from "./career-sections";
import { ProjectCaseStudy } from "./project-case-study";
import { ScrollReveal } from "./scroll-reveal";
import styles from "./portfolio-introduction.module.css";

export function PortfolioIntroduction() {
  return (
    <div className={styles.site}>
      <ScrollReveal />
      <header className={styles.header}>
        <a className={styles.wordmark} href="#contenu" aria-label="Ramasama — accueil">
          <span className={styles.mark} aria-hidden="true">S</span><span>Safidy Mariël</span>
        </a>
        <nav aria-label="Navigation principale" className={styles.nav}>
          <a href="#projets">Travaux <sup>01</sup></a><a href="#profil">Profil <sup>02</sup></a><a href="#parcours">Parcours <sup>03</sup></a>
        </nav>
        <a className={styles.contactPill} href="#contact"><i aria-hidden="true" />Disponible pour échanger</a>
      </header>
      <main id="contenu" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="introduction">
          <div className={styles.ambient} aria-hidden="true"><span /><span /><span /></div>
          <div className={styles.heroCopy} data-reveal="hero">
            <p className={styles.eyebrow}><span>Portfolio / 2026</span> Antananarivo · Madagascar</p>
            <h1 id="introduction" aria-label={profile.fullName}><span>Je façonne des</span><span>expériences <em>numériques</em></span><span>qui pensent <b>avec vous.</b></span></h1>
            <div className={styles.heroNote}><span>01 — INTENTION</span><p>Développeur fullstack à la croisée de l’interface, des systèmes et de l’intelligence artificielle.</p></div>
          </div>
          <div className={styles.intelligence} aria-hidden="true"><div className={styles.orbit}><span /><span /><span /></div><div className={styles.core}><i /><i /><i /></div><p>CALME / PRÉCISION / CURIOSITÉ</p></div>
          <a className={styles.scrollCue} href="#projets"><span>Explorer</span><i aria-hidden="true">↓</i></a>
        </section>
        <section id="projets" className={styles.projects} aria-labelledby="projects-title">
          <div className={styles.sectionHeader}><span>01 / TRAVAUX SÉLECTIONNÉS</span><span>UN PROJET, EN PROFONDEUR</span></div>
          <div className={styles.projectsIntro} data-reveal="heading"><h2 id="projects-title">Des systèmes<br />pensés pour <em>servir.</em></h2><p>La technologie devient intéressante lorsqu’elle s’efface derrière une expérience claire, humaine et durable.</p></div>
          <div data-reveal="feature"><ProjectCaseStudy /></div>
          <a className={styles.githubLink} href={profile.github} target="_blank" rel="noreferrer"><span>LABORATOIRE PERSONNEL</span><strong>Explorer mes dépôts GitHub</strong><span aria-hidden="true">↗</span></a>
        </section>
        <section id="profil" className={styles.profile} aria-labelledby="profile-title">
          <div className={styles.profileGlow} aria-hidden="true" /><div className={styles.sectionHeader}><span>02 / À PROPOS</span><span>HUMAIN D’ABORD, TECHNOLOGIE ENSUITE</span></div>
          <div className={styles.profileGrid} data-reveal="heading"><h2 id="profile-title">Entre la<br /><em>forme</em> et<br />la logique.</h2><div className={styles.profileCopy}><p>Je conçois des interfaces où la complexité technique trouve une forme simple, sensible et naturelle.</p><p>Depuis juin 2024, je travaille comme développeur frontend chez VA-Mada. Mon parcours relie interfaces web, technologies backend, algorithmique et intelligence artificielle.</p><div className={styles.skillList}><span>React / Next.js</span><span>Rust / Actix</span><span>PostgreSQL</span><span>Algorithmique</span></div></div></div>
        </section>
        <CareerSections />
        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div className={styles.contactHalo} aria-hidden="true" /><div className={styles.sectionHeader}><span>05 / CONTACT</span><span>UNE IDÉE PEUT COMMENCER ICI</span></div><div data-reveal="heading"><p className={styles.contactPrelude}>Vous avez un projet ambitieux, singulier ou simplement utile ?</p><h2 id="contact-title">Créons quelque chose<br /><em>qui reste.</em></h2><a className={styles.emailLink} href={`mailto:${profile.email}`}><span>Écrivez-moi</span><span aria-hidden="true">↗</span></a></div><div className={styles.contactLinks}><a href={profile.github}>GitHub ↗</a><a href="https://www.linkedin.com/in/safidy-mariel-raherinotoavina-659612262">LinkedIn ↗</a><span>{profile.email}</span></div>
        </section>
      </main>
      <footer className={styles.footer}><span>© 2026 — {profile.fullName}</span><span>CONÇU AVEC CALME & INTENTION</span><a href="#contenu">Retour en haut ↑</a></footer>
    </div>
  );
}
