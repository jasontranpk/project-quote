import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Max',
		text: 'Learning React is Fun!',
	},
	{
		id: 'q2',
		author: 'Me',
		text: 'Learning React is Cool!',
	},
	{
		id: 'q3',
		author: 'Jason',
		text: 'Learning React is The Best!',
	},
];

function QuoteDetail() {
	const match = useRouteMatch();
	const params = useParams();
	const quoteId = params.quoteId;
	const quote = DUMMY_QUOTES.find((item) => item.id === quoteId);
	if (!quote) {
		return <p>No quote Found</p>;
	}
	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={match.path} exact>
				<div className='centered'>
					<Link className='btn--flat' to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
}
export default QuoteDetail;
