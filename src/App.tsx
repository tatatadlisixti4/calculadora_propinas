// Data
import {menuItems} from "./data/db"
// Componentes
import MenuItem from "./components/MenuItem.tsx"
import OrderContents from "./components/OrderContents.tsx"
import OrderTotals from "./components/OrderTotals.tsx";
import TipPercentageForm from "./components/TipPercentageForm.tsx";
// Hooks
import useOrder from "./hooks/useOrder.ts"

function App() {
    const {order, tip, setTip, addItem, removeItem} = useOrder()
    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-4xl font-black">Menú</h2>
                    <div className="space-y-3 mt-10">
                        {menuItems.map(item => (
                        <MenuItem
                                key={item.id}
                                item={item}
                                addItem={addItem}
                            />
                        ))}
                    </div>
                </div>

                <div className="border border-dashed border-slate-300 p-5 space-y-10 rounded-lg">
                    <OrderContents
                        order={order}
                        removeItem={removeItem}
                    />
                    <TipPercentageForm
                        setTip={setTip}
                    />

                    <OrderTotals
                        order={order}
                    />
                </div>


            </main>
        </>
    )
}

export default App
