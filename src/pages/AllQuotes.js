import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
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

function AllQuotes() {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getAllQuotes, true);
	useEffect(() => {
		sendRequest();
	}, [sendRequest]);
	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}
	if (error) {
		return <p className='centered focused'>{error}</p>;
	}

	if (
		status === 'completed' &&
		(!loadedQuotes || loadedQuotes.length === 0)
	) {
		return <NoQuotesFound />;
	}
	return <QuoteList quotes={loadedQuotes} />;
}
export default AllQuotes;
