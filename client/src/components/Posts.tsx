import React, { useState } from 'react';
import { Post, PostObject } from './Post';
import { Button, Container, Modal, Form, ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Posts() {
	const [show, setShow] = useState(false);
	const [posts, setPosts] = useLocalStorage([], 'posts');

	const handleShow = () => setShow(!show);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const postTitle: string = e.target.elements.title.value;
		const postBodyText: string = e.target.elements.bodyText.value;
		const post: PostObject = new PostObject(postTitle, postBodyText, uuidv4());
		setPosts((prevArray) => [...prevArray, post]);
		handleShow();
	};

	// Rerenders posts when the array changes

	function NewPostModal() {
		return (
			<div>
				<Modal show={show} onHide={handleShow}>
					<Form onSubmit={handleSubmit} autoComplete="off">
						<Modal.Header closeButton>
							<Modal.Title>Create Post</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form.Group controlId="formPostTitle">
								<Form.Label>Title</Form.Label>
								<Form.Control
									name="title"
									type="text"
									placeholder="Title"
									required
								/>
							</Form.Group>
							<Form.Group controlId="formPostText">
								<Form.Label>Body</Form.Label>
								<Form.Control
									as="textarea"
									placeholder="Input text..."
									name="bodyText"
									required
									style={{ resize: 'none', height: '10rem' }}
								/>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button type="submit">Post!</Button>
							<Button onClick={handleShow}>Cancel</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</div>
		);
	}

	let displayPosts = () => {
		return (
			<ListGroup variant="flush">
				{posts.map((post: any) => (
					<ListGroup.Item key={post.id}>
						<Post post={post} />
					</ListGroup.Item>
				))}
			</ListGroup>
		);
	};

	return (
		<>
			<Container className="mt-3" style={{ height: '100vh' }}>
				{posts.length === 0 && (
					<h4 className="text-center text-muted">There are no posts to show</h4>
				)}
				{displayPosts()}
				<Button
					variant="primary"
					size="lg"
					className="fixed-bottom"
					onClick={handleShow}
					block
					style={{ borderRadius: '0' }}
				>
					Create Post
				</Button>
				<NewPostModal />
			</Container>
		</>
	);
}
