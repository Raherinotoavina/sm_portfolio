import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import styles from "./portfolio-introduction.module.css";

export function PortfolioIntroduction() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 sm:px-12 lg:px-20">
      <header className="flex min-h-24 flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-input/60 py-5">
        <a href="#contenu" aria-label="Ramasama — accueil" className="flex items-center gap-3 text-sm font-semibold tracking-tight">
          <span aria-hidden="true" className="text-3xl text-primary">✳</span>
          {profile.alias}<span className="text-primary">.</span>
        </a>
        <nav aria-label="Navigation principale" className="flex items-center gap-6 text-xs sm:gap-10 sm:text-sm">
          <a className="hover:text-primary" href="#exploration">Exploration</a>
          <a className="hover:text-primary" href={`mailto:${profile.email}`}>Parlons ensemble <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="contenu" tabIndex={-1} className="outline-none">
        <section aria-labelledby="introduction" className="relative grid min-h-[720px] items-center gap-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-0 lg:py-24">
          <div className="relative z-10">
            <p className="mb-9 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />PORTFOLIO PERSONNEL — VOL. 01
            </p>
            <p className="mb-5 text-sm text-primary">{profile.role}</p>
            <h1 id="introduction" aria-label={profile.fullName} className="text-[clamp(3.7rem,8vw,8rem)] leading-[0.95] font-medium tracking-[-0.075em]">
              <span className="mb-4 block text-[clamp(0.8rem,1.4vw,1.15rem)] leading-normal tracking-[0.16em]">{profile.familyName}</span>{" "}
              {profile.firstName} <span className="block font-serif font-normal italic text-primary">{profile.secondName}.</span>
            </h1>
            <p className="mt-8 max-w-[380px] text-base leading-relaxed text-muted-foreground">
              Des interfaces au premier plan.<br />De la logique en profondeur.<br />
              <span className="text-foreground">J’explore ce qui relie les deux.</span>
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button asChild className="h-12 gap-8"><a href="#exploration">Explorer mon univers <span aria-hidden="true">↘</span></a></Button>
              <a href={`mailto:${profile.email}`} className="py-3 text-sm underline decoration-input underline-offset-8 hover:text-primary">Me contacter</a>
            </div>
          </div>
          <div className={styles.observatory} aria-hidden="true">
            <div className={styles.coordinates}>SYSTÈME 01 / EXPLORATION</div>
            <div className={styles.orbit} /><div className={styles.globe} /><div className={styles.equator} />
            <span className={styles.satellite} /><span className={styles.crosshair}>+</span>
            <span className={styles.caption}>LA CURIOSITÉ COMME GRAVITÉ.</span>
          </div>
        </section>
        <section id="exploration" aria-labelledby="exploration-title" className="scroll-mt-8 border-t border-input/60 py-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 id="exploration-title" className="font-mono text-xs tracking-[0.16em] text-muted-foreground">01 / POINTS DE REPÈRE</h2>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground">CODE · INTERFACES · ALGORITHMES</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {profile.landmarks.map((landmark) => (
              <div key={landmark.label} className="md:border-l md:border-input/60 md:pl-8 md:first:border-0 md:first:pl-0">
                <p className="mb-3 text-xs text-primary">{landmark.label}</p>
                <h3 className="text-xl tracking-tight">{landmark.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{landmark.description}</p>
              </div>
            ))}
            <div className="md:border-l md:border-input/60 md:pl-8">
              <p className="mb-3 text-xs text-primary">LE CODE, À DÉCOUVRIR</p>
              <h3 className="text-xl tracking-tight">L’exploration continue.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Retrouve mes dépôts et mes expérimentations sur GitHub.</p>
              <a href={profile.github} className="mt-4 inline-block py-2 text-sm underline decoration-input underline-offset-8 hover:text-primary">Voir mon GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-wrap justify-between gap-3 border-t border-input/60 py-6 font-mono text-[10px] tracking-widest text-muted-foreground">
        <span>RAMASAMA / UN UNIVERS EN CONSTRUCTION</span><span>CONÇU AVEC CURIOSITÉ <span aria-hidden="true">✳</span></span>
      </footer>
    </div>
  );
}
