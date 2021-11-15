import './PersoneItem.css'

const PersoneItem = (props) => {
    return (
        <div className="items">
            <li >{props.children}</li>
        </div>
    )
};

export default PersoneItem;