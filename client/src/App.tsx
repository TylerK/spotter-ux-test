import { PageHeader } from './components/PageHeader';
import { NavBar } from './components/NavBar';
import { ActsList } from './components/Acts/ActsList';
import { NewActSheet } from './components/Sheets/NewActSheet';
import { NewBeatSheet } from './components/Sheets/NewBeatSheet';
import { UpdateBeatSheet } from './components/Sheets/UpdateBeatSheet';
import { UpdateActSheet } from './components/Sheets/UpdateActSheet';
import { SHEETS, useSheetStore } from './store/sheets';

function App() {
    const { sheet } = useSheetStore((state) => state);

    return (
        <>
            <NavBar />
            <main className="p-6">
                <PageHeader />
                <ActsList />
            </main>

            {sheet === SHEETS.CREATE_ACT && <NewActSheet />}
            {sheet === SHEETS.UPDATE_ACT && <UpdateActSheet />}
            {sheet === SHEETS.CREATE_BEAT && <NewBeatSheet />}
            {sheet === SHEETS.UPDATE_BEAT && <UpdateBeatSheet />}
        </>
    );
}

export default App;
