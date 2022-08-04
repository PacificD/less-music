/*
 * @Author: DZR
 * @Date: 2022-07-22 17:48:07
 * @LastEditTime: 2022-08-02 16:45:09
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\index.tsx
 */
import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { FC } from "react"
import "../../../../../style/index.css"
import SingerPicture from "./SingerPicture"
import SingerPage from "./SingerPage"
import Album from "./SingerPage/Album"
import { MV } from "@/pages"
import MVdetails from "./SingerPage/MVdetails"

const Singer: FC = () => {
    return (
        <Box className="SingerBigBox">
            <Routes>
                <Route element={<SingerPicture />} path="/picture"></Route>
                <Route element={<SingerPage />} path="/page"></Route>
            </Routes>
        </Box>
    )
}

export default Singer
