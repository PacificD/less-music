/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-25 16:55:44
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\App.tsx
 */

import { FC } from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

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
