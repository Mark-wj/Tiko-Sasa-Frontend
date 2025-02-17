import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    // Ensure that id is defined
    if (!id) return;
    
    fetch(`http://127.0.0.1:8000/api/accounts/hotels/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setHotel(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [id]);

  // Render a loading message until hotel has been fetched
  if (!hotel || Object.keys(hotel).length === 0) {
    return <div>Loading hotel details...</div>;
  }

  return (
    <div className="hotels p-4">
      <h2 className="text-2xl font-bold">{hotel.name}</h2>
      <p>{hotel.address}</p>
      <span>KES {hotel.price}</span>
      <span>{hotel.rating}</span>
      <img src={hotel.image} alt={hotel.name} className="w-full h-auto rounded my-4" />
    </div>
  );
};

export default HotelDetails;
