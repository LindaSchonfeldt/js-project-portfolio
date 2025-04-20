import './SkillSection.css'

export const SkillSection = () => {
  return (
    <section className='skillContainer'>
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
    </section>
  )
}
