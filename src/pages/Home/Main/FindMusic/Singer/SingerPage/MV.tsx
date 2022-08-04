/*
 * @Author: DZR
 * @Date: 2022-07-29 17:03:38
 * @LastEditTime: 2022-08-03 10:24:22
 * @LastEditors: DZR
 * @Description: 歌手详情页中的MV预览页面
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\MV.tsx
 */
import { useMVDetailQuery, useSingerMV } from "@/services"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type myType = {
    msg: any
}
// const urls = ["/mv/14315629", "/mv/14501079", "/mv/14424820"]
// let i = 0
const MV = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { msg } = location.state as myType
    const { data: mvid, isLoading: mvidIsLoading } = useSingerMV(msg.id, 28)
    //const { data: mvDetails, isLoading: mvDetailsIsLoading } = useMVDetailQuery(5341369)
    const Details = useMemo(() => {
        if (mvid) {
            //console.log(mvid.mvs)
            return mvid.mvs
        }
    }, [mvid])
    return (
        <Box>
            <Flex wrap="wrap">
                {mvidIsLoading ? (
                    <Box>loading</Box>
                ) : (
                    Details.map((item: any, index: number) => {
                        return (
                            <Box
                                cursor="pointer"
                                h="170px"
                                key={index}
                                m="30px"
                                onClick={() => {
                                    navigate("/mv/" + item.id, {
                                        state: { msg: item }
                                    })
                                }}
                                w="280px"
                            >
                                <Image h="170px" src={item.imgurl} w="280px" />
                                {item.name}
                            </Box>
                        )
                    })
                )}
            </Flex>
        </Box>
    )
}

export default MV
