import React, { useState } from 'react';

function App() 
{

	const [currentIndex, setCurrentIndex] = useState(0);
	const [quizFinished, setQuizFinished] = useState(false)
	const [score, setScore] = useState(0);

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

	const handleAnswerClick= (isCorrect) =>
	{
		if(isCorrect)
		{
			setScore((score) => 
			{
				return score+1;
			})
		}
		if(currentIndex === questions.length-1)
		{
			setQuizFinished(true)
		}
		else
		{
			setCurrentIndex((value) => value + 1);
		}
	}

	return (
		<div className="app">
			{
				quizFinished ? (
					<div className="score-section">
						You scored {score} out of {questions.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>{currentIndex+1}</span>/{questions.length}
							</div>

							<div className="question-text">
								{questions[currentIndex].questionText}
							</div>
						</div>

						<div className="answer-section">
							{
								questions[currentIndex].answerOptions.map((answer) => {
									return( 
										<button key={answer.answerText} onClick={() => handleAnswerClick(answer.isCorrect)}>
											{answer.answerText}
										</button>
									)
								})
							}
						</div>
					</>
				)
			}
		</div>
	);
}

export default App;
