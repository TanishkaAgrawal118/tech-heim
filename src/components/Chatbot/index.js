import { useEffect } from "react";
import './style.css';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "sBxsgECN9AgzU0lZpkO2S";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return <div id="chatbase-bot"/>;
};

export default Chatbot;
