import { useQuery } from "react-query";
import { getRandomQuotes } from "../api/quotes";
import Button from "../components/Button";
import QuoteList from "../components/Quotes/QuotesList";
import Loader from "../components/Loader";
import { useRecoilState } from "recoil";
import quoteHistoryAtom from "../states/quoteHistoryAtom";
import { Quote } from "../types/quote";
import Header from "../components/Header";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [quoteHistoryAtomValue, setQuoteHistoryAtomValue] =
    useRecoilState(quoteHistoryAtom);

  const { data, isLoading, refetch, isError } = useQuery(
    "getRandomQuotes",
    async () => {
      const quotes = await getRandomQuotes();

      //If no quotes in response, return an empty quotes array
      if(!quotes.length) {
        return [];
      }

      // Update the quote history
      setQuoteHistoryAtomValue((currentQuoteHistory) => {
        const newQuoteHistory = [...currentQuoteHistory];

        //1. Check history length, if > 100, delete by response.length
        if (newQuoteHistory.length >= 10) {
          newQuoteHistory.splice(0, quotes.length);
        }

        //2. Put new value(s) at the end of the array
        return [...newQuoteHistory, ...quotes];
      });

      // Check history and delete quote already seen by user
      return quotes.filter((r: Quote) => {
        return ![...quoteHistoryAtomValue].find((quote) => r._id === quote._id);
      });
    },
    {
      enabled: true,
      onError: () => {
        //If an error occur, display toaster
        toast.error("An error occurred, try again", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      },
      retry: false,
    }
  );

  const getNewRandomQuotes = async () => {
    await refetch();
  };

  return (
    <div className="h-screen py-2 px-4">
      <Header />
      <ToastContainer />
      <main className="h-full flex flex-col items-center justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data?.length ? (
              <QuoteList quotes={data} />
            ) : (
              <h2 className='font-medium md:text-xl mb-4 md:mb-8'>No quotes found, try again</h2>
            )}
            <Button
              content="Get new quotes"
              onBtnClicked={getNewRandomQuotes}
            />
          </>
        )}
      </main>
      {isError && (
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
    </div>
  );
}

export default Home;
