import {OrderItem} from "../types"
import {useMemo, Dispatch} from "react"
import {formatCurrency} from "../helpers"
import {OrderActions} from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {
    const subtotalAmount = useMemo(() =>
        order.reduce((total, item) => total + (item.price * item.quantity) ,0)
        , [order]
    )
    const tipAmount = useMemo(() => subtotalAmount*tip, [order, tip])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [order, tip])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 text-white font-bold mt-10 uppercase disabled:opacity-20"
                disabled={totalAmount === 0}
                onClick={() => dispatch({type: 'place-order'})}
            >
                Guardar Orden
            </button>
        </>
    )
}