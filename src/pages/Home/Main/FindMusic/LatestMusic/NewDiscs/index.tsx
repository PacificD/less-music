/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-29 10:42:38
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-29 20:53:42
 * @FilePath: \3\less-music\src\pages\Home\Main\FindMusic\NewMusic\newDiscs.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { LoadingTwo } from "@/components"
import { useNewDiscsQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Center, Circle, Flex, Grid, Image } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { BsFillPlayFill } from "react-icons/bs"
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
                        <Box h="16em" key={index} w="10em">
                            <Center h="10em" position="relative" w="10em">
                                <Images
                                    className="imageNew"
                                    src={newDiscsResult[index].picUrl}
                                ></Images>
                                <Circle
                                    bgColor="#fff"
                                    className="circle"
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
