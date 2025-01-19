Dynamic Question Form Component
A flexible and feature-rich React component for creating dynamic question forms with support for multiple question types, nested questions, and customizable options.
Features
Question Types

Text input fields for free-form responses
Number input fields with validation
Dropdown menus with customizable options

Dropdown Functionality

Dynamic addition and removal of options
Support for linked/nested questions per option
Each linked question can have its own input type
Visual hierarchy showing question relationships

User Interface

Modern, clean design implemented with Tailwind CSS
Intuitive controls for form manipulation
Clear visual indicators for nested questions
Responsive layout that works across devices

State Management

Efficient state handling using React's useState hook
Maintains complex relationships between questions and options
Preserves form state during user interaction

Installation

Ensure you have React and Tailwind CSS installed in your project:

bashCopynpm install react @types/react tailwindcss

Copy the component files into your project:

bashCopysrc/
  components/
    DynamicQuestionForm/
      index.jsx
      styles.css
Usage
jsxCopyimport DynamicQuestionForm from './components/DynamicQuestionForm';

function App() {
  return (
    <div className="container mx-auto p-4">
      <DynamicQuestionForm />
    </div>
  );
}
Basic Example
jsxCopy// Example of creating a form with an initial question
const initialQuestions = [
  {
    id: 1,
    type: 'dropdown',
    question: 'What is your preferred programming language?',
    options: [
      { 
        id: 1, 
        text: 'JavaScript',
        linkedQuestions: [
          {
            id: 2,
            type: 'text',
            question: 'Which JavaScript framework do you use?'
          }
        ]
      },
      { 
        id: 2, 
        text: 'Python',
        linkedQuestions: []
      }
    ]
  }
];

<DynamicQuestionForm initialQuestions={initialQuestions} />
Props
PropTypeDescriptioninitialQuestionsarrayArray of question objects to initialize the formonSubmitfunctionCallback function called when form is submittedclassNamestringAdditional CSS classes to apply to the form
Question Object Structure
typescriptCopyinterface Question {
  id: number;
  type: 'text' | 'number' | 'dropdown';
  question: string;
  options?: Option[];
}

interface Option {
  id: number;
  text: string;
  linkedQuestions: Question[];
}
Extending the Component
Adding Validation
jsxCopy// Example of adding validation to the form
const validateQuestion = (question, answer) => {
  if (question.type === 'number') {
    return !isNaN(answer) && answer !== '';
  }
  return answer !== '';
};
Adding New Question Types

Update the Question interface
Add new type handling in the rendering logic
Implement the new input component

jsxCopy// Example of adding a date type
case 'date':
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => handleChange(question.id, e.target.value)}
      className="form-input mt-1 block w-full"
    />
  );
Best Practices

Always provide unique IDs for questions and options
Implement proper error handling for form submissions
Consider accessibility when adding new features
Test nested question behavior thoroughly
Maintain consistent styling with Tailwind classes

Contributing

Fork the repository
Create a feature branch
Commit your changes
Push to the branch
Create a Pull Request

License
MIT License - feel free to use this component in your projects. 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
