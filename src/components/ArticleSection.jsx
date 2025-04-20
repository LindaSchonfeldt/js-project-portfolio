import { SectionTitle } from './SectionTitle'
import CardGrid from './CardGrid'

export const ArticleSection = ({ articles }) => {
  return (
    <div className='articleSection'>
      <SectionTitle title='My Words' />
      <CardGrid articles={articles} />
    </div>
  )
}
