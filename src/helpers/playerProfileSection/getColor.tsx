// export function getColor(description: string) {
//   if (description === 'Matar, Pilhar e Destruir') {
//     return '#16BFD6'
//   }
//   if (description === 'Interpretação') {
//     return '#00D3CF'
//   }
//   if (description === 'Dungeon') {
//     return '#CBFFFC'
//   }
// }

export function getColor(description: string) {
  const colorMap: Record<string, string> = {
    'Matar, Pilhar e Destruir': '#16BFD6',
    Interpretação: '#00D3CF',
    Dungeon: '#CBFFFC',
  }

  return colorMap[description]
}
