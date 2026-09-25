import { codingame, education, experiences, hackerRankCertifications } from "@/content/career";
import styles from "./career-sections.module.css";

export function CareerSections() {
  return (
    <>
      <section id="parcours" className={styles.journey} aria-labelledby="journey-title">
        <div className={styles.sectionHeader}><span>03 / PARCOURS</span><span>REPÈRES CONFIRMÉS</span></div>
        <div className={styles.intro} data-reveal="heading">
          <h2 id="journey-title">Quelques<br /><em>jalons.</em></h2>
          <p>Une trajectoire entre interfaces, développement fullstack et intelligence artificielle. Les détails encore inconnus sont indiqués sans approximation.</p>
        </div>
        <div className={styles.columns} data-reveal="feature">
          <div>
            <h3>Expérience <span>01</span></h3>
            <ol className={styles.timeline}>{experiences.map((item) => <li key={item.organization}><span className={styles.period}>{item.period}</span><div><h4>{item.role}</h4><p className={styles.organization}>{item.organization}</p><p className={styles.note}>{item.description}</p></div></li>)}</ol>
          </div>
          <div>
            <h3>Formation <span>02</span></h3>
            <ol className={styles.timeline}>{education.map((item) => <li key={item.year}><span className={styles.period}>{item.year}</span><div><h4>{item.title}</h4><p className={styles.note}>{item.note}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      <section id="certifications" className={styles.credentials} aria-labelledby="credentials-title">
        <div className={styles.sectionHeader}><span>04 / CERTIFICATIONS</span><span>JUSTIFICATIFS PUBLICS</span></div>
        <div className={styles.credentialsIntro} data-reveal="heading"><h2 id="credentials-title">Preuves de<br /><em>pratique.</em></h2><p>Certifications de plateformes obtenues par des évaluations et exercices. Elles ne remplacent pas les diplômes ni une mesure de maîtrise professionnelle.</p></div>
        <div className={styles.credentialsGrid} data-reveal="feature">
          <div>
            <h3>HackerRank <span>07 CERTIFICATS</span></h3>
            <ol className={styles.certificateList}>{hackerRankCertifications.map((item, index) => <li key={item.href}><a href={item.href} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><span aria-hidden="true">↗</span></a></li>)}</ol>
          </div>
          <div className={styles.codingame}>
            <h3>CodinGame <span>PROFIL PUBLIC</span></h3>
            <p>Langages certifiés par la plateforme</p>
            <ul className={styles.languageList}>{codingame.certifiedLanguages.map((language) => <li key={language}>{language}</li>)}</ul>
            <p>Domaines distingués</p>
            <ul className={styles.domainList}>{codingame.domains.map((domain) => <li key={domain}>{domain}</li>)}</ul>
            <a className={styles.profileLink} href={codingame.href} target="_blank" rel="noreferrer">Voir le profil CodinGame <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
