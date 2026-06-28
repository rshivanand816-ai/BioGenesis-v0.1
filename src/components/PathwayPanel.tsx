import React, { useState, useEffect } from 'react'

export default function PathwayPanel({ onChainComplete }:{ onChainComplete:()=>void }) {
  const [geneMutated, setGeneMutated] = useState(false)
  const [aminoAcid, setAminoAcid] = useState<'Glu'|'Val'>('Glu')
  const [activatedStage, setActivatedStage] = useState<number>(0)

  useEffect(()=>{
    // step activation logic
    if (geneMutated && aminoAcid === 'Val') {
      // animate progression through pathway stages
      let i=0
      const id = setInterval(()=>{
        i++
        setActivatedStage(i)
        if (i>=6) {
          clearInterval(id)
          // chain complete -> discovery
          onChainComplete()
        }
      }, 600)
      return ()=>clearInterval(id)
    } else {
      setActivatedStage( geneMutated ? 1 : 0 )
    }
  },[geneMutated, aminoAcid])

  return (
    <div className="p-4 rounded bg-[rgba(255,255,255,0.02)]">
      <div className="flex gap-4 items-center mb-4">
        <div>
          <label className="text-sm text-slate-300">HBB Gene</label>
          <div className="mt-1 flex gap-2">
            <button className={`px-3 py-1 rounded ${geneMutated ? 'bg-emerald text-black' : 'bg-slate-800'}`} onClick={()=>setGeneMutated(true)}>Mutate</button>
            <button className="px-3 py-1 rounded bg-slate-700" onClick={()=>setGeneMutated(false)}>Reset</button>
          </div>
        </div>

        <div>
          <label className="text-sm text-slate-300">Amino Acid</label>
          <div className="mt-1 flex gap-2">
            <button onClick={()=>setAminoAcid('Glu')} className={`px-3 py-1 rounded ${aminoAcid==='Glu' ? 'bg-neonBlue' : 'bg-slate-800'}`}>Glutamic Acid</button>
            <button onClick={()=>setAminoAcid('Val')} className={`px-3 py-1 rounded ${aminoAcid==='Val' ? 'bg-emerald text-black' : 'bg-slate-800'}`}>Valine</button>
          </div>
        </div>
      </div>

      {/* pathway nodes */}
      <div className="flex items-center gap-6 justify-between">
        {[
          'HBB Gene',
          'Glutamic Acid',
          'Valine',
          'Hemoglobin Change',
          'RBC Sickling',
          'Oxygen Transport ↓'
        ].map((label, idx) => {
          const active = activatedStage > idx
          return (
            <div key={label} className="flex-1 flex flex-col items-center">
              <div className={`w-36 h-16 rounded-md flex items-center justify-center text-center ${active ? 'bg-gradient-to-tr from-cyanNeon to-neonBlue text-black animate-[pulseGlow_1.6s_infinite]' : 'bg-slate-900 text-slate-300'} border border-slate-700`}>
                <div className="text-sm">{label}</div>
              </div>
              {idx < 5 && <div className={`h-1 w-full ${active ? 'bg-cyanNeon' : 'bg-slate-800'} mt-2 rounded`}></div>}
            </div>
          )
        })}
      </div>
      <div className="mt-4 text-sm text-slate-400">Tip: Mutate HBB and switch Glutamic Acid → Valine to complete the chain.</div>
    </div>
  )
}
