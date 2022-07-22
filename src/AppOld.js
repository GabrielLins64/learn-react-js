import logo from './logo.svg';
import './styles/App.css';
import Greet from './oldComponents/Greet';
import Hello from './oldComponents/Hello';
import Welcome from './oldComponents/Welcome';
import Message from './oldComponents/Message';
import Counter from './oldComponents/Counter';
import FunctionClick from './oldComponents/FunctionClick';
import ClassClick from './oldComponents/ClassClick';
import EventBind from './oldComponents/EventBind';
import ParentComponent from './oldComponents/ParentComponent';
import UserGreeting from './oldComponents/UserGreeting';
import NameList from './oldComponents/NameList';
import Stylesheets from './oldComponents/Stylesheets';
import Inline from './oldComponents/Inline';
import './styles/appStyles.css'
import styles from './styles/appStyles.module.css'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="" />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Inline /> */}
      {/* <Stylesheets primary/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Hello /> */}
      {/* <Greet name="Tony" heroName="Iron Man">
        <p>I'm Jarvis! (props children)</p>
      </Greet> */}
      {/* <Greet name="Steve" heroName="Captain America">
        <button>Test</button>
      </Greet> */}
      {/* <Greet name="Natasha" heroName="Black Widow" /> */}
      {/* <Welcome name="Tony" heroName="Iron Man" /> */}
      {/* <Welcome name="Steve" heroName="Captain America" /> */}
      {/* <Welcome name="Natasha" heroName="Black Widow" /> */}
    </div>
  );
}

export default App;
