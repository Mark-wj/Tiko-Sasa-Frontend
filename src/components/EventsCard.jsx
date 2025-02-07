const EventsCard = ({ title, venue, date, price, image }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
            <div className="relative">
                <img className="w-full h-2/3" src={image} alt={title} />
                <div className="absolute top-0 right-0 bg-rose-300 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                <p className="text-gray-600 text-sm mb-4">{date}</p>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{venue}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">KES: {price}</span>
                    <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">
                        Buy Tickets
                    </button>
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsCard;
  