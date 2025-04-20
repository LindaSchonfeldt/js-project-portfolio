import { SectionTitle } from './SectionTitle'
import { Carousel } from './Carousel'
import CardGrid from './CardGrid'

export const ArticleSection = ({ articles }) => {
  return (
    <div className='articleSection'>
      <SectionTitle title='My Words' />
      <Carousel items={articles} variant='articles' />
      <CardGrid articles={articles} />
    </div>
  )
}
