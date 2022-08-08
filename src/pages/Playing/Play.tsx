/*
 * @Author: DZR
 * @Date: 2022-08-03 11:07:29
 * @LastEditTime: 2022-08-08 19:30:55
 * @LastEditors: DZR
 * @Description:歌曲播放页面
 * @FilePath: \less-music\src\pages\Playing\Play.tsx
 */
import { useCtxValue } from "@/hooks"
import { useLyric, useSongComments, useSongDetail } from "@/services"
import { Box, Center, Circle, Flex, Spacer, Text, Image } from "@chakra-ui/react"
import { useMemo, useRef } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { BsArrowsAngleExpand } from "react-icons/bs"
import { useNavigate, useParams } from "react-router-dom"
import Comments from "../Comments"
import "../../style/index.css"
import { formatLyric } from "@/utils"

const fragment = (timeArr: any[]) => {
    //计算每句歌词的持续时间的函数
    let arr: number[] = []
    for (let i = 1; i < timeArr.length; i++) {
        arr.push(timeArr[i].time - timeArr[i - 1].time)
    }
    return arr
}

const Play = () => {
    const navigate = useNavigate()
    const { currentPlayTime } = useCtxValue() //获取当前歌曲的播放进度
    const { id } = useParams() //路由传参，歌曲id
    const { data: mvComments, isLoading: mvCommentsIsLoading } = useSongComments(
        //获取歌曲评论
        parseInt(id as string)
    )
    const comments = useMemo(() => {
        if (mvComments) {
            return mvComments
        }
    }, [mvComments])

    const { data: lyric, isLoading: lyricIsLoading } = useLyric(parseInt(id as string)) //获取歌词
    const Lyric = useMemo(() => {
        if (lyric) {
            //console.log(formatLyric(lyric.lrc.lyric))
            return lyric.lrc.lyric
        }
    }, [lyric])

    const { data: song, isLoading: SongIsLoading } = useSongDetail(parseInt(id as string)) //获取歌曲详情
    const songDetail = useMemo(() => {
        if (song) {
            return song.songs[0]
        }
    }, [song])

    const ref = useRef(null)

    //         console.log(e.target!.scrollHeight, e.target!.offsetHeight, e.target!.scrollTop)

    return (
        <Center>
            <Box h="55em" overflow="scroll" w="130em">
                <Flex>
                    <Text
                        color="gray"
                        cursor="pointer"
                        margin="20px 30px"
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        <AiOutlineDown />
                    </Text>
                    <Spacer />
                    <Box color="gray" cursor="pointer" margin="20px 30px">
                        <Flex>
                            <Box mt="5px">
                                <BsArrowsAngleExpand fontSize="15" />
                            </Box>
                            <Text>全屏纯享</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Center>
                    <Box>
                        <Box position="relative">
                            <Flex>
                                <Box h="25em" mt="8em" w="25em">
                                    <Circle className="playingAlbum" size="20em">
                                        <Circle bg="#333" size="18em">
                                            <Circle bg="white" overflow="hidden" size="14em">
                                                {SongIsLoading || !songDetail ? (
                                                    <Box>loading</Box>
                                                ) : (
                                                    <Image
                                                        sizes="100%"
                                                        src={songDetail.al.picUrl}
                                                    />
                                                )}
                                            </Circle>
                                        </Circle>
                                    </Circle>
                                </Box>
                                {SongIsLoading || !songDetail ? (
                                    <Box>loading</Box>
                                ) : (
                                    <Box textAlign="center">
                                        <Box fontSize={30}>{songDetail.name}</Box>
                                        <Flex color="gray">
                                            <Text>{songDetail.ar[0].name}</Text>
                                            <Text bg="gray" h="2px" m="12px 8px" w="8px"></Text>
                                            <Text>{songDetail.al.name}</Text>
                                        </Flex>
                                    </Box>
                                )}
                                <Box className="lyric" ref={ref}>
                                    {lyricIsLoading || !lyric ? (
                                        <Box>loading</Box>
                                    ) : (
                                        formatLyric(Lyric).map((item: any, index: number) => {
                                            const fragments = fragment(formatLyric(Lyric))
                                            const advance = currentPlayTime - item.time
                                            if (advance <= 0.5 && advance >= -0.5 && ref.current)
                                                (ref.current as any).scrollTop += 40
                                            return (
                                                <Box
                                                    className={
                                                        currentPlayTime - item.time <=
                                                            fragments[index] &&
                                                        currentPlayTime - item.time >= 0
                                                            ? "lyricMiddle"
                                                            : "lyricBox"
                                                    }
                                                    key={index}
                                                    onClick={() => {
                                                        console.log(
                                                            (ref.current as any).scrollHeight /
                                                                formatLyric(Lyric).length
                                                        )
                                                    }}
                                                >
                                                    {item.text}
                                                </Box>
                                            )
                                        })
                                    )}
                                </Box>
                            </Flex>
                        </Box>
                        <Box mt="10em" width="70em">
                            {mvCommentsIsLoading ? <Box></Box> : <Comments comment={comments} />}
                        </Box>
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}

export default Play
