// Set of buttons to switch between two tabs

export default function TabButtons({ activeTab, setActiveTab }) {
  const tabs = ['Code', 'UX/UI'] // Define the tabs you want to display

  return (
    <div className='tabButtons'>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tabButton ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
