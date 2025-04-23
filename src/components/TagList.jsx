export const TagList = ({ tags }) => {
  if (!Array.isArray(tags) || tags.length === 0) return null
  return (
    <div className='tagList'>
      {tags.map((tag, i) => (
        <span key={i} className='tag'>
          {tag}
        </span>
      ))}
    </div>
  )
}
