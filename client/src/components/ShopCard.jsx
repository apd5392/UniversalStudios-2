const ShopCard = (props) =>{
    if (!props.shops) {
        return <h1>Loading please wait</h1>
      } else {
    return(
    <div>
                    {
                props.shops.map((shop)=>(
                    <div key={shop.name} className='card'>
                        <h3>{shop.name}</h3>
                        <p>{shop.about}</p>
                        <img src={shop.images}/>
                    </div>

                ))
            }
    </div>
    )
        }
}
export default ShopCard
