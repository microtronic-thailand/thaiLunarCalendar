import Lunar15th from "./component/Lunar15th";
import ThaiLunarCalendar from "./component/ThaiLunarCalendar";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="text-center justify-items-center">
                <header className="font-bold text-4xl p-5">Thai Lunar Calendar Home Page</header>
                <Lunar15th />
            </div>

            <ThaiLunarCalendar />
        </div>
    );
}
