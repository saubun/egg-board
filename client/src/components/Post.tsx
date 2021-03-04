import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import useLocalStorage from '../hooks/useLocalStorage';
import { useHistory } from 'react-router';

// Class object to create new posts
export class PostObject {
	date = moment().format('YYYY-MM-DD hh:mm:ss A');

	constructor(public title: string, public text: string, public id: number) {}
}

// Display posts
export function Post({ post }: any) {
	// Get posts array
	const [posts, setPosts] = useLocalStorage([], 'posts');

	// Increment this when array data is removed so useeEffect knows when to run
	const [update, setUpdate] = useState(0);

	const history = useHistory();

	// Remove item from posts array
	const deletePost = (id: any) => {
		const newPosts = posts.filter((post: any) => post.id !== id);
		setPosts(newPosts);
		setUpdate(update + 1);
		history.go(0); // Refresh page because i cant find a better way
	};

	return (
		<>
			<Card className="mb-2">
				<Card.Body>
					<Card.Title>{post.title}</Card.Title>
					<Card.Text>{post.text}</Card.Text>
					<Button
						variant="primary"
						href={`/posts/${post.title}`}
						className="mr-2"
					>
						Read
					</Button>
					<Button<any>
						variant="danger"
						onClick={(e) => {
							e.preventDefault();
							deletePost(post.id);
						}}
					>
						Delete
					</Button>
				</Card.Body>
				<Card.Footer className="text-muted" style={{ fontSize: '0.8rem' }}>
					Posted on {post.date}
				</Card.Footer>
			</Card>
		</>
	);
}
