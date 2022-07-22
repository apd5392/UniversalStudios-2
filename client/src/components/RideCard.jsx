const RideCard = (props) => {

    if (!props.rides) {
        return<h1>Loading please wait</h1>
    }
    else{
        return (
            <div>
              {props.rides.map((ride) => (
                <div key={ride.ride} className='card'>
                  <h3>{ride.ride}</h3>
                  <div className='properties'>
                    <h4>Ride type: {ride.ride_type}</h4>
                    <h4>Ride requirements: {ride.requirements}</h4>
                  </div>
                  <img src={ride.image} />
                </div>
              ))}
            </div>
          );
        };
    }


  
export default RideCard;
