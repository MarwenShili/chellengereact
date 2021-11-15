import './PersoneList.module.css';
import Card from '../UI/Card/Card';
import classes from './PersoneList.module.css';


const PersoneList = (props) => {
    return (
    
        <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>

        
    );
};

export default PersoneList ;