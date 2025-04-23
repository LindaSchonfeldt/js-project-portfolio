export const TagList = ({ tags }) => (
  <div className='tagList'>
    {tags.map((tag, i) => (
      <span key={i} className='tag'>
        {tag}
        {i < tags.length - 1 && ' '}
      </span>
    ))}
  </div>
)
