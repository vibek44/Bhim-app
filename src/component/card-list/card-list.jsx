import './card-list.styles.css';

export const Cardlist=(props)=>
<div className='card-list'>
   { props.monsters.map((monster)=><h1>{monster.name}</h1>)
   }
</div>