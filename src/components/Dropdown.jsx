import {useState} from "react";
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa'
import BuilderComponent from "./BuilderComponent";

function Dropdown({title, items = []}, multiSelect = false) {
    const[open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open)
    Dropdown.handleClickOutside = () => setOpen(false)

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
                setSelection([item])
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            )
            setSelection([...selectionAfterRemoval])
        }
    }

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
            return true;
            
        }
        return false;
    }

    return (
        <div className="dd-wrapper">
            <div 
                tabIndex={0} 
                className="dd-header" 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick={() =>toggle(!open)}
            >
                <div className="dd-header__title">
                    <p className="dd-header__title--bold">{title}</p>
                </div>
                <div className="dd-header__action">
                    <p>{open ? <FaAngleDown/> : <FaAngleUp/>}</p>
                </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id} >
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>{isItemInSelection(item) && item.value}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
}

export default Dropdown;
