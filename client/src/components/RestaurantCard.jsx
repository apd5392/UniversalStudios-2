const RestaurantCard =(props)=>{

    if (!props.cafes) {
        return<h1>Loading please wait</h1>
    }
    else{
    return(
        <div>
            {
                props.cafes.map((cafe)=>(
                    <div key={cafe.name} className='card'>
                      
                        <h3>{cafe.name}</h3>
                        <div className='properties'>
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
    }
    export default RestaurantCard 