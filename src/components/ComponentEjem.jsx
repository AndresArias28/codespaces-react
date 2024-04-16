import { people } from "../data"

export function ComponentEjem(){

    const recetaLista = people.map(p => 
   
            <li key={p.id}>
                <h2>{p.name}</h2>
                <ul>
                    {
                        p.ingredients.map(ingre => 
                            <li key={ ingre }>
                                {ingre}
                            </li>
                        )
                    }
   
                </ul>
            </li>

        );

    return(
        <ul>
            {recetaLista}

        </ul>

    )
}