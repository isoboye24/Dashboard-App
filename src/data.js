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
    contentValue: "Error: 500 1 256",
  },
  {
    id: 2,
    boxColor: "#5856d5",
    contentValue: "Error: 501 800",
  },
  {
    id: 3,
    boxColor: "#8bc34a",
    contentValue: "Error: 502 650",
  },
  {
    id: 4,
    boxColor: "#a0b0b9",
    contentValue: "Other 330",
  },
];

export const steps = [
  {
    id: 1,
    row: [
      {
        col1: [
          {
            shape: [
              {
                icon1: <FaFilter />,
                icon2: <FaLongArrowAltDown />,
              },
            ],
            content: [
              {
                action: [
                  {
                    actionValue: "Searches",
                    percent: "5%",
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
          },
        ],
        col2: [
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
  {
    id: 2,
    row: [
      {
        col1: [
          {
            shape: [
              {
                icon1: <FaHandPointUp />,
                icon2: <FaLongArrowAltDown />,
              },
            ],
            content: [
              {
                action: [
                  {
                    actionValue: "Clicks",
                    percent: "-13%",
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
          },
        ],
        col2: [
          {
            header: "CTR: 0,04%",
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
  {
    id: 3,
    row: [
      {
        col1: [
          {
            shape: [
              {
                icon1: <FaCartArrowDown />,
                icon2: <FaLongArrowAltDown />,
              },
            ],
            content: [
              {
                action: [
                  {
                    actionValue: "Sales",
                    percent: "",
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
          },
        ],
        col2: [
          {
            header: "STR: 6.2%",
            subHeader: "Avg.Check 8 903",
            statement: "Conversion from clicks to bookings on all devices",
            Help: [
              {
                id: 1,
                text: "CTR",
              },
              {
                id: 2,
                text: "CliBookingscks",
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
];
