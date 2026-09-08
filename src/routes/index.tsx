import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowUpRight, Camera, GraduationCap, Instagram, Linkedin, Mail, Mic2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/kavish-portrait.jpg";
import singing from "@/assets/creative-singing.jpg";
import lifestyle from "@/assets/creative-lifestyle.jpg";
import education from "@/assets/creative-education.jpg";
import ideas from "@/assets/creative-ideas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Kavish Arora | Student, Singer & Creative" },
    { name: "description", content: "Meet Kavish Arora — a B.Tech student at JECRC University exploring singing, content, and creative digital experiences." },
    { property: "og:title", content: "Kavish Arora | Student, Singer & Creative" },
    { property: "og:description", content: "A personal journey across technology, singing, creativity, and meaningful digital experiences." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const projects = [
  { title: "Singing", note: "Finding emotion in every note.", image: singing, className: "md:col-span-2 md:row-span-2" },
  { title: "Lifestyle Content", note: "Everyday moments, thoughtfully framed.", image: lifestyle, className: "" },
  { title: "Educational Content", note: "Making learning feel clear and inviting.", image: education, className: "" },
  { title: "Creative Experiments", note: "Ideas shaped through color and curiosity.", image: ideas, className: "md:col-span-2" },
];

function Index() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="overflow-hidden">
      <header className="section-shell absolute inset-x-0 top-0 z-20 flex h-24 items-center justify-between">
        <a href="#top" className="font-display text-2xl text-foreground">KA<span className="text-primary">.</span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-primary" href="#about">About</a>
          <a className="transition-colors hover:text-primary" href="#work">Work</a>
          <a className="transition-colors hover:text-primary" href="#journey">Journey</a>
          <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
        </nav>
        <a href="#contact" aria-label="Contact Kavish" className="grid size-11 place-items-center rounded-full border border-primary/20 bg-background/55 transition hover:-translate-y-0.5 hover:border-primary"><ArrowUpRight className="size-4" /></a>
      </header>

      <section id="top" className="relative min-h-[94svh] pt-24">
        <div className="pointer-events-none absolute left-[8%] top-[20%] size-24 rotate-45 rounded-[2rem] border border-primary/10 bg-lavender/20 blur-sm" />
        <div className="pointer-events-none absolute bottom-[12%] right-[4%] size-52 rounded-full bg-peach/20 blur-3xl" />
        <div className="section-shell grid min-h-[calc(94svh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative z-10 animate-reveal">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-primary"><span className="h-px w-10 bg-primary/50" /> Student · Creator · Singer</p>
            <h1 className="max-w-3xl font-display text-6xl leading-[.96] tracking-normal text-foreground sm:text-7xl lg:text-[6.25rem]">Hi, I’m<br/><span className="italic text-primary">Kavish Arora</span></h1>
            <p className="mt-7 text-lg font-medium text-foreground/80">B.Tech Student <span className="text-lavender">◆</span> Content Creator <span className="text-peach">◆</span> Creative Thinker</p>
            <p className="mt-5 max-w-xl leading-8 text-muted-foreground">A B.Tech student at JECRC University, Alwar, passionate about singing, creativity, communication, and building meaningful digital experiences.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="portfolio" size="portfolio"><a href="#journey">Explore My Journey <ArrowDownRight /></a></Button>
              <Button asChild variant="portfolioOutline" size="portfolio"><a href="#contact">Let’s Connect</a></Button>
            </div>
            <p className="mt-10 font-script text-3xl text-primary/80">Creating. Learning. Growing.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[31rem] lg:mr-0">
            <div className="soft-gradient organic-frame absolute -inset-5 animate-float blur-xl" />
            <div className="organic-frame relative aspect-[4/5] overflow-hidden border border-background/70 shadow-[var(--shadow-card)]">
              <img src={portrait} width={1280} height={1600} alt="Editorial portrait representing Kavish Arora" className="h-full w-full object-cover" />
            </div>
            <div className="glass-panel absolute -bottom-5 -left-5 rounded-lg px-5 py-3 text-sm"><span className="font-display text-lg">Curious by nature.</span><br/><span className="text-muted-foreground">Creative by choice.</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32">
        <div className="section-shell grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">01 — About</p><h2 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">A Little<br/><span className="italic text-primary">About Me</span></h2></div>
          <div>
            <p className="max-w-3xl font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl">Hi, I’m Kavish Arora, a B.Tech student at JECRC University, Alwar. Alongside my academic journey, I explore my creative side through content creation.</p>
            <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">I enjoy transforming ideas into engaging creative work, experimenting with visual storytelling, and continuously learning new things. I’m passionate about creativity and communication that connects with people.</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[[GraduationCap,"B.Tech Student"],[Sparkles,"Creative Thinker"],[ArrowUpRight,"Lifelong Learner"],[Mic2,"Singer"]].map(([Icon,label]) => <div key={label as string} className="glass-panel flex items-center gap-4 rounded-lg p-5 transition duration-300 hover:-translate-y-1"><span className="grid size-10 place-items-center rounded-full bg-secondary text-primary"><Icon className="size-4" /></span><span className="font-semibold">{label as string}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-foreground py-24 text-primary-foreground sm:py-32">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-lavender">02 — Selected work</p><h2 className="mt-4 font-display text-5xl sm:text-6xl">My Creative Space</h2><p className="mt-3 text-primary-foreground/60">Ideas turned into creativity.</p></div><Button asChild variant="portfolioOutline" size="portfolio"><a href="#contact">View My Work <ArrowUpRight /></a></Button></div>
          <div className="grid auto-rows-[17rem] gap-4 md:grid-cols-4">
            {projects.map((project) => <article key={project.title} className={`group relative overflow-hidden rounded-lg ${project.className}`}><img src={project.image} width={1200} height={900} loading="lazy" alt={`${project.title} creative work`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent"/><div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 transition duration-300 group-hover:translate-y-0"><h3 className="font-display text-2xl">{project.title}</h3><p className="mt-1 text-sm text-primary-foreground/70 opacity-0 transition group-hover:opacity-100">{project.note}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="journey" className="py-24 sm:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">03 — Timeline</p><h2 className="mt-4 font-display text-5xl sm:text-6xl">My Journey<br/><span className="italic text-primary">So Far</span></h2></div><div className="relative border-l border-primary/20 pl-8 sm:pl-12">{[["Now","B.Tech Student","JECRC University, Alwar"],["Exploring","Creativity Creator","Discovering creativity, storytelling, and singing"],["Looking ahead","Future Goals","Growing professionally, creatively, and personally"]].map(([time,title,copy]) => <article key={title} className="relative border-b border-border py-8 first:pt-0 last:border-0"><span className="absolute -left-[2.36rem] top-2 size-3 rotate-45 border border-primary bg-background sm:-left-[3.36rem]"/><p className="text-xs font-bold uppercase tracking-[.16em] text-primary">{time}</p><h3 className="mt-3 font-display text-3xl">{title}</h3><p className="mt-2 text-muted-foreground">{copy}</p></article>)}</div></div></section>

      <section className="soft-gradient py-24 sm:py-32"><div className="section-shell text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">04 — Interests</p><h2 className="mt-4 font-display text-5xl sm:text-6xl">What I Love</h2><div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">{["Content Creation","Social Media","Communication","Digital Trends","Photography","Learning & Growth","Singing"].map((item) => <span key={item} className="glass-panel rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-primary-foreground">{item}</span>)}</div><blockquote className="mx-auto mt-20 max-w-4xl font-display text-4xl leading-tight italic text-foreground sm:text-6xl">“Learning with purpose. <span className="text-primary">Creating with passion.</span> Growing every day.”</blockquote></div></section>

      <section id="contact" className="py-24 sm:py-32"><div className="section-shell grid gap-14 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">05 — Say hello</p><h2 className="mt-4 max-w-xl font-display text-5xl leading-tight sm:text-6xl">Let’s Create Something <span className="italic text-primary">Meaningful</span></h2><p className="mt-6 max-w-lg leading-8 text-muted-foreground">Whether you’d like to sing, connect, or simply say hello, I’d love to hear from you.</p><div className="mt-9 flex gap-3">{[[Mail,"Email"],[Instagram,"Instagram"],[Linkedin,"LinkedIn"]].map(([Icon,label]) => <a key={label as string} href="#contact-form" aria-label={label as string} title={`${label as string} details coming soon`} className="glass-panel grid size-12 place-items-center rounded-full transition hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"><Icon className="size-5" /></a>)}</div></div><form id="contact-form" onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 sm:p-8"><div className="grid gap-6 sm:grid-cols-2"><label className="text-sm font-semibold">Name<input required name="name" className="mt-2 h-12 w-full rounded-md border border-input bg-background/60 px-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Your name" /></label><label className="text-sm font-semibold">Email<input required type="email" name="email" className="mt-2 h-12 w-full rounded-md border border-input bg-background/60 px-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="you@example.com" /></label></div><label className="mt-6 block text-sm font-semibold">Message<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-md border border-input bg-background/60 p-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Tell me what you have in mind..." /></label><div className="mt-6 flex items-center gap-4"><Button type="submit" variant="portfolio" size="portfolio">Send Message <ArrowUpRight /></Button>{sent && <p role="status" className="text-sm text-primary">Thanks — your message is ready to be connected.</p>}</div></form></div></section>

      <footer className="border-t border-border py-10"><div className="section-shell flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"><div><p className="font-display text-2xl">Kavish Arora</p><p className="mt-1 text-xs uppercase tracking-[.18em] text-muted-foreground">B.Tech Student · Creator</p></div><p className="font-display italic text-muted-foreground">“Creating a little something every day.”</p><p className="text-xs text-muted-foreground">© 2026 Kavish Arora</p></div></footer>
    </main>
  );
}
