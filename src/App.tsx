import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import CenterWorkspace from './components/CenterWorkspace'
import RightSidebar from './components/RightSidebar'

export type Disease = {
  id: string
  name: string
  discoveredAt: string
  description?: string
}

export default function App() {
  const [selectedTab, setSelectedTab] = useState<'Molecule'|'Gene'|'Disease'|'Missions'|'Encyclopedia'|'Inventory'>('Molecule')
  const [inventory, setInventory] = useState<Disease[]>([])
  const [xp, setXp] = useState<number>(0)

  useEffect(() => {
    const saved = localStorage.getItem('biogenesis_inventory')
    const xpSaved = localStorage.getItem('biogenesis_xp')
    if (saved) setInventory(JSON.parse(saved))
    if (xpSaved) setXp(Number(xpSaved))
  }, [])

  useEffect(() => {
    localStorage.setItem('biogenesis_inventory', JSON.stringify(inventory))
  }, [inventory])

  useEffect(() => {
    localStorage.setItem('biogenesis_xp', String(xp))
  }, [xp])

  function onDiscover(d: Disease, rewardXp = 100) {
    if (!inventory.find(x => x.id === d.id)) {
      setInventory(prev => [d, ...prev])
      setXp(prev => prev + rewardXp)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header selected={selectedTab} onSelect={setSelectedTab} xp={xp} />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 border-r border-slate-800 overflow-auto">
          <LeftSidebar onSelectTab={setSelectedTab} />
        </div>
        <div className="w-1/2 p-6 overflow-auto">
          <CenterWorkspace
            selectedTab={selectedTab}
            onDiscover={onDiscover}
            inventory={inventory}
          />
        </div>
        <div className="w-1/4 border-l border-slate-800 p-4 overflow-auto">
          <RightSidebar inventory={inventory} xp={xp} />
        </div>
      </div>
    </div>
  )
}
