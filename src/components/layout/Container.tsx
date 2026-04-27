import React from 'react'

type ContainerProps = {
  children: React.ReactNode,
  className?: string,
  centered?: boolean
}

function Container({children,className,centered = true}:ContainerProps) {
  return (
    <div className={`max-w-7xl px-4 sm:px-6 lg:px-8 ${className ?? ""}
     ${centered ? "mx-auto" : ""}
    `} >
      {children}
    </div>
  )
}

export default Container