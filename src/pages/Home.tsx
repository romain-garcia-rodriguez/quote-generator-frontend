import Button from '../components/Button';
import QuoteList from "../components/Quotes/QuotesList";

function Home() {
  return (
    <div className="py-2 px-4">
        <main className="flex h-screen items-center justify-center flex-col">
        <QuoteList
            quotes={[
            {
                _id: "9-V6Bzl0nfN-",
                content:
                "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
                author: "Will Durant",
                tags: ["Famous Quotes"],
                authorSlug: "will-durant",
                length: 113,
                dateAdded: "2021-04-23",
                dateModified: "2023-04-14",
            },
            {
                _id: "9-V6Bzl0nfN-t",
                content:
                "Lorem Ipsum people is that they think with their hopes or fears or wishes rather than with their minds.",
                author: "Will Smith",
                tags: ["Famous Quotes"],
                authorSlug: "will-smith",
                length: 113,
                dateAdded: "2021-04-23",
                dateModified: "2023-04-14",
            },
            ]}
        />
        <Button content="Get new quotes" />
        </main>
    </div>
  );
}

export default Home;