import { BoxImage } from "../box-image/box-image";
import CalendarWithForm from "../calendar/example";
import { UserIntroductionComponent } from "../introduction/UserIntroduction";
import { Mobile } from "../mobile/Mobile";
import { SelectPage } from "../select-page/selectPage";
import UserDescriptionComponent from "../user-description/user-description";

export function MobilePage() {
    return(
    <section className='mx-auto grid min-[900px]:hidden min-h-screen max-w-[1140px] grid-cols-12 '>
        <main className="col-span-10 col-start-2">
            <UserDescriptionComponent />
            <SelectPage />
            <Mobile />
        </main>
    </section>
    )
}