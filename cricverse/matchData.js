export const hardCodedMatches = [
    {
      id: 1,
      name: "India vs Australia",
      status: "Live",
      venue: "Wankhede Stadium",
      dateTimeGMT: "2024-09-20T09:30:00.000Z",
      teamInfo: [
        { shortname: "IND", name: "India", img: "public/flags/Flag_of_India_Flat_Square.png" },
        { shortname: "AUS", name: "Australia", img: "public/flags/Flag_of_Australia_Flat_Square.png" },
      ],
      score: [
        { inning: "India 1st Innings", r: 300, w: 5, o: 50 }
      ],
      matchStarted: true,
      matchEnded: false
    },
    {
      id: 2,
      name: "England vs Pakistan",
      status: "Upcoming",
      venue: "Lord's Stadium",
      dateTimeGMT: "2024-09-22T14:30:00.000Z",
      teamInfo: [
        { shortname: "ENG", name: "England", img: "public/flags/Flag_of_England_Flat_Square.png" },
        { shortname: "PAK", name: "Pakistan", img: "public/flags/Flag_of_Pakistan_Flat_Square.png" },
      ],
      score: [],
      matchStarted: false,
      matchEnded: false
    },
    {
      id: 3,
      name: "South Africa vs New Zealand",
      status: "Live",
      venue: "Cape Town Stadium",
      dateTimeGMT: "2024-09-18T12:00:00.000Z",
      teamInfo: [
        { shortname: "SA", name: "South Africa", img: "public/flags/Flag_of_South_Africa_Flat_Square.png" },
        { shortname: "NZ", name: "New Zealand", img: "public/flags/Flag_of_New_Zealand_Flat_Square.png" },
      ],
      score: [
        { inning: "South Africa 1st Innings", r: 280, w: 6, o: 48 }
      ],
      matchStarted: true,
      matchEnded: false
    },
    {
      id: 4,
      name: "West Indies vs Bangladesh",
      status: "Upcoming",
      venue: "Kensington Oval",
      dateTimeGMT: "2024-09-25T18:00:00.000Z",
      teamInfo: [
        { shortname: "WI", name: "West Indies", img: "public/flags/west_indies.png" },
        { shortname: "BAN", name: "Bangladesh", img: "public/flags/Flag_of_Bangladesh_Flat_Square.png" },
      ],
      score: [],
      matchStarted: false,
      matchEnded: false
    },
    {
      id: 5,
      name: "Sri Lanka vs Afghanistan",
      status: "Live",
      venue: "Colombo R. Premadasa Stadium",
      dateTimeGMT: "2024-09-19T15:00:00.000Z",
      teamInfo: [
        { shortname: "SL", name: "Sri Lanka", img: "public/flags/Flag_of_Sri_Lanka_Flat_Square.png" },
        { shortname: "AFG", name: "Afghanistan", img: "public/flags/Flag_of_Afghanistan_Flat_Square.png" },
      ],
      score: [
        { inning: "Sri Lanka 1st Innings", r: 250, w: 7, o: 50 }
      ],
      matchStarted: true,
      matchEnded: false
    }
  ];

  
  export const hardCodedTournaments = [
    {
      id: 1,
      name: "ICC World Cup 2024",
      startDate: "2024-09-15",
      endDate: "2024-10-30",
      matches: 48,
      odi: 48,
      t20: 0,
      test: 0
    },
    {
      id: 2,
      name: "IPL 2024",
      startDate: "2024-04-01",
      endDate: "2024-06-10",
      matches: 60,
      odi: 0,
      t20: 60,
      test: 0
    },
    {
      id: 3,
      name: "Big Bash League 2024",
      startDate: "2024-12-05",
      endDate: "2025-02-15",
      matches: 61,
      odi: 0,
      t20: 61,
      test: 0
    },
    {
      id: 4,
      name: "The Ashes 2024",
      startDate: "2024-06-15",
      endDate: "2024-07-30",
      matches: 5,
      odi: 0,
      t20: 0,
      test: 5
    },
    {
      id: 5,
      name: "Asia Cup 2024",
      startDate: "2024-08-10",
      endDate: "2024-08-28",
      matches: 13,
      odi: 13,
      t20: 0,
      test: 0
    }
  ];
  