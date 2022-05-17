import axios from "axios";
import { useState, useEffect } from "react";

export const Quotes = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const res = await axios.get(
          "https://api.quotable.io/random?maxLength=110"
        );
        setQuote(res.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    getQuotes();
  }, []);

  return (
    <>
      <p className="quote mx-2 text-center">"{quote}"</p>
    </>
  );
};
