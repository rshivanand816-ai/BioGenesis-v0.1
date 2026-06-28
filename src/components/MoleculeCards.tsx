import React from 'react'

const molecules = [
  { name: 'Glutamic Acid', short: 'Polar, negatively charged', id: 'glu' },
  { name: 'Valine', short: 'Nonpolar, aliphatic', id: 'val' },
]

export default function MoleculeCards(){
  return (
    <div className="grid grid-cols-2 gap-4">
      {molecules.map(m => (
        <div key={m.id} className="p-4 rounded-lg bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 hover:scale-105 transform transition neon">
          <div className="text-lg font-semibold">{m.name}</div>
          <div className="text-sm text-slate-400">{m.short}</div>
          <div className="mt-3 flex justify-end">
            <button className="px-3 py-1 rounded bg-cyanNeon text-black font-medium">Select</button>
          </div>
        </div>
      ))}
    </div>
  )
}
