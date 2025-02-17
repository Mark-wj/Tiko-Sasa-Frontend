import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= movie.rating) {
        // Filled star
        stars.push(
          <span key={i} className="text-yellow-500 text-xl">
            &#9733;
          </span>
        );
      } else {
        // Unfilled star
        stars.push(
          <span key={i} className="text-gray-300 text-xl">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/accounts/movies/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Data");
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [id]);

  if (!movie || Object.keys(movie).length === 0) {
    return <div className="text-center py-8">Loading movie details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Poster image */}
          <div className="md:flex-shrink-0">
            <img
              className="w-full h-64 object-cover md:w-64"
              src={movie.poster}
              alt={movie.title}
            />
          </div>
          {/* Details section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {movie.title}
            </h2>
            <p className="mt-2 text-gray-600">Genre: {movie.genre}</p>
            <div className="mt-2 flex items-center">
              <span className="mr-2 text-gray-700">Rating:</span>
              {renderStars()}
            </div>
            <p className="mt-2 text-gray-600">
              Price: <span className="font-bold">KES {movie.price}</span>
            </p>
            <p className="mt-2 text-gray-600">Duration: {movie.duration} hrs</p>
            <p className="mt-2 text-gray-600">Showing on: {movie.date}</p>
            <p className="mt-2 text-gray-600">Tickets Available: {movie.no_of_tickets}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
