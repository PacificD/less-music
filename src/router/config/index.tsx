/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
 * @LastEditTime: 2022-07-30 11:45:59
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\router\config\index.tsx
 */
import {
    Home,
    Login,
    MV,
    NotFound,
    Playlist,
    Recommendation,
    Singer,
    LatestMusic,
    NewSongExpress,
    NewDiscs,
    FindMusic,
    PodCast,
    Video,
    Attention,
    Live,
    PrivateFM
} from "@/pages"
import { useRoutes } from "react-router-dom"

// 当路由结构复杂时，考虑重构为扁平化配置
const RouterConfig = () => {
    return useRoutes([
        // {
        //     path: "/",
        //     element: <Home />
        // },
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
                            path: "latestmusic",
                            element: <LatestMusic></LatestMusic>,
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
                }
            ]
        },

        {
            path: "/login",
            element: <Login />
        },
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/playlist",
            element: <Playlist playlistId={localStorage.getItem("id") as string} />
        },
        {
            path: "/mv/:id",
            element: <MV />
        }
    ])
}

export default RouterConfig
