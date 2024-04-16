import { getImageUrl } from "../utils";
import { people } from "../data";

export function List() {
    const listQuimicos = people.filter(person => 
        person.profession === 'químico').map(p => 
        <li key={p.id}>
            <img 
                src={getImageUrl(p)}
                alt={p.name}
            />
            <p>
                <b>{p.name}</b>
                {' ' + p.profession + ' ' }
                conocido por {p.accomplishment}
            </p>
        </li> )

    const listItems= people.filter(person =>
            person.profession!== 'químico').map( person =>
        <li key={person.id}>
            <img 
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' ' }
                conocido por {person.accomplishment}
            </p>
        </li>
    );
    return (
        <article>
            <h1>Científicos</h1>
            <h2> Quimicos</h2>
            <ul>{listQuimicos}</ul>
            <h2> los demás</h2>
            <ul>{listItems} </ul>
        </article>
    );
}