import { SectionTitle } from './SectionTitle'
import styled from 'styled-components'
import { media } from './media'

const SkillSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 4rem;

  h3 {
    margin-bottom: 1rem;
  }

  .skillSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skillList {
    list-style: none;
    padding: 0;
    margin: 1rem;
    text-align: center;
  }

  .divider {
    width: 200px;
    height: 0.5px;
    background-color: var(--primary-color);
    border-radius: 2px;
    margin: 1rem 0;
  }

  @media ${media.desktop} {
    /* Make the whole section row‐oriented */
    flex-direction: column;

    .skillSection {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: flex-start;
    }

    /* This transforms the dividers from horizontal to vertical */
    .divider {
      width: 1px;
      height: 200px;
      margin: 0 1rem;
    }
  }
`

export const SkillSection = () => {
  return (
    <SkillSectionStyled>
      <SectionTitle title='Skills' />
      <div className='skillSection'>
        <ul className='skillList'>
          <h3>Code</h3>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Styled Components</li>
        </ul>
      </div>
      <hr className='divider' />
      <ul className='skillList'>
        <h3>Design</h3>
        <li>User Flows</li>
        <li>Wireframing</li>
        <li>Prototyping</li>
        <li>User Interviews</li>
        <li>Facilitating workshops</li>
        <li>UX Research</li>
      </ul>
      <hr className='divider' />
      <ul className='skillList'>
        <h3>Toolbox</h3>
        <li>Adobe Illustrator</li>
        <li>Figma</li>
        <li>Github</li>
        <li>Notion</li>
        <li>Trello</li>
        <li>Slack</li>
      </ul>
      <hr className='divider' />
      <ul className='skillList'>
        <h3>More</h3>
        <li>Strategy</li>
        <li>Process Design</li>
        <li>Concept Development</li>
        <li>Agile Methodology</li>
      </ul>
      <hr className='divider' />

      <ul className='skillList'>
        <h3>Upcoming</h3>
        <li>MongoDB</li>
      </ul>
    </SkillSectionStyled>
  )
}
