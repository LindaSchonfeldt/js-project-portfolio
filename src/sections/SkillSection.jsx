import { SectionTitle } from '../components/SectionTitle'
import styled from 'styled-components'
import { media } from '../components/media'

const SkillSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: var(--space-xxl);

  .skillList {
    list-style: none;
    padding: 0;
    margin: var(--space-sm) 0;
    text-align: center;
  }

  h3 {
    margin-bottom: var(--space-sm);
    color: var(--primary-color);
  }

  .divider {
    width: 200px;
    height: 1px;
    background-color: var(--primary-color);
    margin: var(--space-sm) 0;
  }

  /* Container for all skill lists */
  .skillContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media ${media.desktop} {
    .skillContainer {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .skillList {
      list-style: none;
      padding: 0;
      margin: 0 var(--space-sm);
      text-align: center;
      flex: 1;
    }

    .divider {
      width: 1px;
      height: 200px;
      margin: 0 var(--space-sm);
      display: inline-block;
    }
  }
`

export const SkillSection = () => {
  return (
    <SkillSectionStyled>
      <SectionTitle title='Skills' />
      <div className='skillContainer'>
        <ul className='skillList'>
          <h3>Code</h3>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Styled Components</li>
        </ul>
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
      </div>
    </SkillSectionStyled>
  )
}
