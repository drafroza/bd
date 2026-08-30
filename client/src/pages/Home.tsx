import { useEffect, useState } from 'react';
import { ArrowUpRight, Award, Heart, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const statistics = [
  { icon: Users, label: 'Patients cared for', value: 500, suffix: '+' },
  { icon: Heart, label: 'Years of experience', value: 1.5, suffix: '+' },
  { icon: Award, label: 'Academic awards', value: 4, suffix: '+' },
];

export default function Home() {
  const [counters, setCounters] = useState(statistics.map(() => 0));

  useEffect(() => {
    const steps = 60;
    let currentStep = 0;
    const timer = window.setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;
      setCounters(statistics.map((stat) => {
        const value = stat.value * progress;
        return stat.value % 1 === 0 ? Math.floor(value) : Math.floor(value * 10) / 10;
      }));
      if (currentStep >= steps) {
        window.clearInterval(timer);
        setCounters(statistics.map((stat) => stat.value));
      }
    }, 32);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-black bg-white pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="container">
            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]"><span className="h-3 w-3 bg-[#e30613]" aria-hidden="true" /> 01 / Medical profile</div>
                <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.09em] text-[#111111] md:text-8xl lg:text-[8.5rem]">Care with clarity.</h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-[#4b4b4b] md:text-xl">Dr. Mst. Afroza Akter Nishy is a registered medical practitioner focused on evidence-based women&apos;s healthcare, empathy, and continuous learning.</p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#/contact" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#e30613] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></a>
                  <a href="#/about" className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#111111] transition-colors duration-200 hover:bg-[#111111] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]">Read biography</a>
                </div>
              </div>

              <div className="relative min-h-[360px] overflow-hidden bg-[#111111] md:min-h-[480px]">
                <div className="absolute left-0 top-0 z-10 h-14 w-14 bg-[#e30613]" aria-hidden="true" />
                <img src="/images/homepage-logo.jpg" alt="Dr. Afroza Akter Nishy" className="h-full min-h-[360px] w-full object-cover grayscale md:min-h-[480px]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-white"><span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/70">MBBS · FCPS Part-I</span><span className="text-4xl font-black tracking-[-0.08em] text-[#e30613]">DA</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black bg-[#111111] py-10 text-white md:py-14">
          <div className="container grid grid-cols-1 divide-y divide-white/25 md:grid-cols-3 md:divide-x md:divide-y-0">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return <div key={stat.label} className="flex items-center gap-5 py-6 md:px-8 md:py-2 first:md:pl-0 last:md:pr-0"><Icon size={25} className="shrink-0 text-[#e30613]" aria-hidden="true" /><div><p className="text-4xl font-black tracking-[-0.06em] md:text-5xl">{counters[index]}{stat.suffix}</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/60">{stat.label}</p></div></div>;
            })}
          </div>
        </section>

        <section className="border-b border-black bg-white py-16 md:py-28">
          <div className="container grid grid-cols-1 gap-12 md:grid-cols-[0.52fr_1fr] md:gap-20">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]">02 / Approach</p>
            <div><h2 className="max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.07em] text-[#111111] md:text-6xl">A rigorous foundation for human care.</h2><div className="mt-10 grid grid-cols-1 gap-8 border-t border-black pt-8 md:grid-cols-2"><p className="text-base leading-7 text-[#4b4b4b]">With an academic foundation from <strong className="text-[#111111]">Rajshahi Medical College</strong> and current specialization in Obstetrics &amp; Gynaecology, the work stays grounded in evidence and attentive communication.</p><p className="text-base leading-7 text-[#4b4b4b]">Clinical experience includes maternal-fetal medicine, obstetric emergencies, and a comprehensive 52-week rotation at Rajshahi Medical College Hospital.</p></div><a href="#/about" className="mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-[#111111] underline decoration-[#e30613] decoration-2 underline-offset-8 transition-colors hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]">More about the practice <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="border-b border-black bg-[#f4f4f4] py-16 md:py-24">
          <div className="container"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]">03 / Highlights</p><h2 className="text-4xl font-black tracking-[-0.07em] text-[#111111] md:text-6xl">What informs the work.</h2></div><p className="max-w-xs text-sm leading-6 text-[#4b4b4b]">A developing professional profile shaped by clinical practice, education, and service.</p></div><div className="grid grid-cols-1 gap-px border border-black bg-black md:grid-cols-3">{[
            { number: '01', title: 'Clinical experience', description: 'Part-time Medical Officer at Hitech Multicare Hospital and intern at RMCH with a 52-week clinical rotation.' },
            { number: '02', title: 'Qualifications', description: 'MBBS from Rajshahi Medical College and FCPS Part-I in Obstetrics & Gynaecology.' },
            { number: '03', title: 'Recognition', description: 'Best Performer Award RMCH, DBBL Merit Scholarship, and government board scholarships.' },
          ].map((item) => <div key={item.number} className="group bg-white p-7 transition-colors duration-200 hover:bg-[#e30613] hover:text-white md:p-9"><p className="text-xs font-bold tracking-[0.16em] text-[#e30613] group-hover:text-white">{item.number}</p><h3 className="mt-16 text-2xl font-black tracking-[-0.06em] text-[#111111] group-hover:text-white md:mt-24">{item.title}</h3><p className="mt-4 text-sm leading-6 text-[#4b4b4b] group-hover:text-white/85">{item.description}</p></div>)}</div></div>
        </section>

        <section className="bg-[#e30613] py-16 text-white md:py-24"><div className="container grid grid-cols-1 gap-8 md:grid-cols-[0.55fr_1fr] md:gap-16"><p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/75">04 / Next step</p><div><h2 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.08em] md:text-7xl">Make the next conversation count.</h2><p className="mt-7 max-w-xl text-base leading-7 text-white/85">For medical enquiries, professional collaboration, or a thoughtful exchange, the contact page is the best place to begin.</p><a href="#/contact" className="mt-9 inline-flex min-h-14 items-center gap-3 bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]">Go to contact <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
