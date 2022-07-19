/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 22:15:53
 * @LastEditTime: 2022-07-19 09:29:12
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\index.tsx
 */
import { FC, createContext } from "react"
import ViewRouter from "@/router/temp"

export const AppContext = createContext<{
    userInfo: string
}>({} as any)

const App: FC = () => {
    let userInfo = "hello"

    return (
        <AppContext.Provider
            value={{
                userInfo
            }}
        >
            <ViewRouter></ViewRouter>
        </AppContext.Provider>
    )
}

export default App
