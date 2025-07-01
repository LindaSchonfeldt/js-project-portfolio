import siteConfig from '../data/siteConfig.json'

// Make sure this handles both string and number IDs
export const useUnderConstruction = (type, id) => {
  if (!id) return false

  console.log('useUnderConstruction:', type, id, typeof id)

  switch (type) {
    case 'code':
      return siteConfig.underConstruction.code.includes(Number(id))
    case 'casestudy':
      return siteConfig.underConstruction.caseStudies.includes(Number(id))
    case 'article':
      return siteConfig.underConstruction.articles.includes(Number(id))
    default:
      return false
  }
}
