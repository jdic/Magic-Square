import type { ISection } from '../../../types/wrappers'
import React from 'react'
import clsx from 'clsx'

export const Section: React.FC<ISection> = ({ children, className, id, key }) =>
{
  return (
    <section
      id={id}
      key={key}
      className={clsx("section w-full py-5 md:max-w-4xl mx-auto px-6 sm:px-7 lg:px-9", className)}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}
