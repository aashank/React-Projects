import { useState } from 'react';
import './App.css';
import PasswordText from './components/PasswordText';
import Copy from './components/Copy';
import CharacterLength from './components/CharacterLength';
import Checkboxes from './components/Checkboxes';
import Strength from './components/Strength';
import GenerateButton from './components/GenerateButton';

function App() {

  return (
    <div className='container'>
      <div className='passwordConatiner'>
        <PasswordText />
        <Copy />
        <CharacterLength />
        <Checkboxes />
        <Strength />
        <GenerateButton />
      </div>
    </div>
  )
}

export default App
