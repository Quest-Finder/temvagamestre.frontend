import Text from "@/components/typograph/text";
import { BoxImage } from "@/features/page-profile/box-image/box-image";
import CalendarWithForm from "@/features/page-profile/calendar/example";
import { HeaderProfile } from "@/features/page-profile/header/header";
import { UserIntroductionComponent } from "@/features/page-profile/introduction/UserIntroduction";
import { PlayerProfileSection } from "@/features/page-profile/playerProfileSection/teste";
import UserDescriptionComponent from "@/features/page-profile/user-description/user-description";
import UserPreferences from "@/features/page-profile/user-profile";

export default function Profile(){
    return(
        <>
        <HeaderProfile/>
        <main className="grid tablet:grid-cols-12 grid-rows-3 max-w-[1440px] mx-auto min-h-screen gap-4">
            <aside className="tablet:col-span-4 flex flex-col talet:items-start items-center justify-center  tablet:min-h-[1328px] -mt-24 ">
            <UserDescriptionComponent/>
            <UserPreferences/>
            <PlayerProfileSection/> 
            </aside>
            <section className="tablet:col-span-8 flex flex-col gap-4 items-center justify-center">
             <UserIntroductionComponent/>
             <BoxImage/>
             <CalendarWithForm/>
            </section>
        </main>
        </>
    )
}




