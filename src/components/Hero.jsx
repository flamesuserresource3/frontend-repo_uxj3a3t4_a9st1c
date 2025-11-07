import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-blue-700 text-xs font-medium border border-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Now hiring across Quantum, ML, and Systems
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Build the future of quantum computing at <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">bloq</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-xl">
            Tackle real-world problems with qubits, compilers, and control systems. Each role includes a technical assignment to showcase your approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#roles" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:opacity-95 transition">Explore roles</a>
            <a href="#how" className="px-5 py-3 rounded-lg bg-white/80 backdrop-blur border border-slate-200 text-slate-800 font-medium hover:bg-white transition">How assignments work</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </section>
  );
}
