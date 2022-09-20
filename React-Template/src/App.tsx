import React, { useState } from 'react';
import './App.css';
import { Question } from './Question';
import { data } from './data';
function App() {
	const [questions, setQuestions] = useState(data);
	return (
		<div className="App">
			<main>
				<div className="container">
					<h3>questions and answers about login</h3>
					<section className="info">
						{questions.map((q: any) => {
							const { id, title, info } = q;

							return <Question key={id} info={info} showTitle={title} />;
						})}
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;
