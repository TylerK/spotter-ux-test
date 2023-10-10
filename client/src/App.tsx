import { PageHeader } from './components/PageHeader';
import { NavBar } from './components/NavBar';
import { ActsList } from './components/Acts/ActsList';

function App() {
    return (
        <>
            <NavBar />
            <main className="p-6">
                <PageHeader />
                <ActsList />
            </main>
        </>
    );
}

export default App;
