export const faqData = [
    {
      question: "Why is it used for building web apps?",
      answer: "React is a popular JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It simplifies the process of building complex UIs by breaking them down into reusable components. React uses a virtual DOM to optimize rendering performance, making updates fast and efficient. This makes it an excellent choice for building dynamic and interactive web apps that require frequent updates to the user interface without full page reloads."
    },
    {
      question: "How do components work in React?",
      answer: "Components are the core building blocks of a React application. Each component is an independent, reusable piece of UI that can manage its own state and behavior. Components can be defined as functions or classes, and they return JSX — a syntax that looks like HTML — which describes how the UI should look. React combines all these components to create a complete and functional user interface, making it easier to manage and scale applications."
    },
    {
      question: "What is JSX in React?",
      answer: "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax directly within JavaScript code. JSX makes the structure of React components more readable and intuitive by combining the logic and markup in a single place. Although browsers don’t understand JSX directly, tools like Babel transpile it into plain JavaScript. This makes it easier to visualize the UI structure and logic together when developing React applications."
    },
    {
      question: "What is state in React?",
      answer: "State is a built-in feature in React components that allows you to store and manage dynamic data within a component. Unlike props, which are passed from parent to child, state is local and controlled by the component itself. When the state changes, React automatically re-renders the component to reflect the updated data. This makes state essential for managing things like user input, toggling UI elements, and fetching or storing data during the app lifecycle."
    },
    {
      question: "What are props in React?",
      answer: "Props, short for 'properties', are a way of passing data from one component to another, typically from a parent component to a child. They are read-only, meaning a child component cannot modify the props it receives. Props allow components to be dynamic and reusable, as the parent can control the child’s behavior and appearance by changing the props it sends. This concept is fundamental to React's unidirectional data flow model."
    },
    {
      question: "Why are hooks like useState important?",
      answer: "Hooks are functions that let you use React features without writing class components. `useState` is one of the most commonly used hooks, allowing functional components to manage local state. Before hooks, only class components could have state and lifecycle methods. Hooks simplify React development by letting you manage state, side effects, context, and more, directly within functional components, leading to cleaner and more maintainable code."
    },
    {
      question: "What does useEffect do in React?",
      answer: "`useEffect` is a powerful hook that lets you perform side effects in functional components. These side effects can include data fetching, DOM manipulation, setting up subscriptions, or timers. You can control when `useEffect` runs by specifying a dependency array. For example, passing an empty array runs the effect only once on mount, while adding dependencies runs it whenever those values change. This makes it an essential tool for managing component lifecycle behavior in modern React apps."
    },
    {
      question: "How does the virtual DOM work?",
      answer: "The virtual DOM is a lightweight copy of the actual DOM maintained in memory by React. When a component's state or props change, React creates a new virtual DOM and compares it with the previous version using a process called 'diffing'. It then calculates the minimal number of changes needed and updates only those parts of the real DOM. This approach significantly improves performance by avoiding unnecessary re-renders and making UI updates more efficient."
    }
  ];
  