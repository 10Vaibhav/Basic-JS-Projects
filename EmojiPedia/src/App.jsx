import React, { useEffect, useState } from "react";
import emojipedia from "./emojipedia";
import { Header } from "./Components/Header";
import { Dictionary } from "./Components/Dictionary";
import { Entry } from "./Components/Entry";

function App() {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const fetchEmojis = () => {
      setEmojis(emojipedia);
    };

    fetchEmojis();
  }, []);

  const emojiEntries = emojis.map((e) => (
    <Entry key={e.emoji} emo={e.emoji} title={e.name} description={e.meaning} />
  ));


  return (
    <div>
      <Header />
      <Dictionary>{emojiEntries}</Dictionary>
    </div>
  );
}

export default App;
