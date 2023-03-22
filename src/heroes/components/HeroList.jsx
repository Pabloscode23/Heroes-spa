import { HeroCard } from "./HeroCard"
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() =>
        getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row rows-cols-1">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero} //pasa todas las propiedades
                    />
                ))
            }
        </div>
    )
}
