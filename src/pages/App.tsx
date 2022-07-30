/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-25 17:33:17
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\App.tsx
 */
import { FC, createContext } from "react"
import ViewRouter from "@/router/ViewRouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@/style/index.css"
import { Navbar, Playbar } from "@/components"
import { Box } from "@chakra-ui/react"

export const AppContext = createContext<{
    userInfo: string
}>({} as any)

const App: FC = () => {
    const queryClient = new QueryClient()
    let userInfo = "hello"

    return (
        <AppContext.Provider
            value={{
                userInfo
            }}
        >
            <QueryClientProvider client={queryClient}>
                {/* <Navbar /> */}
                <Box pb="70px">
                    <ViewRouter />
                </Box>
                <Playbar />
            </QueryClientProvider>
        </AppContext.Provider>
    )
}

export default App
