import './card-list.styles.css';
import {Card} from '../card/card.jsx';

export const Cardlist=(props)=><div className='card-list'>
    {props.monsters.map((monster)=><Card key={monster.id} monster={monster} />)}
</div>