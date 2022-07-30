/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
<<<<<<< HEAD
 * @LastEditTime: 2022-07-30 11:22:17
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\router\config\index.tsx
 */
import { Home, Login, MV, NotFound } from "@/pages"
import Playlist from "@/pages/Playlist"
import Recommendation from "@/pages/Home/Main/FindMusic/Recommendation"
import { useRoutes } from "react-router-dom"
import Singer from "@/pages/Home/Main/FindMusic/Singer/index"
import SingerPage from "@/pages/Home/Main/FindMusic/Singer"
import FindMusic from "@/pages/Home/Main/FindMusic"
import { Children } from "react"
import PodCast from "@/pages/Home/Main/PodCast"
import Video from "@/pages/Home/Main/Video"
import Attention from "@/pages/Home/Main/Attention"
import Live from "@/pages/Home/Main/Live"
import PrivateFM from "@/pages/Home/Main/PrivateFM"

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
