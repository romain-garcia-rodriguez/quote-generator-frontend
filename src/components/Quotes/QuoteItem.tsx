import { Quote } from '../../types/quote';

function QuoteItem({ quote }: { quote: Quote}) {
    return <div className='mb-5 bg-gray-200 px-4 py-2 rounded-md'>
        <q className='italic block mb-2'>{ quote.content }</q>
        <p className='text-end font-medium'>{ quote.author }</p>
    </div>;
}

export default QuoteItem;