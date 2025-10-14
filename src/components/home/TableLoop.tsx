"use client";

import { useEffect, useState } from "react";
import TableRow, { TableLogRow, TableRowHeader } from "./TableRow";
import ScreenContainer from "@/components/ui/ScreenContainer";
import { motion, useAnimation } from "framer-motion";

const rowsData = [
  {
    id: "ID_13_PDF",
    question: "What are my key achievements?",
    percentage: 100,
    achievements: "Achievement 1, Achievement 2, Achievement 3",
  },
  {
    id: "ID_14_DOC",
    question: "What are my latest projects?",
    percentage: 100,
    achievements: "Project 1, Project 2",
  },
  {
    id: "ID_15_XLS",
    question: "What are my upcoming deadlines?",
    percentage: 100,
    achievements: "Deadline 1, Deadline 2",
  },
  {
    id: "ID_16_PPT",
    question: "Who are the team members involved?",
    percentage: 100,
    achievements: "Member 1, Member 2",
  },
  {
    id: "ID_17_TXT",
    question: "What are my next goals?",
    percentage: 100,
    achievements: "Goal 1, Goal 2, Goal 3",
  },
];

export default function TableLoop() {
  const rowHeight = 50; // px (must match CSS row height)
  const visibleRows = 5; // number of rows visible at once
  const centerIndex = Math.floor(visibleRows / 2); // e.g. 2 → 3rd row is center

  const [step, setStep] = useState(0);

  // prepend empty placeholders to push first row into center
  const paddedRows = [
    {
      id: "ID_11_TXT",
      question: "What are my next goals",
      percentage: 0,
      achievements: "",
    },
    {
      id: "ID_12_TXT",
      question: "What is the current timeline?",
      percentage: 0,
      achievements: "",
    },
    ...rowsData,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % rowsData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScreenContainer
      title="user_input_with_kontext"
      className="!bg-transparent !p-0 h-[420px] w-full overflow-hidden"
    >
      <TableRowHeader />
      <motion.div
        animate={{ y: -(step * rowHeight) }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col"
      >
        {paddedRows.map((row, idx) => {
          // highlight the actual "center row" relative to step
          const highlighted = idx === step + centerIndex;

          return (
            <TableRow
              key={`${row.id}_${idx}`}
              {...row}
              highlighted={highlighted && row.id !== "empty"}
              className={row.id === "empty" ? "" : ""}
            />
          );
        })}
      </motion.div>
    </ScreenContainer>
  );
}

const baseLogs = [
  {
    time: "2025-09-04 12:03:21",
    message: "User login",
    meta: "user_id = 3421",
  },
  {
    time: "2025-09-04 12:03:25",
    message: "Data synced",
    meta: "source = Gmail",
  },
  {
    time: "2025-09-04 12:04:02",
    message: "Kontext API",
    meta: "query = appointments",
  },
  {
    time: "2025-09-04 12:05:11",
    message: "Output saved",
    meta: "session_id = 9845",
  },
  {
    time: "2025-09-04 12:06:47",
    message: "Model updated",
    meta: "version = 1.2.4",
  },
  {
    time: "2025-09-04 12:07:05",
    message: "Notification sent",
    meta: "email = user@example.com",
  },
  {
    time: "2025-09-04 12:07:42",
    message: "Cache cleared",
    meta: "scope = all",
  },
  {
    time: "2025-09-04 12:08:10",
    message: "Session closed",
    meta: "session_id = 9845",
  },
];

export function TableLogLoop() {
  // Duplicate logs so they can loop seamlessly
  const logs = [...baseLogs, ...baseLogs];
  const controls = useAnimation();

  useEffect(() => {
    const rowHeight = 50; // px
    const totalHeight = baseLogs.length * rowHeight;

    controls.start({
      y: [-0, -totalHeight], // scroll upward
      transition: {
        duration: baseLogs.length * 2, // 2s per row
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <ScreenContainer
      title="Kontext_logs"
      className="!bg-transparent min-h-[290px] !p-0 w-[910px] mt-8 overflow-hidden mx-auto"
    >
      <motion.div animate={controls} className="flex flex-col">
        {logs.map((row, idx) => (
          <TableLogRow key={idx} {...row} />
        ))}
      </motion.div>
    </ScreenContainer>
  );
}
