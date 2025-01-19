/* eslint-disable react/prop-types */
import   { useState } from 'react';
import { Trash2, Edit, ChevronDown, Plus } from 'lucide-react';

const QuestionManager = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'Is soil sample analysis done for the farm?',
      isLinked: true,
      showLinkedView: false,
      type: 'dropdown',},
      {
        id: 1,
        text: 'What is your favorite season?',
        options: [
          {
            id: 1,
            text: 'Summer',
            linkedQuestion: 'What do you enjoy most about summer activities?'
          },
          {
            id: 2,
            text: 'Winter',
            linkedQuestion: 'Do you prefer skiing or snowboarding?'
          },
          {
            id: 3,
            text: 'Spring',
            linkedQuestion: 'Which spring flowers do you like the most?'
          }
        ]
      },
      {
        id: 2, 
        text: 'How do you prefer to travel?',
        options: [
          {
            id: 1,
            text: 'By Car',
            linkedQuestion: 'What type of car do you own or prefer?'
          },
          {
            id: 2,
            text: 'By Plane',
            linkedQuestion: 'Do you prefer window or aisle seats?'
          },
          {
            id: 3,
            text: 'By Train',
            linkedQuestion: 'What is your favorite train journey?'
          }
        ]
      },
      {
        id: 3,
        text: 'What type of farm do you manage?',
        options: [
          {
            id: 1,
            text: 'Crop Farm',
            linkedQuestion: 'What are your main crops this season?'
          },
          {
            id: 2,
            text: 'Dairy Farm',
            linkedQuestion: 'How many dairy cows do you currently have?'
          },
          {
            id: 3,
            text: 'Mixed Farm',
            linkedQuestion: 'What is the ratio of crops to livestock?'
          }
        ]
      }
    
  ]);

  const toggleLinkedView = (questionId) => {
    setQuestions(questions.map(q =>
      q.id === questionId ? { ...q, showLinkedView: !q.showLinkedView } : q
    ));
  };

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      text: 'Is soil sample analysis done for the farm?',
      isLinked: false,
      showLinkedView: false,
      type: 'dropdown',
      options: []
    };
    setQuestions([...questions, newQuestion]);
  };

  const addOption = (questionId) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          options: [
            ...q.options,
            {
              id: q.options.length + 1,
              text: 'Lorem Ipsum is simply du...',
              linkedQuestion: 'Lorem Ipsum is simply du...'
            }
          ]
        };
      }
      return q;
    }));
  };

  const deleteOption = (questionId, optionId) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          options: q.options.filter(opt => opt.id !== optionId)
        };
      }
      return q;
    }));
  };

  const Header = () => (
    <div className="flex items-center gap-4 p-4 border-b">
      <div className="font-medium">Questions</div>
      <div className="flex items-center gap-2 text-sm">
        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded">Recurring</span>
        <span className="text-gray-400">Min 1</span>
        <span className="text-gray-400">Max 5</span>
        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded">Time Bound</span>
      </div>
    </div>
  );

  const SimpleView = ({ question }) => (
    <div className="p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"/>
            <div className="w-1 h-1 bg-gray-400 rounded-full"/>
            <div className="w-1 h-1 bg-gray-400 rounded-full"/>
          </div>
          <span>{question.id}.</span>
          <span>{question.text}</span>
          <button 
            onClick={() => toggleLinkedView(question.id)}
            className="text-blue-500 hover:underline"
          >
            Linked Question
          </button>
        </div>
        <div className="flex gap-2">
          <button className="text-blue-500">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-gray-500">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const LinkedView = ({ question }) => (
    <div className="p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"/>
            <div className="w-1 h-1 bg-gray-400 rounded-full"/>
            <div className="w-1 h-1 bg-gray-400 rounded-full"/>
          </div>
          <span>{question.id}.</span>
          <input 
            type="text" 
            value={question.text}
            className="border rounded px-2 py-1"
          />
        </div>
        <div className="flex gap-2">
          <button className="text-blue-500">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-gray-500">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <span>Drop down</span>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="appearance-none border rounded px-3 py-1 pr-8">
                  <option>Radio Button</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4" />
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={question.isLinked} />
                <span className="text-blue-500">Linked Question</span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {question.options.map((option) => (
            <div key={option.id} className="flex gap-3">
              <input
                type="text"
                value={option.text}
                className="flex-1 border rounded px-3 py-1"
              />
              <button 
                onClick={() => deleteOption(question.id, option.id)}
                className="text-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <button 
          onClick={() => addOption(question.id)}
          className="mt-4 flex items-center gap-2 text-blue-500"
        >
          <Plus className="w-4 h-4" />
          <span>Add Option</span>
        </button>

        <div className="mt-6 pt-4 border-t flex items-center gap-4">
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded-full bg-blue-50 text-blue-500">
              Option 1
            </button>
            <button className="px-4 py-1 rounded-full text-gray-500">
              Option 2
            </button>
            <button className="px-4 py-1 rounded-full text-gray-500">
              Option 3
            </button>
            <button className="px-4 py-1 rounded-full text-gray-500">
              Option 4
            </button>
            <button className="px-4 py-1 rounded-full text-gray-500">
              Default
            </button>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-gray-500">Only Default</span>
            <div className="w-10 h-6 bg-gray-200 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
      <Header />
      {questions.map(question => (
        <div key={question.id}>
          {question.showLinkedView ? (
            <LinkedView question={question} />
          ) : (
            <SimpleView question={question} />
          )}
        </div>
      ))}
      <div className="p-4">
        <button 
          onClick={addQuestion}
          className="flex items-center gap-2 text-blue-500"
        >
          <Plus className="w-4 h-4" />
          <span>Next Question</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionManager;