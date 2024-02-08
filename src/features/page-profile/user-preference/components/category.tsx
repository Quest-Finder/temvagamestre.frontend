import React from 'react'

interface CategoriesProps {
  content: string
}

export default function Category({ content }: CategoriesProps) {
  const getBackgroundColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'fantasia':
        return 'bg-[#095658]/5 text-[#095658]'
      case 'misterio':
        return 'bg-[#e29120]/5 text-[#e29120]'
      default:
        return 'bg-gray-200'
    }
  }

  const backgroundColor = getBackgroundColor(content)

  return (
    <>
      <div
        className={`inline-flex h-8 w-20 items-start justify-start gap-2.5 rounded-[3px] ${backgroundColor} px-3 py-1.5`}
      >
        <p
          className={`bg-transparent font-['Roboto'] text-sm font-medium leading-tight`}
        >
          {content}
        </p>
      </div>
      <div />
    </>
  )
}
