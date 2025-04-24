import styled from 'styled-components'

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 0.2rem 0.3rem;
  width: 100%;

  .tag {
    /* no margins needed any more */
    padding: 0.2rem 0.3rem;
    background-color: var(--text-color);
    color: var(--background-color);
    font-size: 0.8rem;
    font-weight: 500;
    white-space: nowrap;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
`

export const TagList = ({ tags }) => {
  if (!Array.isArray(tags) || tags.length === 0) return null
  return (
    <StyledTagList>
      {tags.map((tag, i) => (
        <span key={i} className='tag'>
          {tag}
        </span>
      ))}
    </StyledTagList>
  )
}
