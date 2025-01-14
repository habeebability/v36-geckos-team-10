import dragAndDrop from "../features/dragDrop";
import { useEffect, useRef } from "react";
import BuilderComponent from "../components/BuilderComponent";

// component that contains workspace builder area
// builder components are added automatically by clicking the sidebar menu
const WsBuilder = ({ buildingBlocks }) => {
    let dragParent = useRef(null);
    useEffect(() => {
        //sends DOM element to the function
        dragAndDrop(dragParent);
    }, [buildingBlocks]);
    return (
        <main className="ws-builder" ref={dragParent}>
            {buildingBlocks.map((block, ind) => <BuilderComponent className="element" 
                                                key={ind} 
                                                tags={block} 
                                                />)}
        </main>
    );
}

export default WsBuilder;