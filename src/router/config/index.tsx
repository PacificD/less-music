/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
 * @LastEditTime: 2022-08-04 11:39:59
 * @LastEditors: Pacific_D
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
import { Password } from "@/pages/Login/password"
import { QrCode } from "@/pages/Login/qrCode"
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
