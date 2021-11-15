import './PersoneList.css';
import PersoneItem from '../PersoneItem/PersoneItem';
const PersoneList = (props) => {
    return (
        <div>
            {props.items.map(i => (
                <PersoneItem  key ={i.id} >{i.name}      {i.age} </PersoneItem>
            )
           
            )} <br />
        </div>
    );
};

export default PersoneList ;