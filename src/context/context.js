import { createContext, useState } from "react";

export const Answer = createContext();

function Context({ children }) {
    const [message, setMessage] = useState();
  
    return (
      <Answer.Provider value={{ message, setMessage }}>
        {children}
      </Answer.Provider>
    );
  }

  export default Context;