import React from 'react'

export default function Header({ selected, onSelect, xp }:{ selected:string, onSelect:(t:any)=>void, xp:number }) {
  const tabs = ['Molecule','Gene','Disease','Missions','Encyclopedia','Inventory']
  return (
    <header className="w-full p-4 border-b border-slate-800 flex items-center justify-between bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-transparent">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-tr from-neonBlue to-cyanNeon rounded-md flex items-center justify-center neon">
          <span className="text-black font-bold">BG</span>
        </div>
        <div className="text-xl font-semibold">BioGenesis</div>
      </div>

      <nav className="flex gap-4 items-center">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => onSelect(t)}
            className={`px-3 py-1 rounded-md ${selected===t ? 'bg-[rgba(68,191,255,0.12)] ring-1 ring-cyanNeon' : 'hover:bg-[rgba(255,255,255,0.02)]'}`}
          >
            {t.startsWith('Molecule') ? '🧬 ' : ''}{t}
          </button>
        ))}
        <div className="ml-6 flex items-center gap-3">
          <div className="text-sm">XP: <span className="font-medium">{xp}</span></div>
          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">U</div>
          <button className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700">⚙</button>
        </div>
      </nav>
    </header>
  )
}
