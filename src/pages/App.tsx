/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 22:15:53
 * @LastEditTime: 2022-07-19 10:23:29
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\App.tsx
 */
import { FC, createContext } from "react"
import ViewRouter from "@/router/ViewRouter"

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
