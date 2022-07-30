/*
 * @Author: DZR
 * @Date: 2022-07-22 11:06:37
 * @LastEditTime: 2022-07-30 10:03:23
 * @LastEditors: Ride-pig 327796210@qq.com
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\index.tsx
 */
import { Loading } from "@/components"
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Outlet, Link, useNavigate } from "react-router-dom"
import "../../../../style/index.css"
// import NewMusic from "./NewMusic/NewSongExpress"
import Recommendation from "./Recommendation"

// const FindMusic = () => {
//     const arrList = ["个性推荐", "专属定制", "歌单", "排行榜", "歌手", "最新音乐"]

//     const arrContent = [
//         "recommendation",
//         "design",
//         "songlist",
//         "charts",
//         "singer",
//         "latestmusic/newsongexpress"
//     ]

//     return (
//         <Flex flexWrap="wrap" h="52em" justifyContent="center">
//             <Flex alignItems="center" h="3em" justifyContent="space-around" w="54em">
//                 {arrList.map((item: any, index: number) => (
//                     <Link key={index} to={arrContent[index]}>
//                         {arrList[index]}
//                     </Link>
//                 ))}
//             </Flex>
//             <Box h="49.5em" w="100%">
//                 <Outlet />
//             </Box>
//         </Flex>
//     )
// }

const FindMusic = () => {
    return (
        <Box bg="white" h="52em">
            <Center>
                     
                <Link className="recommendationLink" to="recommendation">
                                        个性推荐              
                </Link>
                               
                <Link className="recommendationLink" to="">
                                        专属定制                
                </Link>
                           
                <Link className="recommendationLink" to="">
                                        歌单              
                </Link>
                               
                <Link className="recommendationLink" to="">
                                        排行榜              
                </Link>
                             
                <Link className="recommendationLink" to="singer/picture">
                                        歌手            
                </Link>
                             
                <Link className="recommendationLink" to="latestmusic/newsongexpress">
                                        最新音乐              
                </Link>
                         
            </Center>
                       
            <Box>
                                <Outlet />       
            </Box>
                   
        </Box>
    )
}

export default FindMusic
