// CardGrid to display a grid of cards
// This component can be used to display a grid of cards, such as project cards

export default function CardGrid({ cards }) {
  // Safety check for when cards may not be available yet
  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    console.log('No cards data available:', cards)
    return (
      <section className='cardGrid'>
        <p>Cards coming soon!</p>
      </section>
    )
  }
  return (
    <section className='cardGrid'>
      <div className='gridContainer'>
        {cards.map((card) => (
          <div key={card.id} className='gridCard'>
            {card.content}
          </div>
        ))}
      </div>
    </section>
  )
}
