import { useState } from "react";
import { useEffect } from "react";
import HotelsCard from "../components/HotelsCard";

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/accounts/hotels/')
        .then((res) => {
            if(!res.ok){
                throw new Error('Failed to fetch hotel')
            }
            return res.json()
        })
        .then((data) => {
            setHotels(data)
        })
        .catch((err) => {
            console.error(err.message)
        });
    }, []);
    return ( 
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {hotels.map((hotel) => (
                    <HotelsCard
                      key={hotel.id}
                      name={hotel.name}
                      address={hotel.address}
                      price={hotel.price}
                      rating={hotel.rating}
                      image={hotel.image}
                      />
                ))}
            </div>
        </div>
     );
}
 
export default Hotels;