import { PageHeader } from './components/PageHeader';
import { NavBar } from './components/NavBar';
import { Acts } from './components/Acts';

function App() {
    return (
        <>
            <NavBar />
            <main className="p-6">
                <PageHeader />
                <Acts />
            </main>
        </>
    );
}

export default App;
