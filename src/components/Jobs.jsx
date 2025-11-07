import { Code2, CircuitBoard, Atom, ArrowRight } from 'lucide-react';

const roles = [
  {
    id: 'quantum-algorithms-engineer',
    title: 'Quantum Algorithms Engineer',
    icon: Atom,
    level: 'Senior',
    location: 'Remote / SF',
    summary:
      'Design and analyze quantum algorithms, partner with compiler and hardware teams to push qubit efficiency.',
    assignment:
      'Implement and evaluate a variational algorithm on noisy simulators; discuss trade-offs and error mitigation.',
  },
  {
    id: 'quantum-compiler-engineer',
    title: 'Quantum Compiler Engineer',
    icon: Code2,
    level: 'Mid–Senior',
    location: 'Remote / SF',
    summary:
      'Optimize IR, scheduling, and routing across heterogeneous backends to minimize depth and error.',
    assignment:
      'Optimize a provided circuit suite for depth and fidelity; submit diffs, benchmarks, and rationale.',
  },
  {
    id: 'hardware-control-systems',
    title: 'Hardware Control Systems',
    icon: CircuitBoard,
    level: 'Senior',
    location: 'Remote / Boston',
    summary:
      'Build low-latency control stacks and calibration flows for superconducting qubits.',
    assignment:
      'Design a calibration routine outline for a new qubit; provide pseudo-code, metrics, and failure modes.',
  },
];

export default function Jobs() {
  return (
    <section id="roles" className="relative py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Open Roles</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Every application includes a focused technical assignment that mirrors real work. Show us your thinking.
            </p>
          </div>
          <a href="#how" className="hidden md:inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
            How assignments work <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div key={role.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
                      <p className="text-xs text-slate-500">{role.level} • {role.location}</p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-700">{role.summary}</p>

                <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 p-4">
                  <p className="text-sm"><span className="font-medium text-blue-700">Assignment:</span> {role.assignment}</p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href={`#apply-${role.id}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow hover:opacity-95 transition">Apply</a>
                  <a href="#how" className="px-4 py-2 rounded-lg border border-slate-200 text-slate-800 text-sm font-medium hover:bg-slate-50 transition">View details</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
