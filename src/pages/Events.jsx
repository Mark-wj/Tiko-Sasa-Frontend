import { useEffect, useState } from "react";
import EventsCard from "../components/EventsCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/accounts/events/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div key={event.id}>
              <EventsCard
                title={event.title}
                venue={event.venue}
                date={event.date}
                price={event.price}
                image={event.image}
              />
            </div>
            ))}
      </div>
    </div>
  );
};

export default Events;
