import React from 'react'
import { BankProvider } from './bank-context'
import Display from './Components/Display'

const App = () => {
  return (
    <BankProvider>
        <Display />

    </BankProvider>
  )
}

export default App