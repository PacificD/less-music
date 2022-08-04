/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 10:12:26
 * @LastEditTime: 2022-08-02 11:05:20
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\index.ts
 */
import { lazy } from "react"

export { default as Home } from "./Home"

export const Login = lazy(() => import("./Login"))
export const NotFound = lazy(() => import("./NotFound"))
export const MV = lazy(() => import("./MV"))
export const Playlist = lazy(() => import("./Playlist"))
export const Singer = lazy(() => import("./Home/Main//FindMusic/Singer"))
export const FindMusic = lazy(() => import("./Home/Main/FindMusic"))
export const Recommendation = lazy(() => import("./Home/Main/FindMusic/Recommendation"))
export const LatestMusic = lazy(() => import("./Home/Main/FindMusic/LatestMusic"))
export const NewSongExpress = lazy(() => import("./Home/Main/FindMusic/LatestMusic/NewSongExpress"))
export const NewDiscs = lazy(() => import("./Home/Main/FindMusic/LatestMusic/NewDiscs"))
export const PodCast = lazy(() => import("./Home/Main/PodCast"))
export const Video = lazy(() => import("./Home/Main/Video"))
export const Attention = lazy(() => import("./Home/Main/Attention"))
export const Live = lazy(() => import("./Home/Main/Live"))
export const PrivateFM = lazy(() => import("./Home/Main/PrivateFM"))
export const SongList = lazy(() => import("./Home/Main/FindMusic/SongList"))
export const HighPlaylist = lazy(() => import("./Home/Main/FindMusic/SongList/HighPlaylist"))
