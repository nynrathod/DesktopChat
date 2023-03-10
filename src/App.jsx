import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from "react"

import axios from "axios"

function App() {

	const [proData, setProData] = useState([]);
	const [activeData, setActiveData] = useState([]);

	useEffect(() => {
		axios.get('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
			.then(function (response) {
				setProData(response.data)
				// console.log(response);
			}).catch(function (error) {
				console.log(error);
			})
	});

	// console.log(proData)

	function showChat(id) {

		document.getElementById("flp-chat-wrapper-screen").style.display = "block";
		document.getElementById("flp-chat-wrapper-screen").style.flex = "1.3";
		document.getElementById("flex-chat-wrapper-list-col").style.flex = "0.7";

		result = proData.filter(function (item) {
			if (item.id == id) {
				setActiveData(item)
			}
		})

	}

	console.log(activeData)

	return (
		<div className="App">
			<div className='flp-chat-wrapper'>
				<div className="flp-chat-wrapper-row flex flex-wrap">

					<div id="flex-chat-wrapper-list-col" className='flp-chat-wrapper-col flex-chat-wrapper-list-col'>
						<h4 className='flp-chat-wrapper-list-heading'>Filter by Title / Order ID</h4>
						<div>
							<input type="text" className="flp-chat-wrapper-search" placeholder='start typing to search' />
						</div>
						<div className="flp-chat-wrapper-list">
							{proData.length > 0 ?
								<>
									{proData.map((product, index) => {
										return (
											<>
												<div className="flex justify-between flp-chat-wrapper-list-box" onClick={() => showChat(product.id)}>
													<div className="flp-chat-product-img">
														<img src={product.imageURL} />
													</div>
													<div className="flp-chat-product-info">
														<h5>{product.title}</h5>
														<p className='flp-chat-orderid'>Order {product.orderId}</p>
														<p className='flp-chat-last-chat'>Are we connected</p>
													</div>
													<div className='flp-chat-list-date'>
														15/09/19
													</div>
												</div>
											</>
										)
									})}

								</>
								: ""
							}


						</div>
					</div>

					<div id="flp-chat-wrapper-screen" className='flp-chat-wrapper-col flp-chat-wrapper-screen'>
						<div className='flp-chat-screeen-header'>
							<h3>Flipkart Support</h3>
						</div>
						<div className='flp-chat-window'>
							{/* {activeData.length > 0 ?
								<>
									{activeData.map((user, index) => {
										return (
											<>
												{console.log("hello")}
											</>
										)
									})}
								</> : null} */}

							<div className="flp-chat-card-user">
								Hi I need help with support
							</div>
							<div className="flp-chat-card-bot">
								Hi sir how can I help you
							</div>
						</div>
						<input type="text" placeholder='Type amessage' className='flp-chat-input' />
					</div>

				</div>
			</div>
		</div>
	)
}

export default App
