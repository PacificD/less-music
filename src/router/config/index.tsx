/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:16:22
 * @LastEditTime: 2022-07-19 10:35:49
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\router\config\index.tsx
 */
import { Home, Login } from "@/pages"
import { useRoutes } from "react-router-dom"

// 当路由结构复杂时，考虑重构为扁平化配置
const RouterConfig = () => {
    return useRoutes([
        {
            path: "*",
            element: <Home />
        },
        {
            path: "/home",
            element: <Home />
            // children: [
            //     {
            //         path: "/demo",
            //         element: <Demo />
            //     }
            // ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ])
}

export default RouterConfig
