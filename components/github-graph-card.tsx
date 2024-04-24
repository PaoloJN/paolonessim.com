// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { useEffect, useState } from "react"

// // Todo
// // - use the github api to get the data
// // - create a graph based on the data
// // - add tooltip to show the number of contributions and the date

// interface GithubGraphProps {
//   className?: string
// }

// export default function GithubGraph({ className, ...props }: GithubGraphProps) {
//   // prettier-ignore
//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   const startMonth = new Date().getMonth()
//   const monthsRange = [...Array(13)].map(
//     (_, i) => months[(startMonth + i) % 12]
//   )

//   const days: string[] = ["", "Mon", "", "Wed", "", "Fri", ""]
//   const [squares, setSquares] = useState<number[]>([])

//   useEffect(() => {
//     // Create an array for the year, randomly assign 'levels' to each day
//     const data: number[] = Array.from({ length: 369 }, () =>
//       Math.floor(Math.random() * 4)
//     )

//     setSquares(data)
//   }, [])

//   // Function to determine the color based on the level
//   const levelColor = (level: number): string => {
//     switch (level) {
//       case 1:
//         return "bg-green-200"
//       case 2:
//         return "bg-green-400"
//       case 3:
//         return "bg-green-800"
//       default:
//         return ""
//     }
//   }

//   return (
//     <Card className={className} {...props}>
//       <CardHeader>
//         <CardTitle>Github Contributions</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="leading-[20px] opacity-75 overflow-y-scroll mt-2">
//           <div className="inline-grid gap-2.5 p-2 pb-3">
//             <div
//               className="col-span-3 grid gap-1 text-center ml-5 mb-1"
//               style={{
//                 gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
//               }}
//             >
//               {monthsRange.map((month, index) => (
//                 <span key={month}>{month}</span>
//               ))}
//             </div>
//             <div className="grid grid-rows-7 mr-1 ">
//               {days.map((day) => (
//                 <span key={day}>{day}</span>
//               ))}
//             </div>
//             {/* auto-cols-[15px] */}
//             <div className="grid grid-rows-7 grid-flow-col gap-[3px] ">
//               {squares.map((level, index) => (
//                 <div
//                   key={index}
//                   className={`w-[12px] h-[12px] bg-gray-200 rounded-[2px] ${levelColor(
//                     level
//                   )} `}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

// Todo
// - use the github api to get the data
// - create a graph based on the data
// - add tooltip to show the number of contributions and the date

interface GithubGraphProps {
  className?: string;
}

import GitHubCalendar, { ThemeInput } from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GithubGraph({ className, ...props }: GithubGraphProps) {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // prettier-ignore
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const startMonth = new Date().getMonth();
  const monthsRange = [...Array(13)].map(
    (_, i) => months[(startMonth + i) % 12],
  );

  const days: string[] = ["", "Mon", "", "Wed", "", "Fri", ""];
  const [squares, setSquares] = useState<number[]>([]);

  useEffect(() => {
    // Create an array for the year, randomly assign 'levels' to each day
    const data: number[] = Array.from({ length: 369 }, () =>
      Math.floor(Math.random() * 4),
    );

    setSquares(data);
  }, []);

  // Function to determine the color based on the level
  const levelColor = (level: number): string => {
    switch (level) {
      case 1:
        return "bg-green-200 dark:bg-green-300";
      case 2:
        return "bg-green-400 dark:bg-green-500";
      case 3:
        return "bg-green-800 dark:bg-green-900";
      default:
        return "bg-gray-200 dark:bg-zinc-900";
    }
  };

  const explicitTheme: ThemeInput = {
    light: ["#f0f0f0", "##bbf7d0", "#4ade80", "#166534", "#384259"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };

  // const selectLastHalfYear = (contributions: any) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 12;

  //   return contributions.filter((activity: any) => {
  //     const date = new Date(activity.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Github Contributions</CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden p-3">
        {/* <div className="mt-1 overflow-y-scroll opacity-50 dark:opacity-80">
          <div className="inline-grid gap-2.5 p-2">
            <div className="grid grid-flow-col grid-rows-7 gap-[3px] ">
              {squares.map((level, index) => (
                <div
                  key={index}
                  className={`h-[12px] w-[12px] rounded-[2px] ${levelColor(
                    level,
                  )} `}
                ></div>
              ))}
            </div>
          </div>
        </div> */}
        <div>
          <GitHubCalendar
            // data range last 6 months
            year={new Date().getFullYear()}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            username="PaoloJN"
            hideMonthLabels={true}
            hideColorLegend={true}
            hideTotalCount={true}
            showWeekdayLabels={false}
          />
        </div>
      </CardContent>
    </Card>
  );
}
