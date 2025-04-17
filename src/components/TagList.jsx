export const TagList = ({ tags }) => {
  return <div className='tagList'>{tags.join(', ')}</div>
}
