import React from 'react'

type StatsCardProps = {
  children: React.ReactNode
}

function StatsCard({children}:StatsCardProps) {
  return (
    <div className="h-24 bg-emerald-600/20 backdrop-blur-lg border border-emerald-400/30 
    rounded-2xl shadow-2xl px-4 py-2 hover:scale-110 transition duration-500">
      {children}
    </div>
  )
}

export default StatsCard
