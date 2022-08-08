/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-29 10:42:38
 * @LastEditors: Ride-pig
 * @LastEditTime: 2022-08-08 10:28:37
 * @FilePath: \eee\less-music\src\pages\Home\Main\FindMusic\LatestMusic\NewDiscs\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { LoadingTwo } from "@/components"
import { useCtxValue } from "@/hooks"
import { useNewDiscsQuery } from "@/services"
import request from "@/services/request"
import { IRes, METHODS } from "@/types"
import { Box, Center, Circle, Flex, Grid, Image } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { BsFillPlayFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import "../../index.css"
import Images from "../lazyLoad"
import background from "./background.png"

export const NewDiscs = () => {
    const { data: newDiscs, isLoading: newDiscsIsLoading } = useNewDiscsQuery()
    const newDiscsResult = useMemo(() => {
        if (newDiscs) {
            return (newDiscs as IRes).weekData
        }
    }, [newDiscs])

    // 得到专辑信息的函数
    function getAlbum(id: string) {
        return request<IRes>(
            "/album",
            {
                id: id
            },
            METHODS.GET
        ).then(res => res.data.code === 200 && res.data)
    }
    //能获取到专辑的信息

    const { playMusic, playlistDispatch } = useCtxValue()

    const playAll = (param: any) => {
        playlistDispatch({
            type: "ADD",
            payload: param.map((item: any, index: number) => {
                return {
                    id: item.id,
                    name: item.name,
                    cover: item.al.picUrl,
                    duration: item.dt,
                    artists: item.ar
                }
            })
        })
        playMusic({
            id: param[0].id,
            name: param[0].name,
            cover: param[0].al.picUrl,
            duration: param[0].dt,
            artists: param[0].ar
        })
    }

    const navigate = useNavigate()

    return (
        <Box display="flex" flexWrap="wrap" h="44em" justifyContent="center">
            <Box fontSize="xl" fontWeight="900" left="25%" position="fixed" zIndex="99999">
                本周新碟
            </Box>
            <Grid gridTemplateColumns="repeat(5,13em)" gridTemplateRows="repeat(auto-fill,16em)">
                {newDiscsIsLoading ? (
                    <Box h="80px" left="50%" position="fixed" top="10%" w="235px">
                        <LoadingTwo />
                    </Box>
                ) : (
                    newDiscsResult.map((item: any, index: number) => (
                        <Box h="16em" key={item.id} w="10em">
                            <Center h="10em" position="relative" w="10em">
                                <Images src={newDiscsResult[index].picUrl}></Images>
                                <Box
                                    className="imageNew"
                                    h="10em"
                                    onClick={() => {
                                        navigate(`/album/${item.id}`)
                                    }}
                                    position="absolute"
                                    w="10em"
                                ></Box>
                                <Circle
                                    bgColor="#fff"
                                    className="circle"
                                    // 这里点击的时候能播放专辑的全部音乐
                                    onClick={() =>
                                        getAlbum(newDiscsResult[index].id).then(res =>
                                            playAll((res as IRes).songs)
                                        )
                                    }
                                    opacity="0"
                                    position="absolute"
                                    size="2.6em"
                                >
                                    <BsFillPlayFill color="#fd544e" fontSize="2em" />
                                </Circle>
                                <Image
                                    h="100%"
                                    marginLeft="4em"
                                    position="absolute"
                                    src={background}
                                    top="0"
                                    w="100%"
                                    zIndex="-1"
                                ></Image>
                            </Center>
                            <Flex fontSize="14px" h="3em" paddingTop="5px" w="11.5em">
                                {newDiscsResult[index].name}
                            </Flex>
                            <Box color="#9f9f9f" fontSize="12px" h="2em" w="11.5em">
                                {newDiscsResult[index].artists[0].name}
                            </Box>
                        </Box>
                    ))
                )}
            </Grid>
        </Box>
    )
}

export default NewDiscs
