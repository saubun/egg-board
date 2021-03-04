import React from 'react';
import {
	Container,
	Jumbotron,
	Button,
	Popover,
	OverlayTrigger,
} from 'react-bootstrap';

export default function Home() {
	// Act as a link to posts url
	function buttonHandler() {
		window.location.href = '/posts';
	}

	return (
		<>
			<Container className="mt-3">
				<Jumbotron>
					<h1>Hello, World!</h1>
					<p>Welcome to my simple social media website! Have a nice day!</p>
					<p>
						<Button onClick={buttonHandler} variant="primary">
							See posts!
						</Button>
					</p>
				</Jumbotron>
				<OverlayTrigger trigger="click" placement="top" overlay={h1Popover}>
					<h2>What is this site for?</h2>
				</OverlayTrigger>
				<p>
					This is simply my own social media site made with React and
					Typescript. I wont be posting much here, as this website is not for
					practical purposes, but rather for learning purposes.
				</p>
			</Container>
		</>
	);
}

const h1Popover = (
	<Popover id="popover-basic">
		<Popover.Title as="h3">Secret</Popover.Title>
		<Popover.Content>
			And here's some <strong>amazing</strong> content. Cool that you found
			this, right? :3
		</Popover.Content>
	</Popover>
);
