import React from "react"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend"
import DragDrop from "../components/DragDrop"

function Customize() {
    return (
        <DndProvider  backend={HTML5Backend}>
            <div className="customize"></div>

            <DragDrop />

        </DndProvider>
    )
}

export default Customize