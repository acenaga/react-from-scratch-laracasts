import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { useEffect, useState } from "react";

import { puppies as PuppiesData } from "./data/puppies"
import { Puppy } from "./types";
import { LoaderCircle } from "lucide-react";


export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header />
                <Main />
            </Container>
        </PageWrapper>

    )
}

function Main() {
    const [liked, setLiked] = useState<Puppy["id"][]>([1, 3]);
    const [searchQuery, setSearchQuery] = useState("");
    const [puppies, setPuppies] = useState<Puppy[]>(PuppiesData);
    return (
        <main>
            <ApiPuppies />
            {/* Search & Shortlist */}
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                {/* Search */}
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                {/* Shortlist */}
                <Shortlist puppies={puppies} liked={liked} setLiked={setLiked} />
            </div>
            {/* Puppies list */}
            <PuppiesList
                searchQuery={searchQuery}
                puppies={puppies}
                liked={liked}
                setLiked={setLiked}
            />
            {/* New Puppy form */}
            <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
        </main>

    )
}

function ApiPuppies() {
    //fetch puppies from api
    const [apiPuppies, setApiPuppies] = useState<[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        async function getpuppies() {
            setIsLoading(true);
            try {
                const response = await fetch('http://react-from-scratch-api.test/api/puppies');
                if (!response.ok) {
                    const errorData = await response.json();
                    setError(`${errorData.message}: ${errorData.details}`);
                    throw errorData
                }
                const data = await response.json();
                //console.log(data);
                setApiPuppies(data);
            } catch (error) {
                console.error(error)
            }
            setIsLoading(false);
        }
        getpuppies();
    }, [
        //re-run the effect
    ]);
    return (
        <div className="bg-white p-6 mt-12 shadow ring-black/5">
            {isLoading && <LoaderCircle className="animate-spin stroke-slate-300" /> }
            {apiPuppies.length > 0 && (
                <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>
            )}
            {error && <p className="text-red-500">Error: {error}</p>}
        </div>
    );
}
