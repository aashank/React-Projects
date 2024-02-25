import './App.css';
import PasswordText from './components/PasswordText';
import Copy from './components/Copy';
import CharacterLength from './components/CharacterLength';
import Checkboxes from './components/Checkboxes';
import Strength from './components/Strength';
import GenerateButton from './components/GenerateButton';
import { useState } from 'react';
import usePasswordGenerator from './customHooks/usePasswordGenrator';

const checkboxArray = [
  { title: "Include Uppercase Letters", status: false },
  { title: "Include Lowercase Letters", status: false },
  { title: "Include Numbers", status: false },
  { title: "Include Symbols", status: false }
]

function App() {

  const [length, setLength] = useState(8);
  const [checkboxData, setCheckboxData] = useState(checkboxArray)
  const { password, error, getPasswordGenerator } = usePasswordGenerator(length, checkboxData)
  return (
    <>
      <p className='welcomeText'>Welcome to password generator app</p>
      <div className='container'>
        <div className='boxConatiner'>
          {password &&
            <div className='passwordCopyContainer'>
              <PasswordText password={password} />
              <Copy password={password} />
            </div>
          }
          <CharacterLength length={length} setLength={setLength} />
          <Checkboxes checkboxData={checkboxData} setCheckboxData={setCheckboxData} />
          <Strength />
          {
            error &&
            <p className='errorMessage'>Please select at least one checkbox to generate the password.</p>
          }
          <GenerateButton length={length} checkboxData={checkboxData} getPasswordGenerator={getPasswordGenerator} />
        </div>
      </div>
    </>
  )
}

export default App
