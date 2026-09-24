import { profile } from "@/content/profile";
import { CareerSections } from "./career-sections";
import { ProjectCaseStudy } from "./project-case-study";
import styles from "./portfolio-introduction.module.css";

export function PortfolioIntroduction() {
  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#contenu" aria-label="Ramasama — accueil"><span className={styles.mark} aria-hidden="true">R<span>.</span></span>RAMASAMA <small>/001</small></a>
        <nav aria-label="Navigation principale" className={styles.nav}><a href="#projets">Projets <sup>01</sup></a><a href="#parcours">Parcours <sup>03</sup></a><a href="#contact">Contact <sup>05</sup></a></nav>
        <span className={styles.headerAside}>PORTFOLIO / 2026</span>
      </header>
      <main id="contenu" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="introduction">
          <div className={styles.heroMeta}><span>INDEX 001 — DÉVELOPPEMENT & SYSTÈMES</span><span>RAHERINOTOAVINA / SAFIDY MARIËL</span></div>
          <p className={styles.heroKicker}>{profile.role}</p>
          <h1 id="introduction" aria-label={profile.fullName} className={styles.heroTitle}><span>SAFIDY</span><span>MARIËL<b>.</b></span></h1>
          <div className={styles.heroBottom}><div><span className={styles.label}>NOTE D’INTENTION / 01</span><p>Je construis des interfaces qui tiennent debout, et j’explore les systèmes qui les rendent possibles.</p></div><a href="#projets">Découvrir les projets <span aria-hidden="true">↓</span></a></div>
          <div className={styles.heroRail} aria-hidden="true">R / S / M — INTERFACES · LOGIQUE · ALGORITHMES</div>
        </section>

        <section id="projets" className={styles.projects} aria-labelledby="projects-title">
          <div className={styles.sectionHeader}><span>01 / TRAVAUX SÉLECTIONNÉS</span><span>01 ÉTUDE DE CAS</span></div>
          <div className={styles.projectsIntro}><h2 id="projects-title">Le travail,<br /><em>en contexte.</em></h2><p>Une sélection documentée par le rôle réel, le terrain technique et les décisions connues. Chaque étude de cas évolue avec les éléments vérifiés.</p></div>
          <ProjectCaseStudy />
          <a className={styles.githubLink} href={profile.github} target="_blank" rel="noreferrer"><span>EN COURS / EXPÉRIMENTATIONS</span><strong>Explorer mes dépôts GitHub</strong><span aria-hidden="true">↗</span></a>
        </section>

        <section id="profil" className={styles.profile} aria-labelledby="profile-title"><div className={styles.sectionHeader}><span>02 / PROFIL</span><span>ENTRE DEUX MONDES</span></div><div className={styles.profileGrid}><h2 id="profile-title">La forme<br />& la <em>logique.</em></h2><div><p>Développeur fullstack, avec une expérience professionnelle frontend et une formation en intelligence artificielle.</p><p>Depuis juin 2024, je travaille comme développeur frontend chez VA-Mada. Mon parcours relie interfaces web, technologies backend et pratique de l’algorithmique.</p><div className={styles.skillList}><span>REACT / NEXT.JS</span><span>RUST / ACTIX</span><span>DIESEL / POSTGRESQL</span><span>ALGORITHMIQUE</span></div></div></div></section>
        <CareerSections />
        <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div className={styles.sectionHeader}><span>05 / CONTACT</span><span>LA SUITE S’ÉCRIT ICI</span></div><h2 id="contact-title">On construit<br /><em>quoi ensuite ?</em></h2><a className={styles.emailLink} href={`mailto:${profile.email}`}>Écrivez-moi <span aria-hidden="true">↗</span></a><div className={styles.contactLinks}><a href={profile.github}>GitHub ↗</a><a href="https://www.linkedin.com/in/safidy-mariel-raherinotoavina-659612262">LinkedIn ↗</a><span>{profile.email}</span></div></section>
      </main>
      <footer className={styles.footer}><span>© 2026 — {profile.fullName}</span><span>UN CARNET DE TERRAIN NUMÉRIQUE</span><a href="#contenu">Retour en haut ↑</a></footer>
    </div>
  );
}
