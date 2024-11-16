"use client";

import Image from "next/image";
import React, { useState } from "react";
import { getDailyChallenge } from "@/utils/dailyChallengePicker";
export default function Home() {
    const dailyChallenge = getDailyChallenge();
  

    const correctDate = dailyChallenge.date;
    const [isRulesOpen, setIsRulesOpen] = useState(false);
    const [isHintOpen, setIsHintOpen] = useState(false);
    const [guesses, setGuesses] = useState<number[]>([]);
    const [feedback, setFeedback] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [previousDifference, setPreviousDifference] = useState<number | null>(null);
  
    const handleGuess = () => {
      const guess = parseInt(inputValue);
      if (isNaN(guess)) {
        alert('Please enter a valid year.');
        return;
      }
  
      const newGuesses = [...guesses, guess];
      setGuesses(newGuesses);
  
      const difference = Math.abs(correctDate - guess);
      let newFeedback = '';
  
      if (guesses.length === 0) {
        newFeedback = 'Incorrect (First Guess)';
      } else {
        if (difference === 0) {
          newFeedback = 'Correct! 🎉';
        } else if (previousDifference === null ||difference < previousDifference) {
          newFeedback = 'Warmer 🔥';
        } else if (difference > previousDifference) {
          newFeedback = 'Colder 🥶';
        } else {
          newFeedback = 'Same temperature';
        }
      }
      setPreviousDifference(difference);
  
      const updatedFeedback = [...feedback, newFeedback];
      setFeedback(updatedFeedback);
  
      setInputValue('');
  
      if (guess === correctDate) {
        alert('Congratulations! You guessed the correct date!');
      } else if (newGuesses.length >= 6) {
        alert(`Sorry, you've used all your guesses. The correct date was ${correctDate}.`);
      }
    };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-100 font-baskervville">
      <div className="absolute top-4 right-4 flex space-x-2">
      <button
          onClick={() => setIsHintOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
      >
        Hint
      </button>
      <button
        onClick={() => setIsRulesOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        How To Play
      </button>
      </div>
      {isRulesOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Historcle Rules</h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>You have 6 attempts to guess the correct year</li>
              <li>After each guess, you'll get feedback on how close you are</li>
              <li>"Warmer 🔥" means you're getting closer</li>
              <li>"Colder 🥶" means you're getting further</li>
              <li>Each challenge comes with a hint!</li>
            </ul>
            <button
              onClick={() => setIsRulesOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isHintOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Hint</h2>
            <p className="mb-4">
              {dailyChallenge.hint}
            </p>
            <button
              onClick={() => setIsHintOpen(false)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    <h1 className="text-4xl font-bold mb-6">Historcle</h1>
    <Image
      src={dailyChallenge.image}
      alt="Historical Event"
      width={500}
      height={300}
      className="w-full max-w-md mb-4 shadow-lg"
    />
    <p className="text-lg mb-6">
      {dailyChallenge.caption}
    </p>
    {guesses.length < 6 && (
      <div className="flex mb-6">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleGuess();
            }
          }}
          placeholder="Enter a year"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                      [&::-webkit-inner-spin-button]:appearance-none border border-gray-300
                      dark:border-gray-700 rounded-l px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500
                      dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          onClick={handleGuess}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-200"
        >
          Guess
        </button>
      </div>
    )}
    <div className="w-full max-w-md max-h-[750px] overflow-y-auto">
      {guesses.map((guess, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded shadow-sm"
        >
          <p className="text-md">
            <strong>Guess {index + 1}:</strong> {guess} - {feedback[index]}
          </p>
        </div>
      ))}
    </div>
  </div>
  );
}
