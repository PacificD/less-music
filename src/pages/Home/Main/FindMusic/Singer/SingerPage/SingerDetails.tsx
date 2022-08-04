/*
 * @Author: DZR
 * @Date: 2022-07-29 17:04:21
 * @LastEditTime: 2022-08-04 15:55:51
 * @LastEditors: DZR
 * @Description: 歌手详情页中的歌手详情组件
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\SingerDetails.tsx
 */
import { useArtistDetails, useSingerDescription } from "@/services"
import { Box, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { useLocation } from "react-router-dom"

type myType = {
    msg: any
}

const SingerDetails = () => {
    const Ti: string[] = []
    const Txt: string[] = []
    const location = useLocation()
    const { msg } = location.state as myType
    const { data: singerDetails, isLoading: singerDetailsIsloading } = useArtistDetails({
        id: msg.id
    })
    const { data: desc, isLoading: descIsLoading } = useSingerDescription(msg.id)

    const Details = useMemo(() => {
        if (singerDetails) {
            return singerDetails.data.artist.briefDesc
        }
    }, [singerDetails])
    const descDetails = useMemo(() => {
        if (desc) {
            return desc.introduction
        }
    }, [desc])
    if (desc) {
        desc.introduction.forEach((item: any) => {
            Txt.push(item.txt)
            Ti.push(item.ti)
        })
    }
    return (
        <Box>
            {singerDetailsIsloading ? (
                <Box>loading</Box>
            ) : (
                <Box marginBottom="40px">
                    <Text marginBottom="13px">{msg.name + "简介"}</Text>
                    <Text className="singersDetails" color="gray">
                        {Details}
                    </Text>
                </Box>
            )}
            {descIsLoading ? (
                <Box>loading</Box>
            ) : (
                descDetails.map((item: any, index: number) => {
                    return (
                        <Box className="singersDetails" key={index} marginBottom="40px">
                            <Text marginBottom="13px">{Ti[index]}</Text>
                            <Text color="gray">{Txt[index]}</Text>
                        </Box>
                    )
                })
            )}
        </Box>
    )
}

export default SingerDetails
