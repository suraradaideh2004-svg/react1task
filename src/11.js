
function Task11() {
const numbers = [1, 2, 3, 4, 5];
return (
    <ul>
    {numbers.map((num, index) => (
        <li key={index}>
          <span style={{ backgroundColor: "yellow" }}>Doubled</span> {num} → {num * 2}
        </li>
    ))}
    </ul>
);
}

export default Task11;
