/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-25 15:31:29
 * @LastEditors: Ride-pig 327796210@qq.com
 * @Description:
 * @FilePath: \less-music\src\pages\Home\index.tsx
 */

import { FC } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const Home: FC = () => {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}

export default Home
