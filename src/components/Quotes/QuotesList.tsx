import { Quote } from '../../types/quote';
import QuoteItem from './QuoteItem'

function QuoteList({ quotes }: { quotes: Quote[] }) {
    return <>
        {
            quotes.map(quote => {
                return <QuoteItem quote={quote} key={quote._id} />
            })
        }
    </>
}

export default QuoteList;