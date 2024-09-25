"use client";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Activity,
  Calendar,
  Trophy,
} from "lucide-react";
import { hardCodedMatches, hardCodedTournaments } from "../../matchData";

const TournamentPage = () => {
  const [matches, setMatches] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("live");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          "https://api.cricapi.com/v1/currentMatches?apikey=9c321cea-0028-4cf3-b82c-a6ed8cd425e4&offset=0"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMatches(data?.data || hardCodedMatches); // Fallback to hardcoded data if API response is not as expected
      } catch (error) {
        setError(error);
        setMatches(hardCodedMatches); // Use hard-coded data if API fails
      } finally {
        setLoading(false);
      }
    };

    const fetchTournaments = async () => {
      try {
        const response = await fetch(
          "https://api.cricapi.com/v1/series?apikey=9c321cea-0028-4cf3-b82c-a6ed8cd425e4&offset=0"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTournaments(data?.data || hardCodedTournaments); // Fallback to hardcoded data if API response is not as expected
      } catch (error) {
        setError(error);
        setTournaments(hardCodedTournaments); // Use hard-coded data if API fails
      }
    };

    fetchMatches();
    fetchTournaments();
  }, []);

  const filteredMatches =
    matches?.filter((match) =>
      activeTab === "live"
        ? match.matchStarted && !match.matchEnded
        : !match.matchStarted
    ) || [];
  const filteredTournaments = activeTab === "tournaments" ? tournaments : [];

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 shadow-lg`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-green-400">Cricket Info</h1>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-8">
          <button
            onClick={() => setActiveTab("live")}
            className={`flex items-center w-full px-4 py-2 text-left ${
              activeTab === "live"
                ? "bg-green-500 text-white"
                : "text-gray-300 hover:bg-gray-700"
            } transition-colors duration-150`}
          >
            <Activity className="mr-2 h-5 w-5" />
            Live Matches
            <ChevronRight className="ml-auto h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex items-center w-full px-4 py-2 text-left ${
              activeTab === "upcoming"
                ? "bg-green-500 text-white"
                : "text-gray-300 hover:bg-gray-700"
            } transition-colors duration-150`}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Upcoming Matches
            <ChevronRight className="ml-auto h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveTab("tournaments")}
            className={`flex items-center w-full px-4 py-2 text-left ${
              activeTab === "tournaments"
                ? "bg-green-500 text-white"
                : "text-gray-300 hover:bg-gray-700"
            } transition-colors duration-150`}
          >
            <Trophy className="mr-2 h-5 w-5" />
            Tournaments
            <ChevronRight className="ml-auto h-5 w-5" />
          </button>
        </nav>
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-900 p-4 flex items-center justify-center shadow-md mt-[70px]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden absolute left-4"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h2 className="text-3xl font-semibold text-green-400">
            {activeTab === "live"
              ? "Live Matches"
              : activeTab === "upcoming"
              ? "Upcoming Matches"
              : "Tournaments"}
          </h2>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          {loading && (
            <div className="text-center text-lg font-semibold text-green-400">
              Loading...
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center">
              Error: {error.message}
            </div>
          )}

          {!loading && !error && (
            <>
              {activeTab !== "tournaments" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMatches.map((match) => (
                    <div
                      key={match.id}
                      className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors shadow-md"
                    >
                      <h2 className="text-lg font-semibold text-green-400 mb-2">
                        {match.name}
                      </h2>
                      <p className="text-sm text-gray-400 mb-2">
                        {match.status}
                      </p>
                      <p className="text-sm text-gray-400 mb-2">
                        {match.venue}
                      </p>
                      <p className="text-sm text-gray-400 mb-4">
                        {new Date(match.dateTimeGMT).toLocaleString()}
                      </p>
                      <div className="flex justify-between mb-4">
                        {match.teamInfo.map((team) => (
                          <div
                            key={team.shortname}
                            className="flex items-center space-x-2"
                          >
                            <img
                              src={team.img}
                              alt={team.name}
                              className="h-8 w-8"
                            />
                            <span>{team.shortname}</span>
                          </div>
                        ))}
                      </div>
                      {match.matchStarted && (
                        <p className="text-sm text-gray-400">
                          {match.score.map((inning, index) => (
                            <span key={index}>
                              {inning.inning}: {inning.r}/{inning.w} ({inning.o}{" "}
                              overs)
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTournaments.map((tournament) => (
                    <div
                      key={tournament.id}
                      className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors shadow-md"
                    >
                      <h2 className="text-lg font-semibold text-green-400 mb-2">
                        {tournament.name}
                      </h2>
                      <p className="text-sm text-gray-400 mb-2">
                        {new Date(tournament.startDate).toLocaleDateString()} -{" "}
                        {new Date(tournament.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-400 mb-2">
                        Matches: {tournament.matches}
                      </p>
                      <p className="text-sm text-gray-400 mb-2">
                        ODI: {tournament.odi}, T20: {tournament.t20}, Test:{" "}
                        {tournament.test}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};
export default TournamentPage;
