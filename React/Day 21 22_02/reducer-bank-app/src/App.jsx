import Banking from "./Banking";
import { BankingContextProvider } from "./banking-context";
import React from 'react'

const App = () => {
  return (
    <BankingContextProvider>
      <div className="App">
        <Banking />
      </div>
    </BankingContextProvider>
  );
}

export default App