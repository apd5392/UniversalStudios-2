const RideCard =(props) =>{
    return(
        <div>
                        {
                props.rides.map((ride)=>(
                    <div key={ride.ride}>
                        <h3>{ride.ride}</h3>
                        <div>
<h4>Ride type: {ride.ride_type}</h4>
                        <h4>Ride requirements: {ride.requirements}</h4>
                        </div>
                        <img src={ride.image}/>
                    </div>

                ))
            }
        </div>
    )
}
export default RideCard