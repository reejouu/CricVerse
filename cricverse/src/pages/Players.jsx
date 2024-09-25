// use client
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Trophy, User, Flag } from "lucide-react";

// Extended cricket player data
const players = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    country: "India",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 254,
        runs: 12344,
        average: 57.68,
        strikeRate: 93.25,
        best: "183",
      },
      t20: {
        matches: 97,
        runs: 3296,
        average: 51.5,
        strikeRate: 137.96,
        best: "122*",
      },
      test: {
        matches: 100,
        runs: 8007,
        average: 49.95,
        strikeRate: 55.64,
        best: "254*",
      },
    },
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Bowler",
    country: "England",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 194,
        wickets: 269,
        average: 29.22,
        economy: 4.92,
        best: "5/23",
      },
      t20: {
        matches: 19,
        wickets: 18,
        average: 30.66,
        economy: 7.84,
        best: "3/23",
      },
      test: {
        matches: 166,
        wickets: 640,
        average: 26.58,
        economy: 2.79,
        best: "7/42",
      },
    },
  },
  {
    id: 3,
    name: "Ellyse Perry",
    role: "All-rounder",
    country: "Australia",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 118,
        runs: 3135,
        average: 50.56,
        strikeRate: 78.31,
        best: "112*",
        wickets: 152,
        bowlAverage: 24.91,
        economy: 4.19,
        bowlBest: "7/22",
      },
      t20: {
        matches: 126,
        runs: 1474,
        average: 30.7,
        strikeRate: 118.51,
        best: "60*",
        wickets: 115,
        bowlAverage: 19.45,
        economy: 5.85,
        bowlBest: "4/12",
      },
      test: {
        matches: 9,
        runs: 752,
        average: 75.2,
        strikeRate: 53.33,
        best: "213*",
        wickets: 37,
        bowlAverage: 19.97,
        economy: 2.44,
        bowlBest: "6/32",
      },
    },
  },
  {
    id: 4,
    name: "Rashid Khan",
    role: "Bowler",
    country: "Afghanistan",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 80,
        wickets: 157,
        average: 18.57,
        economy: 4.16,
        best: "6/43",
      },
      t20: {
        matches: 71,
        wickets: 122,
        average: 13.73,
        economy: 6.25,
        best: "5/3",
      },
      test: {
        matches: 5,
        wickets: 34,
        average: 22.35,
        economy: 2.81,
        best: "5/82",
      },
    },
  },
  {
    id: 5,
    name: "Steve Smith",
    role: "Batsman",
    country: "Australia",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 128,
        runs: 4378,
        average: 43.34,
        strikeRate: 87.55,
        best: "164",
      },
      t20: {
        matches: 45,
        runs: 814,
        average: 27.13,
        strikeRate: 131.5,
        best: "90",
      },
      test: {
        matches: 87,
        runs: 8647,
        average: 59.77,
        strikeRate: 54.75,
        best: "239",
      },
    },
  },
  {
    id: 6,
    name: "Mithali Raj",
    role: "Batsman",
    country: "India",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 220,
        runs: 7805,
        average: 50.68,
        strikeRate: 66.27,
        best: "125*",
      },
      t20: {
        matches: 89,
        runs: 2364,
        average: 37.52,
        strikeRate: 96.33,
        best: "97*",
      },
      test: {
        matches: 12,
        runs: 699,
        average: 43.68,
        strikeRate: 37.52,
        best: "214",
      },
    },
  },
  {
    id: 7,
    name: "Ben Stokes",
    role: "All-rounder",
    country: "England",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 104,
        runs: 2928,
        average: 40.76,
        strikeRate: 95.62,
        best: "102*",
        wickets: 70,
        bowlAverage: 34.1,
        economy: 5.77,
        bowlBest: "5/61",
      },
      t20: {
        matches: 37,
        runs: 915,
        average: 27.89,
        strikeRate: 136.9,
        best: "78",
        wickets: 25,
        bowlAverage: 29.32,
        economy: 8.29,
        bowlBest: "3/15",
      },
      test: {
        matches: 79,
        runs: 4038,
        average: 36.82,
        strikeRate: 60.4,
        best: "258",
        wickets: 171,
        bowlAverage: 31.93,
        economy: 3.58,
        bowlBest: "6/22",
      },
    },
  },
  {
    id: 8,
    name: "Kane Williamson",
    role: "Batsman",
    country: "New Zealand",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 160,
        runs: 6173,
        average: 47.83,
        strikeRate: 74.96,
        best: "145",
      },
      t20: {
        matches: 74,
        runs: 2265,
        average: 33.61,
        strikeRate: 126.03,
        best: "95",
      },
      test: {
        matches: 97,
        runs: 7590,
        average: 53.34,
        strikeRate: 60.0,
        best: "251",
      },
    },
  },
  {
    id: 9,
    name: "Joe Root",
    role: "Batsman",
    country: "England",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 158,
        runs: 6052,
        average: 49.66,
        strikeRate: 87.13,
        best: "133",
      },
      t20: {
        matches: 32,
        runs: 893,
        average: 35.72,
        strikeRate: 126.56,
        best: "90",
      },
      test: {
        matches: 101,
        runs: 8797,
        average: 48.88,
        strikeRate: 59.13,
        best: "254",
      },
    },
  },
  {
    id: 10,
    name: "Shahid Afridi",
    role: "All-rounder",
    country: "Pakistan",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpgg",
    stats: {
      odi: {
        matches: 398,
        runs: 8064,
        average: 24.53,
        strikeRate: 117.0,
        best: "153",
        wickets: 395,
        bowlAverage: 34.51,
        economy: 4.61,
        bowlBest: "7/12",
      },
      t20: {
        matches: 99,
        runs: 1416,
        average: 28.97,
        strikeRate: 150.0,
        best: "104*",
        wickets: 98,
        bowlAverage: 24.37,
        economy: 6.75,
        bowlBest: "4/11",
      },
      test: {
        matches: 66,
        runs: 1716,
        average: 36.51,
        strikeRate: 86.97,
        best: "156",
        wickets: 48,
        bowlAverage: 40.58,
        economy: 3.71,
        bowlBest: "5/11",
      },
    },
  },
  {
    id: 11,
    name: "Jacques Kallis",
    role: "All-rounder",
    country: "South Africa",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 328,
        runs: 11579,
        average: 44.36,
        strikeRate: 72.89,
        best: "139*",
        wickets: 273,
        bowlAverage: 31.79,
        economy: 4.86,
        bowlBest: "5/30",
      },
      t20: {
        matches: 25,
        runs: 666,
        average: 28.0,
        strikeRate: 89.74,
        best: "48",
        wickets: 12,
        bowlAverage: 30.25,
        economy: 8.12,
        bowlBest: "3/15",
      },
      test: {
        matches: 166,
        runs: 13289,
        average: 55.37,
        strikeRate: 38.55,
        best: "224",
        wickets: 292,
        bowlAverage: 32.65,
        economy: 2.65,
        bowlBest: "7/49",
      },
    },
  },
  {
    id: 12,
    name: "Babar Azam",
    role: "Batsman",
    country: "Pakistan",
    image:
      "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    stats: {
      odi: {
        matches: 103,
        runs: 4680,
        average: 59.55,
        strikeRate: 87.64,
        best: "158",
      },
      t20: {
        matches: 99,
        runs: 3335,
        average: 46.55,
        strikeRate: 135.25,
        best: "122*",
      },
      test: {
        matches: 50,
        runs: 4244,
        average: 49.48,
        strikeRate: 56.32,
        best: "196",
      },
    },
  },
];

