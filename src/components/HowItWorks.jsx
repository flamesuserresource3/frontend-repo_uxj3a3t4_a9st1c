import { CheckCircle2, ClipboardList, Send, Award } from 'lucide-react';

const steps = [
  {
    title: 'Apply',
    icon: Send,
    desc: 'Share your background and interests. Keep it brief—your work speaks loudest.'
  },
  {
    title: 'Assignment',
    icon: ClipboardList,
    desc: 'Receive a focused brief reflecting real problems. You’ll have a week to complete it.'
  },
  {
    title: 'Review',
    icon: CheckCircle2,
    desc: 'Engineers review your approach, trade-offs, and clarity—not just final scores.'
  },
  {
    title: 'Offer',
    icon: Award,
    desc: 'Top candidates meet the team, discuss impact, and receive an offer.'
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How assignments work</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Purpose-built exercises aligned with each role ensure a fair, practical evaluation.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
