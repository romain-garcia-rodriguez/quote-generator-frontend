import { useQuery } from "react-query";
import { getRandomQuotes } from "../api/quotes";
import Button from "../components/Button";
import QuoteList from "../components/Quotes/QuotesList";
import Loader from "../components/Loader";

function Home() {
  const { data, isLoading, refetch } = useQuery(
    "getRandomQuotes",
    getRandomQuotes
  );

  const getNewRandomQuotes = async () => {
    await refetch();
  };

  return (
    <div className="py-2 px-4">
      <main className="flex h-screen flex-col items-center justify-center">
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
