/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:12:26
 * @LastEditTime: 2022-07-23 10:22:04
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\index.ts
 */
import { lazy } from "react"

export const Login = lazy(() => import("./Login"))
export const Home = lazy(() => import("./Home"))
export const Error = lazy(() => import("./NotFound"))
