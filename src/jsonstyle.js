
import styles from "./jsonstyle.json"; 

function JsonStyle() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Code Circle</h1>
      <p style={styles.paragraph}>Learn Front-End and Back-End development</p>
    </div>
  );
}

export default JsonStyle;
