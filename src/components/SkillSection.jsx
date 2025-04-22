import styled from 'styled-components'
import { media } from './media'

const SkillSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;

  .sectionTitle {
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
    margin: 0;
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
    <SkillSectionStyled className='skillContainer'>
      <h2 className='sectionTitle'>Skills</h2>
      <div className='skillSection'>
        <div className='skillList'>
          <h3>Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Styled Components</li>
          </ul>
        </div>
        <hr className='divider' />
        <div className='skillList'>
          <h3>Design</h3>
          <ul>
            <li>User Flows</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>User Interviews</li>
            <li>Facilitating workshops</li>
            <li>UX Research</li>
          </ul>
        </div>
        <hr className='divider' />
        <div className='skillList'>
          <h3>Toolbox</h3>
          <ul>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Github</li>
            <li>Notion</li>
            <li>Trello</li>
            <li>Slack</li>
          </ul>
        </div>
        <hr className='divider' />
        <div className='skillList'>
          <h3>More</h3>
          <ul>
            <li>Strategy</li>
            <li>Process Design</li>
            <li>Concept Development</li>
            <li>Agile Methodology</li>
          </ul>
        </div>
        <hr className='divider' />

        <div className='skillList'>
          <h3>Upcoming</h3>
          <ul>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </SkillSectionStyled>
  )
}
