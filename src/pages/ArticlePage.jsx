import styled from 'styled-components'
import { media } from '../media.js'
import { SectionTitle } from '../components/SectionTitle'
import Button from '../components/Button'
import { useArticleStore } from '../stores/useArticleStore'
import { useParams } from 'react-router-dom'

const StyledArticlePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
  width: 100%;

  h2 {
    font-size: 3rem;
    margin-bottom: var(--space-lg);
    color: var(--primary-color);
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: var(--space-md);
    color: var(--primary-color);
  }

  .subHeading {
    font-size: 2rem;
    margin-bottom: var(--space-md);
    color: var(--secondary-color);
  }
  .purpose,
  .background,
  .researchQuestions,
  .methodology,
  .results,
  .conclusions,
  .finalThoughts {
    margin-bottom: var(--space-lg);
  }

  @media ${media.tablet} {
  }

  @media ${media.desktop} {
  }

  @media ${media.largeDesktop} {
  }
`

export const ArticlePage = () => {
  const { id } = useParams()
  const getArticleById = useArticleStore((state) => state.getArticleById)
  const article = getArticleById(id)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <StyledArticlePage key={id}>
      <SectionTitle title={title} />
      <h2 className='subHeading'>{subtitle}</h2>
      <section className='purpose'>
        <h3>Purpose</h3>
        <p>
          The purpose of this study is to examine the prevalence and effects of
          Dark Patterns in the mobile applications of the nine most used social
          media platforms in Sweden.
        </p>
        <Button />
      </section>
      <section className='background'>
        <h3>Background</h3>
        <p>
          Dark Patterns are manipulative design practices used to steer users
          toward decisions that benefit the system rather than the individual.
          While previous research has focused primarily on e-commerce, this
          study turns its attention to social networking services (SNS) and
          their mobile applications. In an economy where user attention holds
          monetary value, psychological vulnerabilities are exploited through
          addictive design patterns like infinite scroll and social validation.
        </p>
      </section>
      <section className='researchQuestions'>
        <h3>Research Questions</h3>
        <p>
          The study aims to answer the following research questions:
          <ul>
            <li>
              RQ1: What types of Dark Patterns are present in popular SNS mobile
              applications in Sweden?
            </li>
            <li>
              RQ2: What persuasive strategies are used to influence users
              through these design patterns?
            </li>
            <li>RQ3: How does this influence affect user autonomy?</li>
          </ul>
        </p>
      </section>
      <section className='methodology'>
        <h3>Methodology</h3>
        <p>
          The study employed a document analysis and thematic analysis, guided
          by an ontology from Gray et al. (2024). Nine mobile apps were
          analyzed: Facebook, YouTube, Instagram, Snapchat, LinkedIn, TikTok, X,
          Pinterest, and Reddit. In total, 34 unique Dark Patterns were
          identified, including 13 newly defined patterns created by the
          authors. Examples of these new patterns include:
          <ul>
            <li>
              Eternal Presence: a pattern that makes logging out difficult.
            </li>
            <li>
              Sticky Engagement: a design that makes following content easy but
              unfollowing difficult.
            </li>
            <li>
              Public Display: default settings that make user information
              publicly visible without adequate consent.
            </li>
          </ul>
        </p>
      </section>
      <section className='results'>
        <h3>Results</h3>
        <p>
          Dark Patterns were identified under five high-level categories:
          <ul>
            <li>
              Sneaking: Concealing information, e.g., Disguised Ads (TikTok,
              Instagram).
            </li>
            <li>
              Obstruction: Hindering desired actions, e.g., Privacy Maze and new
              patterns like Eternal Presence.
            </li>
            <li>
              Interface Interference: Privileging certain options, e.g., Bad
              Defaults and Public Display.
            </li>
            <li>
              Forced Action: Forcing user interaction, e.g., Unnecessary
              Onboarding Steps.
            </li>
            <li>
              Social Engineering: Exploiting social behaviors, e.g., nagging and
              nudge effects.
            </li>
          </ul>
        </p>
      </section>
      <section className='conclusions'>
        <h3>Discussion and Conclusion</h3>
        <p>
          The design of these mobile applications manipulates user decisions and
          undermines autonomy. Dark Patterns prolong time spent on platforms,
          complicate account deletion, and expose personal data without adequate
          consent. The authors argue that social media companies should adopt
          ethical design practices to avoid exploitation.
        </p>
      </section>
      <section className='finalThoughts'>
        <h3>Final Thoughts</h3>
        <p>
          This study highlights the need for greater awareness of Dark Patterns
          and their impact on user autonomy. As social media continues to
          evolve, ethical design practices must be prioritized to protect users
          from exploitation.
        </p>
      </section>
    </StyledArticlePage>
  )
}
