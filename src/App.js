import React, { useEffect, useState } from "react";

import Configuration from './app.config';

import Button from './components/Button/Button.component';
import ContentContainer from './components/ContentContainer/ContentContainer.component';

const {InteractionKey, Buttons} = Configuration;

function App() {
	const [active, setActive] = useState(false);
	
	function HandleKeyDown(e) {
		if(e.key === InteractionKey) {
			setActive(true);
		}
	}

	function HandleKeyUp(e) {
		if(e.key === InteractionKey) {
			setActive(false);
		}
	}

	function handleClick(actionID) {
		console.log(actionID);
	}

	useEffect(() => {
		document.addEventListener('keydown', HandleKeyDown, {passive: true});
		document.addEventListener('keyup', HandleKeyUp, {passive: true});

		return () => {
			document.removeEventListener('keydown', HandleKeyDown, {passive: true});
			document.removeEventListener('keyup', HandleKeyUp, {passive: true});
		}
	}, []);

	return (
		<div className={`grid place-items-center w-full h-screen transition duration-200 ease-in-out ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
			<ContentContainer/>
			<div className="absolute z-0 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-96 h-96">
				<div className="relative h-full">
					{Buttons.map((button, idx) => (
						<Button onClick={handleClick} key={idx} {...button}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
