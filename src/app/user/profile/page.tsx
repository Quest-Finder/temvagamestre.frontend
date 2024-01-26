import CalendarWithForm from "@/features/page-profile/calendar/example";
import { PlayerProfileSection } from "@/features/page-profile/playerProfileSection/teste";
import UserPreferences from "@/features/page-profile/user-profile";

export default function Profile(){
    return(
        <>
        <header className="h-48 w-full">
        </header>
        <main className="grid grid-cols-12 max-w-[1440px] mx-auto min-h-screen">
            <aside className="col-span-4 flex flex-col items-start justify-start">
            <UserPreferences/>
            <PlayerProfileSection/> 
            </aside>
            <section className="col-span-8 ">
             <CalendarWithForm/>
            </section>
        </main>
        </>
    )
}




