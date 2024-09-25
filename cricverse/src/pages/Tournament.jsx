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
import { hardCodedMatches, hardCodedTournaments } from "../../matchdata";

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
    <div>
      <h1>Tournament</h1>
    </div>
  );
};

export default TournamentPage;
