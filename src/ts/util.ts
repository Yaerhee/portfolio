export const scrollIntoPage = (selector: any) => {
  // @ts-ignore
  const scrollTarget = document.querySelector(selector)
  scrollTarget.scrollIntoView({ behavior: 'smooth' })
}
