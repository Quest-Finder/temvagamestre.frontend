import Image from "next/image"
import { Card } from "@/components/ui/card"
import img from '../header/assets/Rectangle.svg'

export  function BoxImage() {
    return(
        <section className=" flex flex-col gap-4 px-5">
        <h2 className="color-[#292929] font-semibold text-2xl leading-7 pl-2">Titulo - imagens</h2>
        <Card className='flex max-w-[862px] gap-4 rounded-xl border-[1px] px-4 py-6 sm:px-6 sm:pt-4'>
          <Image  src={img} alt="" width={259} height={208} className="rounded-xl"/>
          <Image  src={img} alt="" width={259} height={208} className="rounded-xl"/>
          <Image  src={img} alt="" width={259} height={208} className="rounded-xl"/>
        </Card>

        </section>
    )
}
