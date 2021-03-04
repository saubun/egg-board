import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

export default function NavBarHeader() {
	// Make this filter all posts by name
	const searchHandler = () =>
		console.log('This feature is not yet implemented');

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">
					<h3>Hello</h3>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/posts">Posts</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button
							onClick={(e) => {
								e.preventDefault();
								searchHandler();
							}}
							variant="outline-success"
						>
							Search Posts
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
