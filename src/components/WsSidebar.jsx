import Dropdown from "../sidebar-components/Dropdown"// component that contains workspace sidebar

const items = [
    {
        id: 1,
        value: "Div Component",
    },
    {
        id: 2,
        value: "Nav Bar",
    },
    {
        id: 3,
        value: "Article",
    },
]

const WsSidebar = () => {
    return (
        <aside className="ws-sidebar">
            <Dropdown title="Select Component" items={items}/>
        </aside>
    );
}

export default WsSidebar;