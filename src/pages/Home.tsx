import { useQuery } from "react-query";
import { getRandomQuotes } from "../api/quotes";
import Button from "../components/Button";
import QuoteList from "../components/Quotes/QuotesList";
import Loader from "../components/Loader";
import { useRecoilState } from 'recoil';
import quoteHistoryAtom from '../states/quoteHistoryAtom';
import { Quote } from '../types/quote';
import Header from '../components/Header';

function Home() {
  const [quoteHistoryAtomValue, setQuoteHistoryAtomValue] = useRecoilState(quoteHistoryAtom);

  const { data, isLoading, refetch } = useQuery("getRandomQuotes", async () => {
    const response = await getRandomQuotes();

    // Update the quote history
    setQuoteHistoryAtomValue((currentQuoteHistory) => {
      const newQuoteHistory = [...currentQuoteHistory]
      
      //1. Check history length, if > 100, delete by response.length
      if(newQuoteHistory.length >= 10) {
        newQuoteHistory.splice(0, response!.length)
      }
      
      //2. Put new value(s) at the end of the array
      return [...newQuoteHistory, ...response!]
    })

    // Check history and delete quote already seen by user
    return response!.filter((r: Quote) => {
      return ![...quoteHistoryAtomValue].find(quote => r._id === quote._id)
    });
  }, {
    enabled: true
  });

  const getNewRandomQuotes = async () => {
    await refetch();
  };

  return (
    <div className="h-screen py-2 px-4">
      <Header />
      <main className="h-full flex flex-col items-center justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <QuoteList quotes={data!} />
            <Button
              content="Get new quotes"
              onBtnClicked={getNewRandomQuotes}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
