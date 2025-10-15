import './App.css';
import MyName from "./aName.js";
import MyPosition from "./aPosition.js";
import NameDisplay from "./aDisplay.js";
import StyledInline from "./aSTYLE.js";
import MultipleStyles from "./amull.js";
import JsonStyle from "./jsonstyle.js";
import ConditionalRendering from "./77.js";
import StatusMessage  from "./88.js";
import TaskMAP99  from "./99.js";
import Task10  from "./10.js";
import Task11  from "./11.js";
import Task12  from "./12.js";
import Task13  from "./13.js";
import Task14  from "./14.js";



function App() {
      const students=["sura","hala","noorr",];
  return (
    <div className="App">
{/* task1*/}
      <MyName />
      {/* task2*/}
      <MyPosition />
      {/* task3*/}
      <NameDisplay />
      {/* task4*/}
<StyledInline />
      {/* task5*/}
<MultipleStyles />
      {/* task6*/}
<JsonStyle />
      {/* /////////////////////////////////////////////////////////task7*/}
<ConditionalRendering isLoggedIn={true} />
      {/* task8*/}
<StatusMessage  isSuccess={false}/>
      {/* task9/*/}
<TaskMAP99 items={students} />
<Task10 />
<Task11 />
<Task12 />
<Task13 />
<Task14 />



</div>
  );
}

export default App;