export default function Players() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-white flex items-center justify-center">
          <Trophy className="mr-2" /> Cricket Players
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg text-white border-none overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg cricket-card">
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                  <img
                    src={player.image}
                    alt={`${player.name} Image`}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-green-500"
                  />
                  <CardTitle className="text-2xl font-bold text-center">
                    {player.name}
                  </CardTitle>
                  <div className="flex items-center justify-center text-sm mt-2">
                    <User className="mr-2 h-4 w-4" />
                    <span className="mr-4">{player.role}</span>
                    <Flag className="mr-2 h-4 w-4" />
                    <span>{player.country}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs defaultValue="odi" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-green-800/50">
                      <TabsTrigger
                        value="odi"
                        className="data-[state=active]:bg-green-700 data-[state=active]:text-white"
                      >
                        ODI
                      </TabsTrigger>
                      <TabsTrigger
                        value="t20"
                        className="data-[state=active]:bg-green-700 data-[state=active]:text-white"
                      >
                        T20
                      </TabsTrigger>
                      <TabsTrigger
                        value="test"
                        className="data-[state=active]:bg-green-700 data-[state=active]:text-white"
                      >
                        Test
                      </TabsTrigger>
                    </TabsList>
                    {["odi", "t20", "test"].map((format) => (
                      <TabsContent
                        key={format}
                        value={format}
                        className="p-4 bg-green-900/30"
                      >
                        <dl className="grid grid-cols-2 gap-2 text-sm">
                          {player.role === "Batsman" ? (
                            <>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Matches
                                </dt>
                                <dd>{player.stats[format].matches}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Runs
                                </dt>
                                <dd>{player.stats[format].runs}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Average
                                </dt>
                                <dd>{player.stats[format].average}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Strike Rate
                                </dt>
                                <dd>{player.stats[format].strikeRate}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Best
                                </dt>
                                <dd>{player.stats[format].best}</dd>
                              </div>
                            </>
                          ) : player.role === "Bowler" ? (
                            <>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Matches
                                </dt>
                                <dd>{player.stats[format].matches}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Wickets
                                </dt>
                                <dd>{player.stats[format].wickets}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Average
                                </dt>
                                <dd>{player.stats[format].average}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Economy
                                </dt>
                                <dd>{player.stats[format].economy}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Best
                                </dt>
                                <dd>{player.stats[format].best}</dd>
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Matches
                                </dt>
                                <dd>{player.stats[format].matches}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Runs
                                </dt>
                                <dd>{player.stats[format].runs}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Bat Avg
                                </dt>
                                <dd>{player.stats[format].average}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Wickets
                                </dt>
                                <dd>{player.stats[format].wickets}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-green-300">
                                  Bowl Avg
                                </dt>
                                <dd>{player.stats[format].bowlAverage}</dd>
                              </div>
                            </>
                          )}
                        </dl>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
