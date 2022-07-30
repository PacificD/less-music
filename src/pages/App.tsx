/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-30 09:52:05
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\App.tsx
 */
import { FC, createContext, useMemo, useContext, useReducer, useRef, useState } from "react"
import ViewRouter from "@/router/ViewRouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@/style/index.css"
import { GoBack, Navbar, Playbar } from "@/components"
import { Box } from "@chakra-ui/react"
import { PlayingMusic, PlaylistAction } from "@/types"
import initialSong from "./initialSong"
import { playlistReducer } from "@/reducers"

// TODO: 把CreateContext和Provider抽出一个文件，单独管理全局状态
export const ctx = createContext<{
    playingMusic: PlayingMusic
    playlist: Array<PlayingMusic>
    playlistDispatch: React.Dispatch<PlaylistAction>
    playMusic: (music: PlayingMusic) => void
}>({} as any)

/**
 * @description: 顶层组件，管理全局状态
 * @return {*}
 */
const App: FC = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })

    const [playingMusic, setPlayingMusic] = useReducer(
        (playingMusic: PlayingMusic, newMusic: PlayingMusic) => newMusic,
        initialSong
    )

    const [playlist, playlistDispatch] = useReducer(playlistReducer, [playingMusic])

    const playMusic = (music: PlayingMusic) => {
        setPlayingMusic(music)
        playlistDispatch({
            type: "ADD",
            payload: music
        })
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ctx.Provider value={{ playingMusic, playlist, playlistDispatch, playMusic }}>
                <Box position="relative">
                    <GoBack />
                    {useMemo(
                        () => (
                            <ViewRouter />
                        ),
                        []
                    )}
                </Box>
                <Playbar />
            </ctx.Provider>
        </QueryClientProvider>
    )
}

export default App
