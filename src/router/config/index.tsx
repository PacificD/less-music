/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
 * @LastEditTime: 2022-07-29 17:14:39
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\router\config\index.tsx
 */
import { Home, Login, Error } from "@/pages"
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
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "*",
            element: <Error />
        },
        {
            path: "/playlist",
            element: <Playlist playlistId={localStorage.getItem("id") as string} />
        }
    ])
}

export default RouterConfig
