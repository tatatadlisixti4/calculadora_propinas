import {useState} from "react";
import type { OrderItem } from "../types"

export default function useOrder() {
    // States
    const [order, setOrder] = useState<OrderItem[]>([])

    // Functions
    const addItem = () => {
        console.log('Agregando...')
    }
    return {
        addItem
    }
}