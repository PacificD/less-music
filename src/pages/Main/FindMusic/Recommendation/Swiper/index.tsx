/*
 * @Author: DZR
 * @Date: 2022-07-23 11:00:44
 * @LastEditTime: 2022-07-25 16:15:23
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Recommendation\Swiper\index.tsx
 */
import { Box, Circle, Image, Center } from "@chakra-ui/react"
import "../../../../../../style/index.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { FC, useState } from "react"

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
                    {location.map((item, index) => {
                        return (
                            <Box
                                className={`imageBox ${item.name}`}
                                key={index}
                                position="absolute"
                            >
                                <Image
                                    alt="notFound"
                                    h="100%"
                                    src={`./images/${index + 1}.png`}
                                    w="100%"
                                />
                            </Box>
                        )
                    })}
                    <Circle className="rightCircle">
                        <BiChevronRight
                            className="rightIcon"
                            onClick={() => {
                                setLocation(left(location))
                            }}
                        ></BiChevronRight>
                    </Circle>
                    <Center className="pointIcon">
                        {location.map((item, index) => {
                            return (
                                <>
                                    <Circle
                                        className={item.name === "middle" ? "p1" : "points"}
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
                                </>
                            )
                        })}
                    </Center>
                </Box>
            </Box>
        </>
    )
}

export default Swiper
