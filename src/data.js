import React from "react";
import {
  FaFilter,
  FaLongArrowAltDown,
  FaHandPointUp,
  FaCartArrowDown,
} from "react-icons/fa";

export const resolutionData = [
  {
    id: 1,
    resolutionValue: "Last hour",
  },
  {
    id: 2,
    resolutionValue: "Today",
  },
  {
    id: 3,
    resolutionValue: "Yesterday",
  },
  {
    id: 4,
    resolutionValue: "Last 3 days",
  },
];

export const blockTopValues = [
  {
    id: 1,
    topValue: "Error: 0.12%",
    bottomValue: "Average: 0.11%",
  },
  {
    id: 2,
    topValue: "Zeroes: 5.12%",
    bottomValue: "Average: 0.11%",
  },
  {
    id: 3,
    topValue: "Timeouts: 0.12%",
    bottomValue: "Average: 0.11%",
  },
];

export const blockBottomValues = [
  {
    id: 1,
    boxColor: "#ffcc00",
    text: "Error 500:",
    value: 1256,
  },
  {
    id: 2,
    boxColor: "#5856d5",
    text: "Error 501:",
    value: 800,
  },
  {
    id: 3,
    boxColor: "#8bc34a",
    text: "Error 502:",
    value: 650,
  },
  {
    id: 4,
    boxColor: "#a0b0b9",
    text: "Other",
    value: 330,
  },
];

export const steps = [
  {
    id: 1,
    row: [
      {
        icons: [
          {
            icon1: <FaFilter />,
            icon2: <FaLongArrowAltDown />,
          },
        ],
        contents: [
          {
            records: [
              {
                action: [
                  {
                    actionValue: "Searches",
                    percent: 5,
                  },
                ],
                number1: [
                  {
                    score: "29 380",
                    yesterday: "Yesterday",
                  },
                ],
                number2: [
                  {
                    score: "27 985",
                    lastFriday: "Last friday",
                  },
                ],
              },
            ],

            descriptions: [
              {
                header: "Mobile traffic: 100%",
                subHeader: "Web traffic: 100%",
                statement: "You get 100% traffic on mobile and desktop devices",
                Help: [
                  {
                    id: 1,
                    text: "Searches",
                  },
                  {
                    id: 2,
                    text: "Pessimisations",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    row: [
      {
        icons: [
          {
            icon1: <FaHandPointUp />,
            icon2: <FaLongArrowAltDown />,
          },
        ],
        contents: [
          {
            records: [
              {
                action: [
                  {
                    actionValue: "Clicks",
                    percent: -13,
                  },
                ],
                number1: [
                  {
                    score: "243",
                    yesterday: "Yesterday",
                  },
                ],
                number2: [
                  {
                    score: "280",
                    lastFriday: "Last friday",
                  },
                ],
              },
            ],

            descriptions: [
              {
                header: "CTR 0,04%",
                subHeader: "",
                statement: "Conversion from searches to clicks on all devices",
                Help: [
                  {
                    id: 1,
                    text: "CTR",
                  },
                  {
                    id: 2,
                    text: "Clicks",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    row: [
      {
        icons: [
          {
            icon1: <FaCartArrowDown />,
            icon2: <FaLongArrowAltDown />,
          },
        ],
        contents: [
          {
            records: [
              {
                action: [
                  {
                    actionValue: "Sales",
                    percent: 0,
                  },
                ],
                number1: [
                  {
                    score: "24",
                    yesterday: "Yesterday",
                  },
                ],
                number2: [
                  {
                    score: "24",
                    lastFriday: "Last friday",
                  },
                ],
              },
            ],

            descriptions: [
              {
                header: "STR: 6.2%",
                subHeader: "Avg.Check: 8 903",
                statement: "Conversion from clicks to bookings on all devices",
                Help: [
                  {
                    id: 1,
                    text: "STR",
                  },
                  {
                    id: 2,
                    text: "Bookings",
                  },
                  {
                    id: 3,
                    text: "Avg.Check",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
