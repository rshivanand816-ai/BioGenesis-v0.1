import React from 'react'
import HumanBodyPanel from './HumanBodyPanel'
import { Disease } from '../App'

export default function RightSidebar({ inventory, xp }:{ inventory:Disease[], xp:number }) {
  return (
    <div className="space-y-6">
      <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded">
        <h3 className="text-sm text-slate-300">Health Metrics</h3>
        <Metric label="Oxygen Transport" value={inventory.find(d=>d.id==='sickle_cell') ? 40 : 100} color="bg-emerald"/>
        <Metric label="Blood Flow" value={inventory.find(d=>d.id==='sickle_cell') ? 60 : 100} color="bg-neonBlue"/>
        <Metric label="Cell Integrity" value={inventory.find(d=>d.id==='sickle_cell') ? 55 : 100} color="bg-bioPurple"/>
      </div>

      <HumanBodyPanel affected={inventory.find(d=>d.id==='sickle_cell') ? ['Blood','Lungs'] : []} />
      <div className="bg-[rgba(255,255,255,0.02)] p-3 rounded text-sm text-slate-400">
        <div>Level: {Math.floor(xp/100)+1}</div>
        <div className="mt-2">Missions: 1 — Discover Sickle Cell Anemia</div>
      </div>
    </div>
  )
}

function Metric({label,value,color}:{label:string,value:number,color:string}) {
  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs text-slate-300">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="w-full h-3 bg-slate-800 rounded mt-1 overflow-hidden">
        <div style={{width:`${value}%`}} className={`${color} h-3 rounded transition-all`} />
      </div>
    </div>
  )
}
