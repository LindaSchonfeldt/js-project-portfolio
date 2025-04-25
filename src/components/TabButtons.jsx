import styled from 'styled-components'
import { media } from './media'

const StyledTabButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  margin-bottom: 0.5rem;

  .tabButton {
    background-color: var(--background-color);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 0.15rem solid var(--primary-color);
    width: 45vw; /* Larger base width for mobile */
    max-width: 200px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .tabButton:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
  }
  .tabButton.active {
    background-color: var(--primary-color);
    color: var(--background-color);
  }

  @media ${media.tablet} {
    .tabButton {
      width: 40vw;
    }

     @media ${media.desktop} {
    .tabButton {
      width: 250px; /* Fixed width on desktop for consistency */
    }
  }
`

export default function TabButtons({ activeTab, setActiveTab }) {
  const tabs = ['Code', 'UX/UI'] // Define the tabs you want to display

  return (
    <StyledTabButtons>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tabButton ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </StyledTabButtons>
  )
}
