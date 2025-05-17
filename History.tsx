import { useState } from "react";
import { FaDownload, FaClock } from "react-icons/fa";

const History = () => {
  const imageStages = [
    { imageUrl: "/images/DatSCAN1.jpg", stage: "Normal" },
    { imageUrl: "/images/DatSCAN2.jpg", stage: "Early" },
    { imageUrl: "/images/DatSCAN3.jpg", stage: "Moderate" },
    { imageUrl: "/images/DatSCAN4.jpg", stage: "Advanced" },
    { imageUrl: "/images/DatSCAN5.jpg", stage: "Severe" }
  ];

  const [history, setHistory] = useState([]);

  // Function to add new entry with image and stage cycling
  const addNewEntry = () => {
    const currentDateTime = new Date().toLocaleString();

    // Cycle through image stages (loop through the array)
    const nextIndex = history.length % imageStages.length; 
    const { imageUrl, stage } = imageStages[nextIndex];

    const newEntry = {
      id: history.length + 1,
      date: currentDateTime,
      confidence: `${stage} Confidence`,
      imageUrl: imageUrl,
      findings: `Parkinson's detected at ${stage} stage.`,
      recommendations: stage === "Normal"
        ? "No immediate action needed."
        : "Consult a neurologist for further evaluation."
    };

    setHistory([...history, newEntry]);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>🧠 Analysis History</h1>
        <p>View your previous DaTSCAN analysis results.</p>

        <button onClick={addNewEntry} style={styles.addButton}>
          ➕ Show History
        </button>

        {history.length === 0 ? (
          <p>No history found.</p>
        ) : (
          history.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.header}>
                <FaClock style={styles.icon} />
                <span>{item.date}</span>
              </div>

              <a href="#" style={styles.confidence}>
                {item.confidence}
              </a>

              <div style={styles.imageContainer}>
                <img src={item.imageUrl} alt="DATscan" style={styles.image} />
              </div>

              <div style={styles.section}>
                <h3>Details</h3>
                <p>{item.findings}</p>
              </div>

              <div style={styles.section}>
                <h3>Recommendations</h3>
                <p>{item.recommendations}</p>
              </div>

              <button style={styles.downloadBtn}>
                <FaDownload style={styles.icon} />
                Download Report
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;

const styles = {
  page: {
    minHeight: "100vh",
    background: "url('https://i.makeagif.com/media/11-16-2015/Ien7vO.gif') no-repeat center center fixed",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },
  container: {
    width: "90%",
    maxWidth: "1100px",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    padding: "30px",
    backdropFilter: "blur(10px)",
    animation: "fadeIn 0.8s ease-in-out"
  },
  title: {
    fontSize: "2rem",
    color: "#444",
    textAlign: "center",
    marginBottom: "20px"
  },
  addButton: {
    display: "block",
    width: "100%",
    padding: "10px 20px",
    background: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
    fontSize: "1rem"
  },
  card: {
    background: "#f9f9f9",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    transition: "transform 0.3s"
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px"
  },
  icon: {
    fontSize: "1.2rem",
    color: "#6c63ff"
  },
  confidence: {
    color: "#4caf50",
    fontWeight: "bold",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px"
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0"
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
  },
  section: {
    marginTop: "20px"
  },
  downloadBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s"
  }
};
/*import { useState } from "react";
import { FaDownload, FaClock, FaPaperPlane } from "react-icons/fa";
import axios from 'axios';

const History = () => {
  const imageStages = [
    { imageUrl: "/images/DatSCAN1.jpg", stage: "Normal" },
    { imageUrl: "/images/DatSCAN2.jpg", stage: "Early" },
    { imageUrl: "/images/DatSCAN3.jpg", stage: "Moderate" },
    { imageUrl: "/images/DatSCAN4.jpg", stage: "Advanced" },
    { imageUrl: "/images/DatSCAN5.jpg", stage: "Severe" }
  ];

  const [history, setHistory] = useState([]);

  // Function to add new entry with image and stage cycling
  const addNewEntry = () => {
    const currentDateTime = new Date().toLocaleString();

    // Cycle through image stages (loop through the array)
    const nextIndex = history.length % imageStages.length; 
    const { imageUrl, stage } = imageStages[nextIndex];

    const newEntry = {
      id: history.length + 1,
      date: currentDateTime,
      confidence: `${stage} Confidence`,
      imageUrl: imageUrl,
      findings: `Parkinson's detected at ${stage} stage.`,
      recommendations: stage === "Normal"
        ? "No immediate action needed."
        : "Consult a neurologist for further evaluation."
    };

    setHistory([...history, newEntry]);
  };

  // Function to send latest result to expert via email
  const handleSendToExpert = async () => {
    if (history.length === 0) {
      alert('No history entry to send.');
      return;
    }

    const latest = history[history.length - 1];

    try {
      await axios.post('http://localhost:5000/send-email', {
        userEmail: 'deepika23245a0519@gmail.com',       // replace with dynamic user email
        date: latest.date,
        confidence: latest.confidence,
        stage: latest.findings,
      });
      alert('Consultation request sent to expert!');
    } catch (error) {
      console.error('Error sending email to expert', error);
      alert('Failed to send request.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>🧠 Analysis History</h1>
        <p>View your previous DaTSCAN analysis results.</p>

        
        <div style={styles.buttonRow}>
          <button onClick={addNewEntry} style={styles.addButton}>
            ➕ Show History
          </button>
          <button onClick={handleSendToExpert} style={styles.expertButton}>
            <FaPaperPlane style={styles.icon} /> Send to Expert
          </button>
        </div>

        {history.length === 0 ? (
          <p>No history found.</p>
        ) : (
          history.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.header}>
                <FaClock style={styles.icon} />
                <span>{item.date}</span>
              </div>

              <a href="#" style={styles.confidence}>
                {item.confidence}
              </a>

              <div style={styles.imageContainer}>
                <img src={item.imageUrl} alt="DATscan" style={styles.image} />
              </div>

              <div style={styles.section}>
                <h3>Details</h3>
                <p>{item.findings}</p>
              </div>

              <div style={styles.section}>
                <h3>Recommendations</h3>
                <p>{item.recommendations}</p>
              </div>

              <button style={styles.downloadBtn}>
                <FaDownload style={styles.icon} />
                Download Report
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;

const styles = {
  page: {
    minHeight: "100vh",
    background: "url('https://i.makeagif.com/media/11-16-2015/Ien7vO.gif') no-repeat center center fixed",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },
  container: {
    width: "90%",
    maxWidth: "1100px",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    padding: "30px",
    backdropFilter: "blur(10px)",
    animation: "fadeIn 0.8s ease-in-out"
  },
  title: {
    fontSize: "2rem",
    color: "#444",
    textAlign: "center",
    marginBottom: "20px"
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  addButton: {
    flex: 1,
    padding: "10px 20px",
    background: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  expertButton: {
    flex: 1,
    padding: "10px 20px",
    background: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    background: "#f9f9f9",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    transition: "transform 0.3s"
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px"
  },
  icon: {
    fontSize: "1.2rem",
    color: "#6c63ff"
  },
  confidence: {
    color: "#4caf50",
    fontWeight: "bold",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px"
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0"
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
  },
  section: {
    marginTop: "20px"
  },
  downloadBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s"
  }
};

*/