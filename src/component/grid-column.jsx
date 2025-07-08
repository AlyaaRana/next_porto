const cardData = [
  {
    id: 1,
    title: "Judul Card 1",
    date: "2025-06-04",
    bg: "url('/pkl-1.jpg')",
    colSpan: "col-span-2",
  },
  {
    id: 2,
    title: "Judul Card 2",
    date: "2025-06-03",
    bg: "url('/ta-team.jpg')",
    colSpan: "",
  },
  {
    id: 3,
    title: "Judul Card 3",
    date: "2025-06-02",
    bg: "url('/path/to/image3.jpg')",
    colSpan: "",
  },
  {
    id: 4,
    title: "Judul Card 4",
    date: "2025-06-01",
    bg: "url('/path/to/image4.jpg')",
    colSpan: "col-span-2",
  },
];

const GridColumn = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`rounded-lg p-4 h-70 flex items-end ${card.colSpan}`}
          style={{
            backgroundImage: card.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex justify-between items-center bg-black/60 text-white rounded px-2 py-1">
            <span className="font-semibold">{card.title}</span>
            <span className="text-xs">{card.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridColumn;