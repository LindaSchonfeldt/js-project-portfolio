import styled from 'styled-components'

const StyledTabButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  margin-bottom: 0.5rem;

  .tabButton {
    background-color: var(--color-background);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 0.15rem solid var(--primary-color);
    width: 30vw;
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
