/*
 * @Author: Pacific_D
 * @Date: 2022-07-25 11:04:25
 * @LastEditTime: 2022-08-04 19:29:12
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\components\Playbar\VolumeController\index.tsx
 */

import {
    Box,
    chakra,
    Flex,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Tooltip,
    useColorModeValue
} from "@chakra-ui/react"
import { FC, useState } from "react"
import { FiVolume2, FiVolumeX } from "react-icons/fi"
import { MdGraphicEq } from "react-icons/md"

const CFiVolume2 = chakra(FiVolume2),
    CFiVolumeX = chakra(FiVolumeX)

interface IProps {
    width: number
    audioRef: React.RefObject<HTMLAudioElement>
}

/**
 * @description: 音量控制器
 * @param {number} width -组件chakra宽度
 * @return {*}
 */
const VolumeController: FC<IProps> = ({ width, audioRef }) => {
    const [isTooltip, setIsTooltip] = useState(false),
        [volume, setVolume] = useState({
            current: 64,
            memo: 64
        }),
        iconColor = useColorModeValue("gray.500", "gray.300")

    const toggleSound = () => {
        if (volume.current === 0) {
            audioRef.current!.volume = volume.memo / 100
            setVolume(prev => {
                return {
                    current: prev.memo,
                    memo: prev.memo
                }
            })
        } else {
            audioRef.current!.volume = 0
            setVolume(prev => {
                return { current: 0, memo: prev.memo }
            })
        }
    }

    const changeVolume = (v: number) => {
        audioRef.current!.volume = v / 100
        setVolume({
            current: v,
            memo: v
        })
    }

    return (
        <Flex alignItems="center" flexDirection="row" h="full" w={width}>
            <Box onClick={toggleSound}>
                {volume.current === 0 ? (
                    <CFiVolumeX
                        _hover={{ color: "#2b6cb0" }}
                        color={iconColor}
                        cursor="pointer"
                        fontSize="24"
                    />
                ) : (
                    <CFiVolume2
                        _hover={{ color: "#2b6cb0" }}
                        color={iconColor}
                        cursor="pointer"
                        fontSize="24"
                    />
                )}
            </Box>
            <Slider
                aria-label="slider-ex-5"
                ml={4}
                onChange={v => changeVolume(v)}
                onMouseEnter={() => setIsTooltip(true)}
                onMouseLeave={() => setIsTooltip(false)}
                value={volume.current}
            >
                <SliderTrack bg="lightgray">
                    <SliderFilledTrack bg="#2b6cb0" />
                </SliderTrack>
                <Tooltip
                    bg="gray.100"
                    color="black"
                    hasArrow
                    isOpen={isTooltip}
                    label={`${volume.current}%`}
                    placement="top"
                >
                    <SliderThumb bg="gray.100" boxSize={5}>
                        <Box as={MdGraphicEq} color="#2b6cb0" />
                    </SliderThumb>
                </Tooltip>
            </Slider>
        </Flex>
    )
}

export default VolumeController
