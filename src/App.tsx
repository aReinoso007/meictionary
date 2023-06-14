import React, { useState } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';

const App: React.FC = ()=>{

  const [word, setWord] = useState<string>('hola');

  const SearchWordDefinition = (word: string) =>{
    setWord(word);
  }

  return (
    <div>{word}</div>
  )
}

export default App;
