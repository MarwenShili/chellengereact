import './PersoneList.module.css';
import Card from '../UI/Card/Card';
import classes from './PersoneList.module.css';
import PersoneItem from '../../PersoneItem/PersoneItem';


const PersoneList = (props) => {

 
    return (
    
        <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <PersoneItem 
          key ={user.id} 
          id ={user.id}
          onDelete={props.onDeleteItem}
          >
         {user.name}    ({user.age} years old)
          </PersoneItem>
        ))}
      </ul>
    </Card>

        
    );
};

export default PersoneList ;