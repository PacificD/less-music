/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:12:26
 * @LastEditTime: 2022-07-30 10:37:51
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\index.ts
 */
import { lazy } from "react"

export { default as Home } from "./Home"

export const Login = lazy(() => import("./Login"))
export const NotFound = lazy(() => import("./NotFound"))
export const MV = lazy(() => import("./MV"))
export const Playlist = lazy(() => import("./Playlist"))
