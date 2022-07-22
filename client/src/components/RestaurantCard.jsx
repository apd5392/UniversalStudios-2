const RestaurantCard =(props)=>{
    return(
        <div>
            {
                props.cafes.map((cafe)=>(
                    <div key={cafe.name}>
                        <h3>{cafe.name}</h3>
                        <div>
                        <h4>{cafe.type}</h4>
                        <h4>Menu: {cafe.menu}</h4>
                        </div>
                        <p>{cafe.about}</p>
                        <img src={cafe.images}/>
                    </div>

                ))
            }
        </div>
    )
    }
    export default RestaurantCard 