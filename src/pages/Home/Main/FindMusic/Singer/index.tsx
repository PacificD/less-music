/*
 * @Author: DZR
 * @Date: 2022-07-22 17:48:07
 * @LastEditTime: 2022-07-29 21:26:40
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\index.tsx
 */
import { useSinger } from "@/services"
import { useSingerHotFiftySongs } from "@/services"
import { IRes } from "@/types"
import { Box, Flex, Text, Image } from "@chakra-ui/react"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import { FC, useMemo } from "react"
import SingerClassify from "./SingerClassify"
import "../../../../../style/index.css"
import SingerPicture from "./SingerPicture"
import SingerPage from "./SingerPage/SingerPage"

const Singer: FC = () => {
    return (
        <Box className="SingerBigBox">
            <Routes>
                <Route element={<SingerPicture />} path="/picture"></Route>
                <Route element={<SingerPage />} path="/page"></Route>
            </Routes>
            {/* <SingerPage /> */}
        </Box>
    )
}

export default Singer
