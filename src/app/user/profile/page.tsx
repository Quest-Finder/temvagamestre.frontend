import Text from "@/components/typograph/text";
import CalendarWithForm from "@/features/page-profile/calendar/example";
import { UserIntroductionComponent } from "@/features/page-profile/introduction/UserIntroduction";
import { PlayerProfileSection } from "@/features/page-profile/playerProfileSection/teste";
import UserPreferences from "@/features/page-profile/user-profile";

export default function Profile(){
    return(
        <>
        <header className="h-48 w-full flex items-center justify-center">
            <Text>HEADER</Text>
        </header>
        <main className="grid tablet:grid-cols-12 grid-rows-3 max-w-[1440px] mx-auto min-h-screen gap-4">
            <aside className="tablet:col-span-4 flex flex-col talet:items-start items-center justify-center justify-start tablet:min-h-[1328px] ">
            <UserPreferences/>
            <PlayerProfileSection/> 
            </aside>
            <section className="tablet:col-span-8 flex flex-col gap-4 items-center justify-center">
             <UserIntroductionComponent/>
             <CalendarWithForm/>
            </section>
        </main>
        </>
    )
}




