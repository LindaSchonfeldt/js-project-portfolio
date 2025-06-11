import { create } from 'zustand'

const ArticleData = [
  {
    id: '1',
    title: 'Exploitation by Design',
    subtitle: 'An Investigation of Dark Patterns in Social Media Apps',
    image: '',
    alt: '',
    publishedDate: 'Spring 2024',
    description:
      'Bachelor thesis on the use of dark patterns in social media applications.',
    tags: ['Thesis', 'Dark Patterns', 'Social Media'],
    link: ''
  }
]

export const useArticleStore = create((set) => ({
  articles: ArticleData,
  getArticleById: (id) => {
    return ArticleData.find((article) => article.id === id)
  }
}))
