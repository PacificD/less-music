/*
 * @Author: DZR
 * @Date: 2022-07-28 16:44:18
 * @LastEditTime: 2022-08-04 10:03:28
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPicture.tsx
 */

import { useSinger } from "@/services"
import { IRes } from "@/types"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import SingerClassify from "./SingerClassify"

const SingerPicture = () => {
    const navigate = useNavigate()
    let { data: singer, isLoading: singerIsLoading } = useSinger({ limit: 96, type: -1 })
    const Details = useMemo(() => {
        if (singer) {
            sessionStorage.setItem("singer", JSON.stringify(singer))
            return (singer as IRes).artists
        }
    }, [singer])
    return (
        <Box>
            <SingerClassify />
            <Box position="relative">
                <Box id="picture" margin="auto" w="70%">
                    <Flex wrap="wrap">
                        {singerIsLoading ? (
                            <Box fontSize={100}>loading</Box>
                        ) : (
                            Details.map((item: any) => {
                                return (
                                    <Box key={item.id}>
                                        <Image
                                            alt="singerPicture"
                                            cursor="pointer"
                                            h="150px"
                                            margin="9px"
                                            onClick={() =>
                                                navigate("/findmusic/singer/page", {
                                                    state: { msg: item }
                                                })
                                            }
                                            src={item.picUrl}
                                            w="170px"
                                        ></Image>
                                        <Text className="singerName">{item.name}</Text>
                                    </Box>
                                )
                            })
                        )}
                    </Flex>
                </Box>
                <Box>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default SingerPicture
