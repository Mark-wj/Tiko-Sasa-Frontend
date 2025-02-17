import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  // Destructure "id" if your route is defined as /events/:id
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/accounts/events/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch event details");
        }
        return res.json();
      })
      .then((data) => {
        // data is a plain array; convert id from string to number
        const i = parseInt(id, 10);
        if (i >= 0 && i < data.length) {
          setEvent(data[i]);
        } else {
          console.error("Index out of bounds");
        }
      })
      .catch((err) => console.error(err.message));
  }, [id]);

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{event.title}</h2>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Price:</strong> KES {event.price}</p>
      <img className="h-auto rounded my-4 mr-24 ml-24 w-2/3 top-0 mt-0" src={event.image} alt={event.title} />
      <p><strong>Tickets Available:</strong> {event.no_of_tickets}</p>
    </div>
  );
};

export default EventDetails;
