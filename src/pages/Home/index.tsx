/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-08-08 11:39:12
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\Home\index.tsx
 */

import React, { FC, useMemo, useState } from "react"
import Header from "./Header"
import Main from "./Main"
import { Box } from "@chakra-ui/react"
import { Playbar } from "@/components"

export const msgContext = React.createContext(0)
export const setMsgContext = React.createContext(
    null as unknown as React.Dispatch<React.SetStateAction<number>>
)
export const lastMsgContext = React.createContext([] as number[])
export const setLastMsgContext = React.createContext(
    null as unknown as React.Dispatch<React.SetStateAction<number[]>>
)
const Home: FC = () => {
    const [msg, setMsg] = useState(0)
    const [lastMsg, setLastMsg] = useState([] as number[])

    return (
        <msgContext.Provider value={msg}>
            <lastMsgContext.Provider value={lastMsg}>
                <setMsgContext.Provider value={setMsg}>
                    <setLastMsgContext.Provider value={setLastMsg}>
                        <Box overflow="hidden">
                            <Header></Header>
                            <Main></Main>
                            {/* <Playbar /> */}
                        </Box>
                    </setLastMsgContext.Provider>
                </setMsgContext.Provider>
            </lastMsgContext.Provider>
        </msgContext.Provider>
    )
}

export default Home
