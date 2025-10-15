import myimg from "./WhatsApp Image 2025-09-21 at 8.34.34 AM.jpeg"
 export default Task13;
function Task13() {
  const cards = [
    {
      title: "Card 1",
      description: "This is the  card 1",
      image:  myimg
    },
    {
      title: "Card 2",
      description: "This is the  card 2",
       image:  myimg
    },
    {
      title: "Card 3",
      description: "This is the  card 3",
      image: myimg
    }
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {cards.map((card, index) => (
        <div key={index} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", width: "200px" }}>
          <img src ={card.image} alt={card.title} style={{ width: "100%", borderRadius: "10px" }} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}