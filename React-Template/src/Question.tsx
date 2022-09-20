import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
export const Question = ({ info, showTitle }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<article className="question">
				<header>
					<h4>{showTitle}</h4>
					<button className="btn" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
					</button>
				</header>
				{isOpen && <p>{info}</p>}
			</article>
		</>
	);
};
