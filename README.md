Dynamic Question Form Component

A flexible and reusable React component for creating dynamic forms with various question types and nested dependencies.

Features

Question Types


Text input for open-ended responses
Number input for numerical data
Dropdown select with customizable options
Support for nested/linked questions based on dropdown selections


Dropdown Capabilities


Dynamic addition and removal of options
Conditional rendering of linked questions based on selected options
Each linked question can have its own independent input type
Maintains parent-child relationship between options and linked questions


User Interface


Modern, clean design implemented with Tailwind CSS
Intuitive controls for form manipulation
Clear visual hierarchy and spacing
Visual indicators for question dependencies
Responsive layout that works across device sizes


State Management


Efficient state handling using React useState hooks
Maintains complex state relationships between questions and their dependencies
Predictable state updates for all form interactions




Installation
 npm install your-package-name


 



State Management

The component uses React's useState hook to manage:


Question list and their types
Dropdown options
Linked questions and their relationships
Form validation state


Example state struture



Best Practices


Keep question hierarchies shallow (max 2-3 levels) for better UX
Implement form validation before submission
Use clear, concise labels for questions and options
Provide visual feedback for user actions
Include proper error handling for edge cases


Contributing


Fork the repository
Create a feature branch
Commit your changes
Push to the branch
Create a Pull Request
