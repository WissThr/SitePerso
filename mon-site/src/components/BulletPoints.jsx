import "../styles/BulletPoints.css";

export default function BulletPoints({ points }) {
  return (
    <ul>
      {points.map((point, index) => (
        <li key={index}>
          <strong>{point.title}</strong> : {point.description}
        </li>
      ))}
    </ul>
  );
}
