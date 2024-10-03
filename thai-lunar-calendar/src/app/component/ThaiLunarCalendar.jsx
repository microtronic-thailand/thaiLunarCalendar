import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Moon, Hemisphere } from 'lunarphase-js';

import "./styles.css";
{/* Function นี้เรียกใช้ lunarphase-js เพื่อสร้างรูปดวงจันทร์ (disable) */}
function tileContent({ date, view }) {
  if (view === "month") {
    return (
      <small style={{ display: "block" }}>
        {Moon.lunarPhaseEmoji(date, Hemisphere.NORTHERN)}{" "}
        {Math.round(Moon.lunarAge(date, Hemisphere.NORTHERN))}
      </small>
    );
  }
}

export default function ThaiLunarCalendar() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}