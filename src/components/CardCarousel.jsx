// Carousel component for displaying cards
// This component can be used to display a carousel of cards, such as project cards

export default function CardCarousel({ cards }) {
  // Safety check for when cards may not be available yet
  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    console.log('No cards data available:', cards)
    return (
      <section className='cardCarousel'>
        <p>Cards coming soon!</p>
      </section>
    )
  }

  return (
    <section className='cardCarousel'>
      <div className='carouselContainer'>
        {cards.map((card) => (
          <div key={card.id} className='carouselCard'>
            {card.content}
          </div>
        ))}
      </div>
    </section>
  )
}
