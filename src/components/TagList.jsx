import styled from 'styled-components'

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  .tag {
    padding: 0.2rem 0.3rem;
    margin: 0.2rem;
    background-color: var(--text-color);
    color: var(--background-color);
    font-size: 0.8rem;
    font-weight: 500; /* Optional: make text bold */
    white-space: nowrap; /* Prevent tags from breaking into multiple lines */
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
