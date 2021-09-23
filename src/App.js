import './App.css';
import Countdown from 'react-countdown';

const Finished = () => (
  <span>IT'S THE DAY :P</span>
);

const renderer = ({ total, days, hours, minutes, seconds }) => {
  if (total) {
    // Render a countdown
    return (
      <span>
      {days} DAYS
      <br></br>
      <br></br>
      {hours} HRS
      <br></br>
      <br></br>
      {minutes} MIN
      <br></br>
      <br></br>
      {seconds} SEC
      </span>
    );
  } else {
    // Render a finished state
    return <Finished />;
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>TIME UNTIL ELIO'S COMEBACK:</h1>
      <Countdown date={new Date(2021,10,31)} renderer={renderer}/>
      </header>
    </div>
  );
}

export default App;
