import React from 'react'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass sticky top-4 mx-4 px-8 py-4 z-50 flex justify-between items-center" style={{ borderRadius: '40px', marginTop: '20px' }}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-sky-500/20">C</div>
          <span className="text-xl font-bold tracking-tight">Caja <span className="gradient-text">Familiar</span></span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#" className="hover:text-sky-400 transition-colors">Socios</a>
          <a href="#" className="hover:text-sky-400 transition-colors">Préstamos</a>
          <a href="#" className="hover:text-sky-400 transition-colors">Aportes</a>
          <button className="btn-primary">Acceso Tesorería</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 flex flex-col items-center text-center animate-fade-in">
        <div className="inline-block px-4 py-1.5 mb-6 glass text-xs font-semibold tracking-widest uppercase border border-sky-500/30 text-sky-400" style={{ borderRadius: '100px' }}>
          Sistema Financiero Cooperativo
        </div>
        <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
          Gestiona tus ahorros con <br />
          <span className="gradient-text">Seguridad y Claridad</span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-12">
          Diseñado para cooperativas que buscan transparencia. Control de socios, roles, aportes y préstamos en un solo lugar con estándares de seguridad bancaria.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary px-10 py-4 text-lg">Empezar Ahora</button>
          <button className="glass px-10 py-4 text-lg font-semibold hover:bg-white/5 transition-colors">Ver Documentación</button>
        </div>

        {/* Floating Mockup Preview */}
        <div className="mt-20 glass w-full max-w-5xl aspect-video relative overflow-hidden p-2 rounded-2xl border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 pointer-events-none"></div>
          <div className="w-full h-full bg-[#111] rounded-xl flex items-center justify-center border border-white/5">
            <div className="grid grid-cols-3 gap-6 p-12 w-full">
              {[
                { label: 'Socios Activos', value: '124', growth: '+12%', color: 'var(--accent-primary)' },
                { label: 'Total Aportes', value: '$45,280', growth: '+8%', color: 'var(--accent-secondary)' },
                { label: 'Préstamos Vigentes', value: '18', growth: '4.2%', color: '#10b981' }
              ].map((item, i) => (
                <div key={i} className="glass p-8 text-left card-hover">
                  <p className="text-xs text-muted mb-2 uppercase tracking-wider">{item.label}</p>
                  <h3 className="text-3xl mb-4 font-bold">{item.value}</h3>
                  <div className="text-xs font-bold" style={{ color: item.color }}>↑ {item.growth} este mes</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-white/5 mt-20">
        <p className="text-muted text-sm">&copy; 2026 Caja Ahorro Familiar. Todos los derechos reservados.</p>
        <div className="mt-4 flex justify-center gap-6 text-xs text-muted">
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Seguridad</a>
          <a href="#" className="hover:text-white">Soporte</a>
        </div>
      </footer>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[150px] rounded-full"></div>
      </div>
    </div>
  )
}

export default App
