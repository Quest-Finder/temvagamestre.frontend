import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserDescription } from ".";
import { Card } from "@/components/ui/card";

export default function UserDescriptionComponent() {
    return(
      <>
        <Avatar className={cn('w-36 h-36 mb-14')}> 
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <UserDescription.Root>
           <UserDescription.BoxWithIcons/>
            <Card className={cn("justify-center items-center inline-flex border-none")}>
                <UserDescription.Typography as='h2'>Lucas Marcelo</UserDescription.Typography>
                <Card className="pb-px justify-end items-center inline-flex">
                    <UserDescription.Typography as='h2'>(Ele - Dele)</UserDescription.Typography>
                </Card>
            </Card>
            <UserDescription.Typography as='h3' className="text-stone-500 text-xl font-semibold font-['Noto Sans'] leading-normal">Mestre D&D com 15 anos de experiência</UserDescription.Typography>
            <UserDescription.Typography as='h3' className=" text-center text-neutral-400 text-xl font-semibold font-['Noto Sans'] leading-normal">São Paulo | Brasil</UserDescription.Typography>
            <UserDescription.Typography as='h2' className="h-5 text-center text-black text-xl font-semibold font-['Noto Sans'] leading-normal">30 - 35 anos</UserDescription.Typography>
            <Button className={cn("w-full h-12 px-4 py-3 bg-teal-800 rounded-md justify-center items-center gap-2.5 inline-flex")}>
                <UserDescription.Typography as='p' className="bg-transparent border-none text-white text-base font-semibold font-['Inter'] leading-snug">Enviar Mensagem</UserDescription.Typography>
            </Button>
        </UserDescription.Root>
     </>
    )
}