import { Card } from "@/components/ui/card"
import { PlayerProfileRoot } from "./components/PlayerProfileRoot"
import { PlayerProfileTitle } from "./components/PlayerProfileTitle"
import { PlayerProfileGraph } from "./components/PlayerProfileGraph"
import { PlayerProfileGraphLegend } from "./components/PlayerProfileGraphLegend"
import { reorderListInDescendingOrder } from "./helpers/reorderListInDescendingOrder"
import { filterOutItemWithoutData } from "./helpers/filterOutItemWithoutData"
import { MockGraphLegend } from "./mock"

export function PlayerProfileSection(){
    const filteredGraphData = reorderListInDescendingOrder(
        filterOutItemWithoutData(MockGraphLegend),
      )
    return(
        <PlayerProfileRoot>
            <PlayerProfileTitle title="Perfil jogador"/>
            <Card className="flex max-w-max items-center gap-4 px-4 py-6">
                {/* <PlayerProfileGraph graphData={filteredGraphData}/> */}
                <div className="w-48 h-48"></div>
                <PlayerProfileGraphLegend graphData={filteredGraphData}/>
            </Card>
        </PlayerProfileRoot>
    )
}



