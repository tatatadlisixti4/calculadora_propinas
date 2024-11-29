import {useState} from "react";
import type {MenuItem, OrderItem} from "../types"

export default function useOrder() {
    // States
    const [order, setOrder] = useState<OrderItem[]>([])

    // Functions
    const addItem = (item : MenuItem) => {
        console.log(item)
    }
    return {
        addItem
    }
}