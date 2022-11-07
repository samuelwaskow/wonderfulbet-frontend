import { useState } from "react"


function useMyBet(mine) {

    const [mybet, setMyBet] = useState(mine)

    const defineBet = (bet) => {
        setMyBet(bet)
    }
    
    return [mybet, defineBet]
}

export default useMyBet