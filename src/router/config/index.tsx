/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
 * @LastEditTime: 2022-07-30 11:13:13
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\router\config\index.tsx
 */
import { Home, Login, MV, NotFound } from "@/pages"
import Playlist from "@/pages/Playlist"
import { useRoutes } from "react-router-dom"

// 当路由结构复杂时，考虑重构为扁平化配置
const RouterConfig = () => {
    return useRoutes([
        {
            path: "",
            element: <Home />
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
