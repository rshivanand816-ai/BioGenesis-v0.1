import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Disease } from '../App'

export default function PopupDiscovery({ disease, onClose }:{ disease:Disease, onClose:()=>void }) {
  useEffect(()=>{
    const id = setTimeout(()=> onClose(), 3500)
    return ()=>clearTimeout(id)
  },[])

  return (
    <div className="fixed inset-0 flex items-center justify-center discovery-popup">
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ scale:0.6, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ type:'spring', stiffness:260, damping:20 }}
        className="relative z-10 w-[640px] p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-cyanNeon"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-md bg-emerald flex items-center justify-center text-black font-bold text-xl">🎉</div>
          <div>
            <div className="text-2xl font-bold">{disease.name}</div>
            <div className="text-sm text-slate-400">Category: Genetic Blood Disorder</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-300">Added to Encyclopedia • Inventory</div>
          <div className="text-sm font-medium text-cyanNeon">XP +100</div>
        </div>
      </motion.div>
    </div>
  )
}
