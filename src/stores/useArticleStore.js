import { create } from 'zustand'

const ArticleData = [
  {
    id: 1, // Make sure this is a number, not string
    title: 'Exploitation by Design',
    subtitle: 'An Investigation of Dark Patterns in Social Media Apps',
    image: '',
    alt: 'Dark patterns in social media research',
    publishedDate: 'Spring 2024',
    description:
      'Bachelor thesis on the use of dark patterns in social media applications.',
    tags: ['Thesis', 'Dark Patterns', 'Social Media'],
    link: '/assets/exploitation-by-design.pdf',

    // Keep the complex content separate for the article page
    fullContent: {
      abstract:
        'This bachelor thesis investigates the prevalence and impact of dark patterns in social media applications...',

      sections: [
        {
          title: 'Introduction',
          content:
            'Dark patterns are user interface designs that are crafted to trick users into doing things they might not want to do...'
        },
        {
          title: 'Literature Review',
          content:
            'Previous research has identified various types of dark patterns...'
        },
        {
          title: 'Methodology',
          content: 'This study employed a mixed-methods approach...'
        },
        {
          title: 'Results',
          content: 'The analysis revealed several concerning trends...'
        },
        {
          title: 'Discussion',
          content:
            'These findings suggest that dark patterns are indeed prevalent...'
        },
        {
          title: 'Conclusion',
          content:
            'This research contributes to our understanding of how design can be used to manipulate users...'
        }
      ],

      references: [
        'Gray, C. M., Kou, Y., Battles, B., Hoggatt, J., & Toombs, A. L. (2018). The dark (patterns) side of UX design.',
        'Brignull, H. (2010). Dark patterns: Deception vs. honesty in UI design.'
        // Add more references
      ]
    }
  }
]

export const useArticleStore = create((set, get) => ({
  articles: ArticleData,

  getArticleById: (id) => {
    console.log('getArticleById called with:', id, 'type:', typeof id)
    const articles = get().articles
    console.log('Available articles:', articles)

    const foundArticle = articles.find((article) => {
      console.log(
        `Comparing article.id: ${
          article.id
        } (${typeof article.id}) with id: ${id} (${typeof id})`
      )
      return article.id === Number(id) // Convert id to number for comparison
    })

    console.log('Found article:', foundArticle)
    return foundArticle
  },

  getAllArticles: () => {
    return get().articles
  },

  getPublishedArticles: () => {
    return get().articles.filter((article) => article.publishedDate)
  }
}))
