import React, { useState } from 'react'

export default function GenePanel(){
  const [mutated,setMutated]=useState(false)
  return (
    <div className="p-4 bg-[rgba(255,255,255,0.02)] rounded">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">HBB — Hemoglobin Beta Gene</div>
          <div className="text-sm text-slate-400">Toggle mutation to change codon GAG → GTG</div>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded ${mutated ? 'bg-emerald text-black' : 'bg-slate-800'}`}> {mutated ? 'Mutated' : 'Normal'}</div>
          <button onClick={()=>setMutated(v=>!v)} className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600">Toggle</button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-6">
          <div className="p-3 rounded bg-slate-900">DNA: <span className="ml-2 font-mono">{mutated ? '...G T G ...' : '...G A G ...'}</span></div>
          <div className="p-3 rounded bg-slate-900">Amino Acid: <span className="ml-2">{mutated ? 'Valine' : 'Glutamic Acid'}</span></div>
        </div>
      </div>
    </div>
  )
}
