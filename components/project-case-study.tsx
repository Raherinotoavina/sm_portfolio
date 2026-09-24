import { sirhCaseStudy } from "@/content/projects";
import styles from "./portfolio-introduction.module.css";

export function ProjectCaseStudy() {
  return (
    <article className={styles.caseStudy} aria-labelledby="sirh-title">
      <div className={styles.caseVisual} aria-hidden="true">
        <div className={styles.visualTop}><span>FIG. 01 / STRUCTURE</span><span>FRONTEND · MICRO-FRONTEND</span></div>
        <div className={styles.diagram}>
          <span className={styles.diagramCore}>SIRH<span>&</span>PLUS</span>
          <span className={styles.nodeOne}>MAINTENANCES</span>
          <span className={styles.nodeTwo}>FORMATION</span>
          <span className={styles.nodeThree}>GTA</span>
        </div>
        <div className={styles.visualBottom}>SCHÉMA CONCEPTUEL — PAS UNE CAPTURE DU PRODUIT <span>↗</span></div>
      </div>
      <div className={styles.caseInfo}>
        <div className={styles.caseNumber}>CASE STUDY <span>01 / 01</span></div>
        <h3 id="sirh-title" aria-label={sirhCaseStudy.title}>SIRH<br />& Plus<span>.</span></h3>
        <p className={styles.caseLead}>{sirhCaseStudy.lead}</p>
        <dl className={styles.caseFacts}>
          {sirhCaseStudy.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>
        <details className={styles.caseDetails}>
          <summary>Lire l’étude de cas <span aria-hidden="true">↗</span></summary>
          <div>
            <p><strong>Contexte.</strong> {sirhCaseStudy.context}</p>
            <p><strong>Ma contribution confirmée.</strong> {sirhCaseStudy.contribution}</p>
            <p><strong>À documenter.</strong> {sirhCaseStudy.pending}</p>
            <a href={sirhCaseStudy.productUrl} target="_blank" rel="noreferrer">Découvrir le site du produit ↗</a>
          </div>
        </details>
      </div>
    </article>
  );
}
