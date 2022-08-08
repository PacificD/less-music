/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*
 * @Author: Pacific_D
 * @Date: 2022-07-23 15:58:35
 * @LastEditTime: 2022-08-06 09:55:15
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\components\Playbar\index.tsx
 */
import { Box, Flex, Text, useColorModeValue, useToast } from "@chakra-ui/react"
import { createContext, FC, useMemo, useRef, useState } from "react"
import MainButton from "./MainButton"
import ProgressController from "./ProgressController"
import SongInfo from "./SongInfo"
import RightSection from "./RightSection"
import { useMusicUrlQuery } from "@/services"
import { IRes, PlayingMusic } from "@/types"
import { calculateDuration, formatPlayTime } from "@/utils"
import { useCtxValue } from "@/hooks"
import { useEffect } from "react"

/**
 * @description: 底部音乐控件：播放进度，音量，呼出播放列表等
 * @return {*}
 */

const Playbar = () => {
    const bg = useColorModeValue("white", "darkMode"),
        [currentTime, setCurrentTime] = useState(0),
        [mode, setMode] = useState<number>(0),
        { playlist, playMusic, playingMusic, setCurrentPlayTime } = useCtxValue(),
        toast = useToast(),
        initial = useRef(true)

    const audioRef = useRef<HTMLAudioElement>(null),
        [isPlaying, setIsPlaying] = useState(false)

    const { data, isLoading, isError, error } = useMusicUrlQuery(playingMusic.id)

    const musicSrc: string = useMemo(() => {
        if (!isLoading) {
            if (!data || (data as IRes).code !== 200) {
                toast({
                    title: "网络出错",
                    description: (data as IRes)?.message
                        ? (data as IRes)?.message
                        : "请检查网络或联系管理员",
                    status: "error",
                    duration: 12000,
                    position: "top",
                    isClosable: true
                })
                return "./music.mp3"
            } else {
                return (data as IRes).data[0].url
            }
        }
    }, [data, isLoading, toast])

    const duration: number = Math.round(audioRef.current?.duration ? audioRef.current?.duration : 0)

    /**
     * @description: 播放时间更新事件
     * @param {any} e
     * @return {*}
     */
    const playTimeUpdate = (e: any) => {
        setCurrentTime(Math.round(e.target!.currentTime))
    }

    useEffect(() => {
        setCurrentPlayTime(currentTime)
    }, [currentTime, setCurrentPlayTime])
    /**
     * @description: 资源加载完毕的回调
     * @return {*}
     */
    const mediaOnLoaded = () => {
        if (initial.current) {
            initial.current = false
            return
        }
        audioRef.current!.play()
        setIsPlaying(true)
    }

    /**
     * @description: 切换播放状态：播放/暂停
     * @return {*}
     */
    const togglePlaying = () => {
        if (isPlaying) {
            setIsPlaying(false)
            audioRef.current!.pause()
        } else {
            setIsPlaying(true)
            audioRef?.current!.play()
        }
    }

    /**
     * @description: 切换歌曲
     * @param {"next" | "prev"} order
     * @return {*}
     */
    const playNextOrPrev = (order: "next" | "prev" = "next") => {
        let index,
            music = {}

        const getRandomIndex = (): number => {
            const currIndex = playlist.findIndex(
                (music: PlayingMusic) => music.id === playingMusic.id
            )
            let randomIndex = currIndex
            while (randomIndex === currIndex) {
                randomIndex = Math.round(Math.random() * playlist.length)
            }
            return randomIndex === playlist.length ? randomIndex - 1 : randomIndex
        }
        switch (mode) {
            case 0:
                index = playlist.findIndex((music: PlayingMusic) => music.id === playingMusic.id)
                if (order === "prev") {
                    index = index === 0 ? playlist.length - 1 : index - 1
                    playMusic(playlist[index])
                } else {
                    index = index + 1 >= playlist.length ? 0 : index + 1
                    playMusic(playlist[index])
                }
                break
            case 1:
                audioRef.current!.play()
                break
            case 2:
                playMusic(playlist[getRandomIndex()])
                break
            default:
                playMusic(playingMusic)
                break
        }
    }

    if (isError) {
        toast({
            title: "网络出错",
            description: "请检查网络或联系管理员",
            status: "error",
            duration: 6000,
            position: "top",
            isClosable: true
        })
    }

    // currentPlayTime = currentTime

    return (
        //<PlayTimeContext.Provider value={{ time: currentTime }}>
        <Box bottom={0} h="60px" position="fixed" w="full">
            <audio
                className="audio"
                onEnded={() => playNextOrPrev("next")}
                onLoadedMetadata={mediaOnLoaded}
                onTimeUpdate={e => playTimeUpdate(e)}
                ref={audioRef}
                src={musicSrc}
                style={{ display: "none" }}
            ></audio>
            <ProgressController
                audioRef={audioRef}
                currentTime={currentTime}
                duration={duration}
                setIsPlaying={setIsPlaying}
            />
            <Flex
                alignItems="center"
                bg={bg}
                flexDirection="row"
                h="60px"
                justifyContent="space-between"
                position="absolute"
                px={16}
                top="0"
                w="full"
            >
                <SongInfo
                    cover={playingMusic.cover}
                    id={playingMusic.id}
                    name={playingMusic.name}
                    singerInfo={playingMusic.artists}
                />
                <MainButton
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    playNextOrPrev={playNextOrPrev}
                    togglePlaying={togglePlaying}
                />
                <Text left="60%" position="absolute">
                    {formatPlayTime(currentTime)} / {calculateDuration(playingMusic.duration)}
                </Text>
                {useMemo(
                    () => (
                        <RightSection audioRef={audioRef} mode={mode} setMode={setMode} />
                    ),
                    [mode]
                )}
            </Flex>
        </Box>
        //</PlayTimeContext.Provider>
    )
}

export default Playbar
