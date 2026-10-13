import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [news, setNews] = useState([]);

  const searchNews = () => {
    setNews([
      `Latest news about ${topic}`,
      `Technology news about ${topic}`,
      `Business news about ${topic}`
    ]);
  };

  return (
    <div>
      <h1>News App</h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
      />

      <button onClick={searchNews}>Search</button>

      {news.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default App;