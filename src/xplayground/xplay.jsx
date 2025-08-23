import React, { useState, useEffect, useReducer, useContext, createContext } from 'react';

// 1. **JSX Example**
const JSXExample = () => {
  return <div>Hello, this is a JSX example!</div>;
};

// 2. **Functional Component with Props and State**
const Greeting = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You've clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

// 3. **Class Component Example**
class ClassComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 };
  }

  handleClick = () => {
    this.setState({ clicked: this.state.clicked + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Clicked {this.state.clicked} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

// 4. **useEffect Example** (Hook)
const UseEffectExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty array means it runs only once after initial render

  return (
    <div>
      <h2>useEffect Example</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

// 5. **Conditional Rendering Example**
const ConditionalRendering = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back, User!</h2> : <h2>Please log in.</h2>}
    </div>
  );
};

// 6. **List Rendering Example**
const ListExample = () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// 7. **Forms and Controlled Components**
const FormExample = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with value: ${value}`);
  };

  return (
    <div>
      <h2>Controlled Form Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// 8. **useReducer Hook Example**
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>useReducer Example</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

// 9. **React Context API**
const ThemeContext = createContext();

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme.background, color: theme.color }}>This is a themed component!</div>;
};

const ContextExample = () => {
  const theme = { background: 'lightblue', color: 'darkblue' };

  return (
    <ThemeContext.Provider value={theme}>
      <h2>React Context API Example</h2>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};

// 10. **Error Boundaries Example**
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }

    return this.props.children;
  }
}

const ErrorBoundaryExample = () => {
  return (
    <ErrorBoundary>
      <div>
        <h2>Error Boundary Example</h2>
        {/* Simulate error */}
        {null.map((item) => item)} 
      </div>
    </ErrorBoundary>
  );
};

// 11. **React Router Example**
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const ReactRouterExample = () => {
  return (
    <Router>
      <div>
        <h2>React Router Example</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route path="/" exact>
            <div>Home Page</div>
          </Route>
          <Route path="/about">
            <div>About Page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// 12. **React Fragment Example**
const FragmentExample = () => {
  return (
    <>
      <h2>Fragment Example</h2>
      <p>Fragments allow you to group elements without adding extra nodes to the DOM.</p>
    </>
  );
};

const App = () => {
  return (
    <div>
      <h1>React Concepts Showcase</h1>
      <JSXExample />
      <Greeting name="John Doe" />
      <ClassComponentExample />
      <UseEffectExample />
      <ConditionalRendering isLoggedIn={true} />
      <ListExample />
      <FormExample />
      <UseReducerExample />
      <ContextExample />
      <ErrorBoundaryExample />
      <ReactRouterExample />
      <FragmentExample />
    </div>
  );
};

export default App;
