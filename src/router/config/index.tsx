/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
 * @LastEditTime: 2022-07-30 10:04:37
 * @LastEditors: Ride-pig 327796210@qq.com
 * @Description:
 * @FilePath: \less-music\src\router\config\index.tsx
 */
import { Home, Login, NotFound } from "@/pages"
import Design from "@/pages/Home/Main/FindMusic/Design"
import Recommendation from "@/pages/Home/Main/FindMusic/Recommendation"
import { useRoutes } from "react-router-dom"
import SongList from "@/pages/Home/Main/FindMusic/SongList"
import Singer from "@/pages/Home/Main/FindMusic/Singer"
import Charts from "@/pages/Home/Main/FindMusic/Charts"
import { LatestMusic } from "@/pages/Home/Main/FindMusic/LatestMusic"
import NewSongExpress from "@/pages/Home/Main/FindMusic/LatestMusic/NewSongExpress"
import NewDiscs from "@/pages/Home/Main/FindMusic/LatestMusic/NewDiscs"
import FindMusic from "@/pages/Home/Main/FindMusic"
import PodCast from "@/pages/Home/Main/PodCast"
import Video from "@/pages/Home/Main/Video"
import Attention from "@/pages/Home/Main/Attention"
import Live from "@/pages/Home/Main/Live"
import PrivateFM from "@/pages/Home/Main/PrivateFM"

// 当路由结构复杂时，考虑重构为扁平化配置
const RouterConfig = () => {
    return useRoutes([
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
        }
    ])
}

export default RouterConfig
