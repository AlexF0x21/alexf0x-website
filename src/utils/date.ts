export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const getFullYear = () => {
  return new Date().getFullYear()
}
