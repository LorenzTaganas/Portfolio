'use client'

import React, { useEffect, useState } from 'react'

const Snowflakes = () => {
  const [showSnow, setShowSnow] = useState(false)

  useEffect(() => {
    // Check if current month is September (8) through December (11)
    const currentMonth = new Date().getMonth()
    // Temporarily set to true to test - change back to: currentMonth >= 8 && currentMonth <= 11
    setShowSnow(currentMonth >= 8 && currentMonth <= 11)  // Only ber months
    //setShowSnow(true) // always show snow for testing
  }, [])

  if (!showSnow) return null

  // Generate 50 snowflakes with random properties
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 3 + Math.random() * 7,
    animationDelay: Math.random() * 5,
    fontSize: 0.5 + Math.random() * 1,
    opacity: 0.3 + Math.random() * 0.7,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white light:text-blue-300 animate-fall"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.fontSize}rem`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}

export default Snowflakes
