
function Card({ name, department, year, onClick }) {
  return (
    <div
      className="card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <h3>{name}</h3>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
    </div>
  );
}
export default Card;
