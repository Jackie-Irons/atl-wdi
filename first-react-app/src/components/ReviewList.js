import React, {Component} from 'react';

import Review from './Review'

class ReviewList extends Component {
	render() {
		const reviews = [
       {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
	];
	const reviewComponents = reviews.map((review) => {
		return <Review />
	});
	return ( 
		<div>
		{reviewComponents}
		</div>
		)
	}
}
export default ReviewList