/*
 * @Author: Ride-pig
 * @Date: 2022-08-06 10:05:37
 * @LastEditTime: 2022-08-08 16:40:06
 * @LastEditors: Ride-pig
 * @Description: 个性推荐页面的推荐歌单的制作
 * @FilePath: \eee\less-music\src\pages\Home\Main\FindMusic\Recommendation\RecommendationList\index.tsx
 */

import { LoadingTwo } from "@/components"
import { usePersonalizedQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Flex, Grid, Text, Image, Circle } from "@chakra-ui/react"
import React, { FC, useMemo } from "react"
import { RiCalendarCheckLine } from "react-icons/ri"
import { MdKeyboardArrowRight } from "react-icons/md"
import bg from "../../LatestMusic/NewDiscs/background.png"
import { BsFillPlayFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import "../../../../../../style/main.css"

// 封装将数字转化成万、亿、万亿的函数
function numberFormat(value: number) {
    let param = {
        value,
        unit: ""
    }
    const k = 10000,
        sizes = ["", "万", "亿", "万亿"]
    let i
    if (value < k) {
        param.value = value
        param.unit = ""
    } else {
        i = Math.floor(Math.log(value) / Math.log(k))
        param.value = Number((value / Math.pow(k, i)).toFixed(2))
        param.unit = sizes[i]
    }
    return param.value + param.unit
}

const RecommendationList: FC = () => {
    const { data: personalized, isLoading: personalizedIsLoading } = usePersonalizedQuery()

    const personalizedResult = useMemo(() => {
        if (personalized) {
            return (personalized as IRes).result
        }
    }, [personalized])

    const navigate = useNavigate()

    return (
        <Box h="35em" mt="2em">
            <Flex
                alignItems="center"
                cursor="pointer"
                fontWeight="700"
                h="3em"
                lineHeight="3em"
                margin="auto"
                // 这里点击能跳到歌单详情的页面
                onClick={() => {
                    navigate("/findmusic/songlist")
                }}
                w="68em"
            >
                推荐歌单
                <Box mt="3px">
                    <MdKeyboardArrowRight fontSize="1.5em" />
                </Box>
            </Flex>
            <Grid
                gridTemplateColumns="repeat(5,14.5em)"
                gridTemplateRows="repeat(auto-fill,16em)"
                margin="auto"
                w="68em"
            >
                <Box
                    cursor="pointer"
                    h="16em"
                    //这里用户登录之后将1475704935这个id切换成用户的id
                    onClick={() => {
                        navigate(`/dailysong/${1475704935}`)
                    }}
                    position="relative"
                    w="10em"
                >
                    <Image borderRadius="1em" filter="blur(5px)" src={bg} />
                    <Box left="37%" position="absolute" top="22%">
                        <RiCalendarCheckLine color="#2b6cb0" fontSize="3em" />
                    </Box>
                    <Text fontSize="14px" fontWeight="700" textAlign="center">
                        每日歌曲推荐
                    </Text>
                </Box>
                {personalizedIsLoading ? (
                    <Box h="10em" left="50%" position="fixed" top="10%" w="10em">
                        <LoadingTwo />
                    </Box>
                ) : (
                    personalizedResult.map((item: any, index: number) => (
                        <Box bg="#fff" h="16em" key={item.id} w="10em">
                            <Box h="10em" position="relative" w="10em">
                                <Image
                                    _hover={{ transform: "translate(0,-5px)" }}
                                    borderRadius="1em"
                                    className="pictureTwo"
                                    cursor="pointer"
                                    onClick={() => {
                                        navigate(`/playlist/${item.id}`)
                                    }}
                                    src={item.picUrl}
                                    transition="all .5s"
                                />
                                <Circle
                                    bgColor="#fff"
                                    bottom="5%"
                                    className="circleTwo"
                                    opacity="0"
                                    position="absolute"
                                    right="5%"
                                    size="2em"
                                    zIndex="99"
                                >
                                    <BsFillPlayFill color="#fd544e" fontSize="1.5em" />
                                </Circle>
                                <Box
                                    color="#fff"
                                    fontSize="14px"
                                    fontWeight="600"
                                    position="absolute"
                                    right="5%"
                                    top="0"
                                >
                                    {numberFormat(item.playCount)}
                                </Box>
                            </Box>
                            <Box
                                _hover={{ color: "gray" }}
                                cursor="pointer"
                                fontSize="14px"
                                fontWeight="700"
                            >
                                {item.name}
                            </Box>
                        </Box>
                    ))
                )}
            </Grid>
        </Box>
    )
}

export default RecommendationList
