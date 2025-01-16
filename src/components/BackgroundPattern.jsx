"use client"
import React from 'react'

export default function Backgroundpattern() {
  return (
    <div  style={{position:"relative", top:"0",zIndex:"-1"}}>
    
    <div style={{width:"100vw", height:"100vh",position:"fixed", top:"-600px",zIndex:"-1"}} className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden">
      <div style={{width:"100vw", height:"100vh"}} className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent,hsl(var(--background)))]"></div>
      <svg style={{width:"100vw", height:"100vh"}} className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    
    
    
   
   
  </div>

  )
}