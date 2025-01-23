import React from "react";

const XboxProfile = () => {
  const profile = {
    gamertag: "YourGamertag",
    gamerscore: 12345,
    avatar: "https://example.com/avatar.png", // Replace with your avatar URL
    achievements: [
      { title: "Master Explorer", date: "2024-01-01", icon: "https://example.com/icon1.png" },
      { title: "Top Scorer", date: "2023-12-15", icon: "https://example.com/icon2.png" },
    ],
    favoriteGames: [
      { title: "Halo Infinite", cover: "https://example.com/halo.png" },
      { title: "Forza Horizon 5", cover: "https://example.com/forza.png" },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Profile Section */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <div className="flex items-center">
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-green-500"
          />
          <div className="ml-6">
            <h1 className="text-3xl font-bold">{profile.gamertag}</h1>
            <p className="text-lg text-gray-400">Gamerscore: {profile.gamerscore}</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800 rounded-lg p-4 shadow-md"
            >
              <img
                src={achievement.icon}
                alt={achievement.title}
                className="w-16 h-16 rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Favorite Games Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Favorite Games</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.favoriteGames.map((game, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={game.cover}
                alt={game.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{game.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XboxProfile;
