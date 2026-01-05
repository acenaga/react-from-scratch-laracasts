import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shorlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { useState } from "react";

import { puppies } from "./data/puppies"
import { Puppy } from "./types";
import { LikedContext } from "./context/liked-context";


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
    const [liked, setLiked] = useState<Puppy["id"][]>([1,3]);
    return (
        <main>
            <LikedContext value={{ liked, setLiked }}>
                {/* Search & Shortlist */}
                <div className="mt-24 grid gap-8 sm:grid-cols-2">
                    {/* Search */}
                    <Search />
                    {/* Shortlist */}
                    <Shortlist puppies={puppies} />
                </div>
                {/* Puppies list */}
                <PuppiesList puppies={puppies}/>
            </LikedContext>
            {/* New Puppy form */}
            <NewPuppyForm />
        </main>

    )
}
