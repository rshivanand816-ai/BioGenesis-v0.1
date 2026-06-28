import React, { useState } from 'react'
import PathwayPanel from './PathwayPanel'
import PopupDiscovery from './PopupDiscovery'
import MoleculeCards from './MoleculeCards'
import GenePanel from './GenePanel'
import { Disease } from '../App'

export default function CenterWorkspace({ selectedTab, onDiscover, inventory }:{
  selectedTab:string,
  onDiscover:(d:Disease)=>void,
  inventory:Disease[]
}) {
  const [discoveryOpen, setDiscoveryOpen] = useState(false)
  const [lastDiscovery, setLastDiscovery] = useState<Disease|undefined>(undefined)

  // handler called by PathwayPanel when chain is completed
  function handleDiscovery() {
    const disease: Disease = {
      id: 'sickle_cell',
      name: 'Sickle Cell Anemia',
      discoveredAt: new Date().toISOString(),
      description: 'Genetic blood disorder caused by HBB mutation leading to RBC sickling.'
    }
    onDiscover(disease)
    setLastDiscovery(disease)
    setDiscoveryOpen(true)
  }

  return (
    <div>
      {selectedTab === 'Molecule' && <MoleculeCards />}
      {selectedTab === 'Gene' && <GenePanel />}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Biological Pathway</h2>
        <PathwayPanel onChainComplete={handleDiscovery} />
      </div>

      {discoveryOpen && lastDiscovery && (
        <PopupDiscovery disease={lastDiscovery} onClose={()=>setDiscoveryOpen(false)} />
      )}
    </div>
  )
}
