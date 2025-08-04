import React from 'react'
import Accordion from './components/Accordion';
const faqData = [
  { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
  { question: 'Why use React?', answer: 'It makes building interactive UIs painless and efficient.' },
  { question: 'How does React work?', answer: 'React creates a virtual DOM and syncs it with the real DOM.' },
];
const App = () => {
  return (
    <div>
      <h2 className='text-center font-bold py-6 text-3xl'>Frequently Asked Questions</h2>
      <Accordion data={faqData} />
    </div>
  )
}

export default App