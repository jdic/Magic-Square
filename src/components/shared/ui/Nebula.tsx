import type { INebula } from '../../../types/ui'
import React from 'react'
import clsx from 'clsx'

export const Nebula: React.FC<INebula> = ({ className, from = "#0A0F0D", to = "'#9089FC", key, opacity = 0.3 }) =>
{
  return (
    <div
    className="absolute w-0 h-0 inset-x-0 -z-10 transform-gpu blur-3xl"
      key={key}
      aria-hidden
    >
      <div
        className={clsx("relative aspect-[1155/843] w-[36.125rem] -translate-x-1/3 rotate-[30deg] bg-gradient-to-tr", className)}
        style={{
          background: `linear-gradient(to top right, ${from}, ${to})`,
          opacity,
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      ></div>
    </div>
  )
}
