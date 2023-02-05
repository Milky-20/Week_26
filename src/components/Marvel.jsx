import './marvels.css';

function Marvel(props) {
    return(
<div className='marvelCard'>
    <h2>{props.name}</h2>
    <div>
  <img className='image' src={props.image} alt = 'SuperHeroes'></img>
  </div>
   <p><span>Вселенная: </span> {props.universe}</p> 
   <p><span>Альтер эго: </span>{props.alterago}</p> 
   <p><span>Подробная информация: </span>{props.details}</p> 
</div>
    );
}

export default Marvel;