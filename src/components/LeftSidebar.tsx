import React from 'react'

export default function LeftSidebar({ onSelectTab }:{ onSelectTab:(t:any)=>void }) {
  return (
    <div className="p-4 space-y-4">
      <div>
        <input className="w-full rounded px-3 py-2 bg-slate-900 placeholder:text-slate-500" placeholder="Search molecules, genes..." />
      </div>

      <div className="bg-[rgba(255,255,255,0.02)] p-3 rounded neon">
        <h3 className="text-sm text-slate-300 mb-2">Molecules</h3>
        <ul className="space-y-2">
          <li className="p-2 rounded hover:bg-slate-800 cursor-pointer" onClick={()=>onSelectTab('Molecule')}>Amino Acids</li>
          <li className="p-2 rounded hover:bg-slate-800 cursor-pointer" onClick={()=>onSelectTab('Molecule')}>Proteins</li>
          <li className="p-2 rounded hover:bg-slate-800 cursor-pointer" onClick={()=>onSelectTab('Molecule')}>Enzymes</li>
        </ul>
      </div>

      <div className="bg-[rgba(255,255,255,0.02)] p-3 rounded">
        <h3 className="text-sm text-slate-300 mb-2">Genes</h3>
        <ul className="space-y-2">
          <li className="p-2 rounded hover:bg-slate-800 cursor-pointer" onClick={()=>onSelectTab('Gene')}>HBB</li>
          <li className="p-2 rounded hover:bg-slate-800 cursor-pointer">CFTR</li>
          <li className="p-2 rounded hover:bg-slate-800 cursor-pointer">TP53</li>
        </ul>
      </div>

      <div className="bg-[rgba(255,255,255,0.02)] p-3 rounded">
        <h3 className="text-sm text-slate-300 mb-2">Diseases</h3>
        <ul className="space-y-2">
          <li className="p-2 rounded bg-slate-800 text-slate-400">??????? (Locked)</li>
        </ul>
      </div>
    </div>
  )
}
