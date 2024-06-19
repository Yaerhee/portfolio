export const scrollIntoPage = (selector: any) => {
  const scrollTarget = document.querySelector(selector);
  scrollTarget.scrollIntoView({ behavior: 'smooth' });
}