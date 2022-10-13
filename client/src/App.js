import { useState } from 'react';
import './app.css'

const Button = ({handleClick, text})=> {
    return <button className='button' onClick={handleClick}><span>{text}</span></button>
};

const Display = ({anecdote, numVotes}) => {
  console.log({numVotes});
  return (
    <div className='quote'>
      <h3>{anecdote}</h3>
      <h4>This anecdote has {numVotes} votes</h4>
    </div>
  )

};

const Title = ({title}) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
    </div>
  );
};


const DisplayMostVotes = ({anecdotes, vote}) => {
  const max = Math.max(...vote);
  const index = vote.indexOf(max);
  const result = anecdotes[index];
  if (max === 0){
    return (
      <p>No votes yet</p>
    );
  }
  console.log(result);
  return (
    <div className='quote'>
      <h3>{result}</h3>
      <h4>This anecdote has {max} votes</h4>
    </div>
  )
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const copyVote = [...vote];
    copyVote[selected] += 1;
    setVote(copyVote);

  };

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length) );
    
  };
    

  return (
      <div className='app'>
        <div className='card'>
          <Title title="Anecdote of the day: " />
          <Display anecdote={anecdotes[selected]} numVotes={vote[selected]}/>
          <Button handleClick={handleAnecdote}  text="Next Anecdote" />
          <Button handleClick={handleVote} text="Vote" />
          <Title title="Anecdote with the most votes: " />
          <DisplayMostVotes anecdotes={anecdotes} vote={vote} />
          
        </div>
      <footer id="footer">
        <p >&copy; Copyright 2022 <br />
        Built with &#x2661; by  
        <a href="https://github.com/makaylacodes/anecdotes" target="_blank">
        Makayla Anderson-Tucker
        </a>
        </p>
      </footer>
    </div>
  );
};

export default App;