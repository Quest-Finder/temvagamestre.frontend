export function formatDate(date: Date | undefined): string {
    const dayAndMountFormat = date?.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
      weekday: 'long',
    }) as string
    return dayAndMountFormat
  }