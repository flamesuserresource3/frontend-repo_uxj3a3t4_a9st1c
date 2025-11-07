export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">About bloq</h3>
            <p className="mt-2 text-slate-600 max-w-xl">
              We’re a quantum computing company building practical systems that create outsized impact in science and industry. We value clarity, rigor, and pace.
            </p>
          </div>
          <div className="md:text-right text-slate-600">
            <p>© {new Date().getFullYear()} bloq. All rights reserved.</p>
            <p className="text-sm">Made with curiosity and a lot of qubits.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
