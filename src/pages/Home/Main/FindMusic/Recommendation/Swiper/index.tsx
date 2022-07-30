/*
 * @Author: DZR
 * @Date: 2022-07-23 11:00:44
 * @LastEditTime: 2022-07-30 11:37:43
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Recommendation\Swiper\index.tsx
 */
import { useBanner } from "@/services"
import { Box, Circle, Image, Center } from "@chakra-ui/react"
import "../../../../../../style/index.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { FC, useMemo, useState } from "react"
import { IRes } from "@/types"

let timerID: any
const Swiper: FC = () => {
    const [location, setLocation] = useState([
        { name: "middle" },
        { name: "right" },
        { name: "hide" },
        { name: "hide" },
        { name: "hide" },
        { name: "hide" },
        { name: "hide" },
        { name: "left" }
    ])

    const { data: banner, isLoading: bannerIsLoading } = useBanner()
    const picture = useMemo(() => {
        if (banner) {
            sessionStorage.setItem("banner", JSON.stringify(banner))
            return (banner as IRes).banners
        }
    }, [banner])

    function left(location: { name: string }[]) {
        let dir = [...location]
        const pop = dir.pop()
        dir.unshift(pop ? pop : { name: "" })
        return dir
    }
    function right(location: { name: string }[]) {
        let dir = [...location]
        const shift = dir.shift()
        dir.push(shift ? shift : { name: "" })
        return dir
    }

    if (timerID) clearTimeout(timerID)
    timerID = setInterval(() => setLocation(left(location)), 3000)
    return (
        <>
            <Box bg="white" h="12em">
                <Box h="12em" m="auto" position="relative" w="68em">
                    <Circle className="leftCircle">
                        <BiChevronLeft
                            className="leftIcon"
                            onClick={() => {
                                setLocation(right(location))
                            }}
                        ></BiChevronLeft>
                    </Circle>
                    {bannerIsLoading ? (
                        <Box fontSize={200}>isLoading</Box>
                    ) : (
                        location.map((item, index) => {
                            return (
                                <Box
                                    className={`imageBox ${item.name}`}
                                    key={index}
                                    position="absolute"
                                >
                                    <Image
                                        alt="notFound"
                                        h="100%"
                                        src={picture[index].imageUrl}
                                        w="100%"
                                    />
                                </Box>
                            )
                        })
                    )}
                    <Circle className="rightCircle">
                        <BiChevronRight
                            className="rightIcon"
                            onClick={() => {
                                setLocation(left(location))
                            }}
                        ></BiChevronRight>
                    </Circle>
                    <Center className="pointIcon">
                        {location.map((item, index) => (
                            <Circle
                                className={item.name === "middle" ? "p1" : "points"}
                                key={index}
                                onMouseEnter={() => {
                                    let dirCopy = [...location]
                                    dirCopy.map((Item, Index) => {
                                        if (Index === index) {
                                            while (dirCopy[index].name !== "middle") {
                                                dirCopy = left(dirCopy)
                                            }
                                        }
                                        setLocation(dirCopy)
                                        return 0
                                    })
                                }}
                            ></Circle>
                        ))}
                    </Center>
                </Box>
            </Box>
        </>
    )
}

export default Swiper
