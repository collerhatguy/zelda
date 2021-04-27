import React from 'react'
import useAPI from '../hooks/useAPI'
import Inhabitant from './Inhabitant'

export default function PlacesPage() {
    const [data, isDone] = useAPI("places");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Locations</h2>
            <div className="loader" style={style}></div>
            {data.map(place => {
                return <div className="place-card card">
                            <div>
                                <h3>Name: <span>{place.name}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{place.description}</span></h3>
                            </div>
                            {place.inhabitants.map((inhabitant, index) => {
                                return <Inhabitant inhabitant={inhabitant} key={index} />
                            })}
                        </div>
                })
            }
        </div>
    )
}
