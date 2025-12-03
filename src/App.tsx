import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shorlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";

import { puppies } from "./data/puppies"


export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header />
                <main>
                    <Main />
                </main>
            </Container>
        </PageWrapper>

    )
}

function Main() {
    return (
        <>
            {/* Search & Shortlist */}
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                {/* Search */}
                <Search />
                {/* Shortlist */}
                <Shortlist/>
            </div>
            {/* Puppies list */}
            <PuppiesList puppies={puppies} />
            {/* New Puppy form */}
            <NewPuppyForm />
        </>

    )
}