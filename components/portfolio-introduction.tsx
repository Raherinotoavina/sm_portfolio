import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function PortfolioIntroduction() {
  return (
    <main id="contenu" className="mx-auto flex min-h-svh w-full max-w-4xl flex-col justify-center gap-8 px-6 py-20 sm:px-12">
      <p className="text-sm font-medium tracking-widest text-muted-foreground">{profile.alias} / Portfolio</p>
      <div className="space-y-5">
        <p className="text-lg text-muted-foreground">{profile.role}</p>
        <h1 className="break-words text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">{profile.fullName}</h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.introduction}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild><a href={`mailto:${profile.email}`}>Me contacter</a></Button>
        <Button asChild variant="outline"><a href={profile.github}>Voir mon GitHub</a></Button>
      </div>
    </main>
  );
}
