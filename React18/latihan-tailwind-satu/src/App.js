import './App.css';

// import Greet, { GreetTwo, GreetThree } from './components/Greet'
// import { Message } from './components/Message'
// import {ClickHandler} from './components/ClickHandler'

// Parent Child Communication
import { ParentComponent } from './components/ParentComponent'

// Conditional Rendering
import {UserGreeting} from './components/UserGreeting'

// List Rendering
import {NameList} from './components/NameList'

// Stylesheet
import {Stylesheet} from './components/Stylesheet'
import {Inline} from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

// Forms
import {Form} from './components/Form'

// // HTTP GET & POST REQUEST
import {PostList} from './components/PostList'
import {PostForm} from './components/PostForm'

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <GreetTwo/> */}

      {/* Props */}
      {/* <GreetThree name="2B" heroName="Android Type B"/>
      <GreetThree name="9S" heroName="Android Type S">
        <button>Action!!!</button>
      </GreetThree>
      <GreetThree name="A2" heroName="Android Type A">
        <p>This is children props</p>
      </GreetThree> */}

      {/* State */}
      {/* <Message/> */}

      {/* Event Handling */}
      {/* <ClickHandler/> */}

      {/* Parent-Child Communication */}
      {/* <ParentComponent/> */}

      {/* Conditional Rendering */}
      {/* <UserGreeting/> */}

      {/* List Rendering */}
      {/* <NameList/> */}

      {/* Stylesheet */}
      {/* <Stylesheet/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* Forms */}
      {/* <Form/> */}

      {/* // HTTP GET & POST REQUEST */}
      <PostForm/>
      <PostList/>

    </div>
  );
}

export default App;
