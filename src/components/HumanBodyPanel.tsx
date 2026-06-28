import React from 'react'

export default function HumanBodyPanel({ affected }:{ affected:string[] }) {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded">
      <div className="text-sm text-slate-300 font-semibold mb-2">Body Systems</div>
      <div className="flex gap-3 items-center">
        <div className={`w-20 h-28 rounded bg-slate-900 flex items-center justify-center ${affected.includes('Blood') ? 'ring-2 ring-red-500' : ''}`}>Blood</div>
        <div className={`w-20 h-28 rounded bg-slate-900 flex items-center justify-center ${affected.includes('Heart') ? 'ring-2 ring-red-500' : ''}`}>Heart</div>
        <div className={`w-20 h-28 rounded bg-slate-900 flex items-center justify-center ${affected.includes('Lungs') ? 'ring-2 ring-red-500' : ''}`}>Lungs</div>
      </div>
    </div>
  )
}
