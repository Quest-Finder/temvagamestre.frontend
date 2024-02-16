
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { RPGStyle } from "@/features/page-profile/types/user"
interface DialogAddPreferencesProps {
    rpgStyle: RPGStyle[]
}
export function DialogAddPreferences({ rpgStyle }: DialogAddPreferencesProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">+ 2</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Mude suas preferências de jogo</DialogTitle>
                </DialogHeader>


                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
