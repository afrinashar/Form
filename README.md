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

Responsive Design
Breakpoints
The component uses Tailwind CSS breakpoints for responsive design:
jsxCopy// Breakpoint definitions
sm: '640px'   // Small devices (phones)
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices (laptops)
xl: '1280px'  // Extra large devices (desktops)
2xl: '1536px' // Extra extra large devices
Mobile-First Approach
jsxCopy// Example of responsive classes in the component
<div className="
  w-full              // Full width on mobile
  md:w-4/5           // 80% width on tablets
  lg:w-3/4           // 75% width on laptops
  xl:w-2/3           // 66% width on desktops
  mx-auto            // Center the container
  p-4                // Padding on all devices
  md:p-6             // Larger padding on tablets and up
">
Responsive Features

Form Layout
jsxCopy<div className="
  grid
  grid-cols-1          // Stack vertically on mobile
  md:grid-cols-2       // 2 columns on tablets
  lg:grid-cols-3       // 3 columns on desktop
  gap-4
">

Question Containers
jsxCopy<div className="
  p-2                  // Small padding on mobile
  md:p-4               // Larger padding on tablets
  rounded-lg
  shadow-sm
  md:shadow-md
">

Input Fields
jsxCopy<input className="
  w-full
  text-sm             // Smaller text on mobile
  md:text-base        // Regular text on larger screens
  p-2
  md:p-3
"/>

Dropdown Menus
jsxCopy<select className="
  w-full
  max-w-full          // Prevent overflow on mobile
  text-sm
  md:text-base
">

Nested Questions
jsxCopy<div className="
  ml-2                // Small indent on mobile
  md:ml-4             // Larger indent on tablets
  pl-2
  md:pl-4
  border-l-2
">


Touch-Friendly Features
jsxCopy// Example of touch-friendly button
<button className="
  p-3                    // Larger touch target
  min-h-[44px]          // Minimum height for touch
  min-w-[44px]          // Minimum width for touch
  md:p-2                // Can be smaller on desktop
  rounded-lg
  hover:bg-gray-100
  active:bg-gray-200    // Feedback for touch
">
Responsive Typography
jsxCopy// Example of responsive text sizing
<h2 className="
  text-lg              // Base size on mobile
  md:text-xl           // Larger on tablets
  lg:text-2xl         // Even larger on desktop
  font-semibold
  mb-2
  md:mb-4
">
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
Mobile Testing Guidelines

Device Testing

Test on multiple physical devices
Use Chrome DevTools device emulation
Test different orientations (portrait/landscape)


Touch Interaction

Verify touch targets are at least 44x44px
Test swipe and scroll behaviors
Ensure dropdowns are easy to select


Performance

Monitor form performance on low-end devices
Test with slower network connections
Optimize animations for mobile



Best Practices

Always provide unique IDs for questions and options
Implement proper error handling for form submissions
Consider accessibility when adding new features
Test nested question behavior thoroughly
Maintain consistent styling with Tailwind classes
Test thoroughly on various devices and screen sizes
Use appropriate input types for mobile keyboards

Contributing

Fork the repository
Create a feature branch
Commit your changes
Push to the branch
Create a Pull Request
