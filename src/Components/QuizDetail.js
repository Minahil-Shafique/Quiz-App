const Questions = [
  {
    prompt: "What is React.js?",
    options: [
      "A JavaScript framework for building web applications.",
      "A programming language.",
      "A database management system.",
      "A text editor.",
    ],
    correct_answer: "A JavaScript framework for building web applications.",
  },
  {
    prompt: "Which virtual DOM library is used in React?",
    options: ["Vue.js", "Angular", "jQuery", "ReactDOM"],
    correct_answer: "ReactDOM",
  },
  {
    prompt: "In React, what is a component?",
    options: [
      "A file that contains HTML and CSS code.",
      "A reusable piece of UI that can be composed of other components.",
      "A JavaScript function that renders HTML.",
      "A JSON object.",
    ],
    correct_answer:
      "A reusable piece of UI that can be composed of other components.",
  },
  {
    prompt:
      "Which lifecycle method is invoked after a component is inserted into the DOM?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentWillUnmount",
      "rendered",
    ],
    correct_answer: "componentDidMount",
  },
  {
    prompt: "What is JSX in React?",
    options: [
      "JavaScript Expressions",
      "JavaScript XML",
      "JavaScript XHR",
      "JavaScript Syntax",
    ],
    correct_answer: "JavaScript XML",
  },
  {
    prompt:
      "How do you pass data from a parent component to a child component in React?",
    options: ["Using props", "Using state", "Using refs", "Using context"],
    correct_answer: "Using props",
  },
  {
    prompt: "Which method is used to update the state of a component in React?",
    options: [
      "this.setState()",
      "this.updateState()",
      "this.changeState()",
      "this.modifyState()",
    ],
    correct_answer: "this.setState()",
  },
  {
    prompt: "What is the purpose of React Router?",
    options: [
      "To create animations in React applications.",
      "To manage the state of a React component.",
      "To add routing and navigation to React applications.",
      "To handle HTTP requests in React.",
    ],
    correct_answer: "To add routing and navigation to React applications.",
  },
  {
    prompt: "What is Redux in React?",
    options: [
      "A built-in data store in React.",
      "A state management library for React applications.",
      "A testing framework for React components.",
      "A server-side rendering engine for React.",
    ],
    correct_answer: "A state management library for React applications.",
  },
  {
    prompt: "What does the term 'props' stand for in React?",
    options: ["Properties", "Parameters", "Procedures", "Prototypes"],
    correct_answer: "Properties",
  },
  {
    prompt: "In React, how can you conditionally render components?",
    options: [
      "Using the `if` statement in JSX.",
      "Using the `renderIf` method.",
      "Using the `map` function.",
      "Using ternary operators and logical expressions.",
    ],
    correct_answer: "Using ternary operators and logical expressions.",
  },
  {
    prompt: "What is the purpose of the `key` prop in React lists?",
    options: [
      "To specify the list's position on the screen.",
      "To provide a unique identifier for each list item.",
      "To style the list items.",
      "To add animation effects to the list.",
    ],
    correct_answer: "To provide a unique identifier for each list item.",
  },
  {
    prompt: "What is the use of React Fragments?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM.",
      "To create custom components in React.",
      "To define the structure of a React component.",
      "To handle HTTP requests in React.",
    ],
    correct_answer:
      "To group multiple elements without adding extra nodes to the DOM.",
  },
  {
    prompt: "Which tool can you use to bootstrap a new React application?",
    options: ["React CLI", "Webpack", "Create React App", "Babel"],
    correct_answer: "Create React App",
  },
  {
    prompt:
      "What is the purpose of the `shouldComponentUpdate` method in React?",
    options: [
      "To force a component to re-render.",
      "To determine if a component should re-render or not.",
      "To update the component's state.",
      "To handle events in the component.",
    ],
    correct_answer: "To determine if a component should re-render or not.",
  },
  {
    prompt: "Which method is used to handle events in React?",
    options: ["handleEvent", "eventHandler", "addEventListener", "onClick"],
    correct_answer: "onClick",
  },
  {
    prompt: "What is Redux Thunk used for in Redux?",
    options: [
      "To add routing and navigation to Redux applications.",
      "To perform asynchronous actions in Redux.",
      "To style Redux components.",
      "To manage state in Redux.",
    ],
    correct_answer: "To perform asynchronous actions in Redux.",
  },
  {
    prompt: "What does JSX transpile to?",
    options: ["HTML", "JavaScript", "XML", "CSS"],
    correct_answer: "JavaScript",
  },
  {
    prompt:
      "What is the purpose of the `componentWillReceiveProps` method in React?",
    options: [
      "To receive data from child components.",
      "To update the component's state.",
      "To set initial props for a component.",
      "To detect changes in props and update the component accordingly.",
    ],
    correct_answer:
      "To detect changes in props and update the component accordingly.",
  },
  {
    prompt: "What is a higher-order component (HOC) in React?",
    options: [
      "A component that is positioned higher in the component tree.",
      "A component that wraps another component, adding additional functionality.",
      "A component that renders only children components.",
      "A component with a higher z-index.",
    ],
    correct_answer:
      "A component that wraps another component, adding additional functionality.",
  },
];

export default Questions;
