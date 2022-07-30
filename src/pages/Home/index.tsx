/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-30 11:24:35
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\Home\index.tsx
 */

import { FC } from "react"
import Header from "./Header"
import Main from "./Main"
import { Box } from "@chakra-ui/react"

const Home: FC = () => {
    return (
        <Box overflow="hidden">
            <Header></Header>
            <Main></Main>
        </Box>
    )
}

export default Home
