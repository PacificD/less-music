/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
 * @LastEditTime: 2022-08-04 20:57:06
 * @LastEditors: Ride-pig
 * @Description:
 * @FilePath: \less-music\src\router\config\index.tsx
 */
import {
    Home,
    Login,
    MVdetails,
    MV,
    NotFound,
    Playlist,
    Recommendation,
    Singer,
    SongList,
    HighPlaylist,
    LatestMusic,
    NewSongExpress,
    NewDiscs,
    FindMusic,
    PodCast,
    Video,
    Attention,
    Live,
    PrivateFM,
    Playing
} from "@/pages"
import Album from "@/pages/Album"
import { Password } from "@/pages/Login/password"
import QrCode from "@/pages/Login/QR"
import { Navigate, useRoutes } from "react-router-dom"

// 当路由结构复杂时，考虑重构为扁平化配置
const RouterConfig = () => {
    return useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/playing/:id",
            element: <Playing />
        },
        {
            path: "/login",
            element: <Login />,
            children: [
                {
                    path: "qrcode",
                    element: <QrCode />
                },
                {
                    path: "password",
                    element: <Password />
                }
            ]
        },
        {
            path: "/",
            element: <Navigate to="findmusic/recommendation" />
        },
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "findmusic",
                    element: <FindMusic />,
                    children: [
                        {
                            path: "singer/*",
                            element: <Singer />
                        },
                        {
                            path: "recommendation",
                            element: <Recommendation />
                        },
                        {
                            path: "songlist",
                            element: <SongList />
                        },
                        {
                            path: "highplaylist",
                            element: <HighPlaylist />
                        },
                        {
                            path: "latestmusic",
                            element: <LatestMusic />,
                            children: [
                                {
                                    path: "newsongexpress",
                                    element: <NewSongExpress />
                                },
                                {
                                    path: "newdiscs",
                                    element: <NewDiscs />
                                }
                            ]
                        }
                    ]
                },
                {
                    path: "playlist/:id",
                    element: <Playlist />
                },
                {
                    path: "album/:id",
                    element: <Album />
                },
                {
                    path: "podcast",
                    element: <PodCast />
                },
                {
                    path: "video",
                    element: <Video />
                },
                {
                    path: "attention",
                    element: <Attention />
                },
                {
                    path: "live",
                    element: <Live />
                },
                {
                    path: "privatefm",
                    element: <PrivateFM />
                },
                {
                    path: "/mv/:id",
                    element: <MVdetails />
                }
            ]
        }
    ])
}

export default RouterConfig
