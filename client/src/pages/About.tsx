/*
 * ReUseNet AI — About page (Eco-Tech Glasshouse · medium animation)
 * ScrollReveal bands, BlurText headings, subtle SpotlightCards. Calmer than Home.
 */
import { Link } from "wouter";
import { ArrowRight, Target, Users, ShieldCheck, BrainCircuit, Recycle, Leaf } from "lucide-react";
import MarketingLayout from "@/components/MarketingLayout";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import BlurText from "@/components/reactbits/BlurText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { Button } from "@/components/ui/button";

const MISSION_IMG = "/manus-storage/reusenet-about-mission_1662b3f5.png";

const PILLARS = [
  { icon: <Target className="h-5 w-5" />, title: "Minimize Waste", desc: "Every uploaded resource is one less item in a landfill — extending product lifecycles across the community." },
  { icon: <Users className="h-5 w-5" />, title: "Support Communities", desc: "Government schools, NGOs, orphanages and rural centers get the resources they need, when they need them." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Fair & Transparent", desc: "Priority scores, demand levels and allocation decisions are visible to every participant." },
  { icon: <BrainCircuit className="h-5 w-5" />, title: "Intelligent by Design", desc: "AI recommendation, DSA prioritization and OS-safe allocation turn a listing board into a distribution engine." },
];

const TECH = [
  { label: "AI / ML", detail: "scikit-learn recommendation, demand prediction & priority scoring" },
  { label: "DSA", detail: "Priority Queue · Queue · Graph (Dijkstra) · Hash Map" },
  { label: "Operating Systems", detail: "Resource allocation · Scheduling · Synchronization · Deadlock prevention" },
  { label: "Full Stack", detail: "React + Vite frontend · FastAPI backend · MySQL · JWT auth" },
];

export default function About() {
  return (
    <MarketingLayout>
      <section className="pb-10 pt-28 md:pt-36">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full ai-chip px-3 py-1 text-xs font-semibold"><span>✦</span> Mission</p>
              <BlurText
                text="We believe nothing useful should ever be thrown away while someone still needs it."
                delay={60}
                className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
              />
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                ReUseNet AI is an <strong className="text-foreground">intelligent circular resource exchange platform</strong>. It connects people, companies, colleges and institutions who have reusable but unwanted resources with the schools, NGOs and community organizations that need them most.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Beyond listing items, the platform decides <strong className="text-foreground">who needs the resource most, which recipient is nearest, and which request should be prioritized</strong> — using AI, data structures and operating-system discipline working together.
              </p>
              <div className="mt-7">
                <Link href="/register">
                  <Button className="rounded-xl px-6 transition-transform active:scale-[0.97]">
                    Join the Network <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <img src={MISSION_IMG} alt="Teacher showing a donated laptop to students" className="w-full rounded-3xl shadow-2xl shadow-emerald-900/15" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">What Guides Us</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Four pillars of a circular future</h2>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <ScrollReveal key={p.title}>
                <SpotlightCard className="h-full glass-card p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">{p.icon}</div>
                  <h3 className="mb-2 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">The Science Behind It</p>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Computer science with a conscience.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                ReUseNet AI is built as a serious application of core computer science: a scoring model recommends recipients, a priority queue schedules requests, a graph maps donor–recipient geography for shortest-path matching, and synchronization rules guarantee that two simultaneous requests for the same item can never both succeed.
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {TECH.map((t) => (
                <SpotlightCard key={t.label} className="glass-card p-5">
                  <p className="font-display text-sm font-bold text-primary">{t.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.detail}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
          <ScrollReveal>
            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-xl shadow-emerald-900/5">
              <h3 className="font-display text-xl font-bold">Why it matters</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A circular economy depends on movement — resources flowing from those who no longer need them to those who do. ReUseNet AI removes the friction: intelligence handles the matching, prioritization and safe allocation so that people can focus on the outcome that matters.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Reduce waste", "Encourage reuse", "Support the underprivileged", "Improve distribution", "Circular economy"].map((tag) => (
                  <span key={tag} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <Recycle className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Every donation turns the loop.</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Laptops to classrooms. Books to libraries. Furniture to learning centers. One platform, one shared mission — a second life for everything reusable.
            </p>
            <div className="mt-7">
              <Link href="/browse">
                <Button size="lg" className="rounded-xl px-7 transition-transform active:scale-[0.97]">
                  Explore the Network <Leaf className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </MarketingLayout>
  );
}
