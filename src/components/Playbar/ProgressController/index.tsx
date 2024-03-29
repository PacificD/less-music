/*
 * @Author: Pacific_D
 * @Date: 2022-07-25 11:41:32
 * @LastEditTime: 2022-08-06 11:06:38
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\components\Playbar\ProgressController\index.tsx
 */

import { formatPlayTime } from "@/utils"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    Tooltip,
    SliderThumb,
    Box,
    Input
} from "@chakra-ui/react"
import { useEventListener } from "ahooks"
import React, { FC, useState, useMemo, useRef } from "react"

interface IProps {
    currentTime: number
    duration: number
    audioRef: React.RefObject<HTMLAudioElement>
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * @description: 音乐进度播放器
 * @return {*}
 */
const ProgressController: FC<IProps> = ({ currentTime, duration, audioRef, setIsPlaying }) => {
    const [isTooltip, setIsTooltip] = useState(false)

    const onPress = (v: number) => {
        audioRef.current!.pause()
        setIsPlaying(false)
        audioRef.current!.currentTime = v
    }

    const onPressEnd = () => {
        audioRef.current!.play()
        setIsPlaying(true)
    }

    return (
        <Slider
            aria-label="slider"
            className="progressController"
            max={duration}
            min={0}
            onChange={v => onPress(v)}
            onChangeEnd={onPressEnd}
            onMouseEnter={() => setIsTooltip(true)}
            onMouseLeave={() => setIsTooltip(false)}
            position="absolute"
            top="0"
            transform="translate(0, -100%)"
            value={currentTime}
            zIndex={1}
        >
            <SliderTrack bg="lightgray">
                <SliderFilledTrack bg="#2b6cb0" />
            </SliderTrack>
            <Tooltip
                bg="gray.100"
                color="black"
                hasArrow
                isOpen={isTooltip}
                label={formatPlayTime(currentTime)}
                placement="top"
            >
                <SliderThumb bg="#2b6cb0" boxSize={3} />
            </Tooltip>
        </Slider>
    )
}

export default ProgressController
