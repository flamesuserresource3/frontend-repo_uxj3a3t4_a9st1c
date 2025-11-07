import { Briefcase, Cpu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold tracking-tight text-slate-900">bloq</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600">Quantum Hiring</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#roles" className="hover:text-blue-600 transition-colors">Open Roles</a>
            <a href="#how" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          </nav>

          <a
            href="#roles"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm shadow hover:opacity-95 transition"
          >
            <Briefcase className="h-4 w-4" />
            View Positions
          </a>
        </div>
      </div>
    </header>
  );
}
