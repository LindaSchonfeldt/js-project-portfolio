import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import { TagList } from '../components/TagList'
import { UnderConstruction } from '../components/UnderConstruction'
import siteConfig from '../data/siteConfig.json'
import { media } from '../media.js'
import { useArticleStore } from '../stores/useArticleStore'

const StyledArticlePage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-lg);
  line-height: 1.6;

  .article-header {
    margin-bottom: var(--space-xl);
    text-align: center;

    h1 {
      font-size: 3rem;
      margin-bottom: var(--space-md);
      color: var(--primary-color);
    }

    .subtitle {
      font-size: 1.5rem;
      color: var(--text-muted);
      margin-bottom: var(--space-md);
    }

    .meta {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-lg);
      font-size: 0.9rem;
      color: var(--text-muted);
    }
  }

  .back-button {
    margin-bottom: var(--space-lg);
  }

  .article-actions {
    display: flex;
    gap: var(--space-sm);
    justify-content: center;
    margin-bottom: var(--space-xl);

    @media ${media.mobile} {
      flex-direction: column;
      align-items: center;
    }
  }

  .article-content {
    .section {
      margin-bottom: var(--space-xl);

      h2 {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: var(--space-md);
        border-bottom: 2px solid var(--border-color);
        padding-bottom: var(--space-xs);
      }

      p {
        margin-bottom: var(--space-md);
        text-align: justify;
      }
    }

    .abstract {
      background-color: var(--background-light);
      padding: var(--space-lg);
      border-radius: var(--border-radius);
      border-left: 4px solid var(--primary-color);
      margin-bottom: var(--space-xl);

      h2 {
        margin-top: 0;
        border: none;
        padding: 0;
      }
    }

    .references {
      margin-top: var(--space-xl);

      h2 {
        color: var(--primary-color);
      }

      ol {
        padding-left: var(--space-lg);

        li {
          margin-bottom: var(--space-sm);
          text-align: justify;
        }
      }
    }
  }

  .sticky-toc {
    position: sticky;
    top: 2rem;
    background: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin-bottom: 2rem;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;

    h3 {
      margin: 0 0 1rem 0;
      font-size: 1rem;
      color: var(--text-color);
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.5rem;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin-bottom: 0.5rem;
    }

    a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.9rem;
      line-height: 1.4;
      transition: color 0.2s ease;

      &:hover {
        color: var(--primary-color);
      }

      &.active {
        color: var(--primary-color);
        font-weight: 600;
      }
    }
  }

  @media ${media.tablet} {
    .article-header h1 {
      font-size: 2.5rem;
    }
  }

  @media ${media.mobile} {
    padding: var(--space-md);

    .article-header h1 {
      font-size: 2rem;
    }
  }
`

export const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const getArticleById = useArticleStore((state) => state.getArticleById)
  const article = getArticleById(id)

  const isUnderConstruction = siteConfig.underConstruction.articles.includes(
    Number(id)
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const handleGoBack = () => {
    navigate(-1)
  }

  if (!article) {
    return (
      <StyledArticlePage>
        <div className='back-button'>
          <Button text='← Back' onClick={handleGoBack} variant='tertiary' />
        </div>
        <div style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
          <h1>Article Not Found</h1>
          <p>Sorry, we couldn't find that article.</p>
          <Button text='Back to Home' internal href='/' variant='primary' />
        </div>
      </StyledArticlePage>
    )
  }

  return (
    <StyledArticlePage>
      <div className='back-button'>
        <Button text='← Back' onClick={handleGoBack} variant='tertiary' />
      </div>

      <header className='article-header'>
        <h1>{article.title}</h1>
        {article.subtitle && <p className='subtitle'>{article.subtitle}</p>}

        <div className='meta'>
          <span>Published: {article.publishedDate}</span>
        </div>

        {article.tags && article.tags.length > 0 && (
          <TagList tags={article.tags} />
        )}
      </header>

      <div className='article-actions'>
        {article.link && (
          <Button text='Download PDF' href={article.link} variant='primary' />
        )}
        <Button
          text='Share Article'
          onClick={() =>
            navigator.share?.({
              title: article.title,
              url: window.location.href
            })
          }
          variant='secondary'
        />
      </div>

      {article.fullContent?.sections?.length > 0 && (
        <nav className='sticky-toc'>
          <h3>On this page</h3>
          <ul>
            {article.fullContent.sections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#section-${index}`}
                  onClick={() => {
                    document
                      .getElementById(`section-${index}`)
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <article className='article-content'>
        {article.fullContent?.abstract && (
          <section className='abstract'>
            <h2>Abstract</h2>
            <p>{article.fullContent.abstract}</p>
          </section>
        )}

        {article.fullContent?.sections?.map((section, index) => (
          <section key={index} id={`section-${index}`}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.images &&
              section.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${section.title} ${imgIndex + 1}`}
                />
              ))}
          </section>
        ))}

        {article.fullContent?.references &&
          article.fullContent.references.length > 0 && (
            <section className='references'>
              <h2>References</h2>
              <ol>
                {article.fullContent.references.map((reference, index) => (
                  <li key={index}>{reference}</li>
                ))}
              </ol>
            </section>
          )}
      </article>

      {isUnderConstruction && <UnderConstruction overlay={true} />}
    </StyledArticlePage>
  )
}
