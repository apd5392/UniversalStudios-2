const ShopCard = (props) =>{

    return(
    <div>
                    {
                props.shops.map((shop)=>(
                    <div key={shop.name}>
                        <h3>{shop.name}</h3>
                        <p>{shop.about}</p>
                        <img src={shop.images}/>
                    </div>

                ))
            }
    </div>
    )
}
export default ShopCard
