export function getColor(description: string) {
  const colorMap: Record<string, string> = {
    'Matar, Pilhar e Destruir': '#16BFD6',
    Interpretação: '#00D3CF',
    Dungeon: '#CBFFFC',
  }

  return colorMap[description]
}
