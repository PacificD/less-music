/*
 * @Author: DZR
 * @Date: 2022-07-23 11:00:44
<<<<<<< HEAD
<<<<<<< HEAD
 * @LastEditTime: 2022-08-08 21:57:43
 * @LastEditors: DZR
=======
 * @LastEditTime: 2022-08-04 22:03:56
 * @LastEditors: Giaruei
>>>>>>> feature-cjr
=======
 * @LastEditTime: 2022-08-06 10:01:36
 * @LastEditors: Ride-pig
>>>>>>> feature-ljp
 * @Description:轮播图
 * @FilePath: \eee\less-music\src\pages\Home\Main\FindMusic\Recommendation\Swiper\index.tsx
 */
import { useBanner } from "@/services"
import { Box, Circle, Image, Center } from "@chakra-ui/react"
import "../../../../../../style/index.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { FC, useEffect, useMemo, useState } from "react"
import { IRes } from "@/types"

function left(location: { id: string; name: string }[]) {
    let dir = [...location]
    const pop = dir.pop()
    dir.unshift(pop ? pop : { id: "0", name: "" })
    return dir
}
function right(location: { id: string; name: string }[]) {
    let dir = [...location]
    const shift = dir.shift()
    dir.push(shift ? shift : { id: "0", name: "" })
    return dir
}
let timeID: any

const Swiper: FC = () => {
    const [location, setLocation] = useState([
        { id: "1", name: "middle" },
        { id: "2", name: "right" },
        { id: "3", name: "hide" },
        { id: "4", name: "hide" },
        { id: "5", name: "hide" },
        { id: "6", name: "hide" },
        { id: "7", name: "hide" },
        { id: "8", name: "left" }
    ])

    const { data: banner, isLoading: bannerIsLoading } = useBanner()
    const picture = useMemo(() => {
        if (banner) {
            //sessionStorage.setItem("banner", JSON.stringify(banner))
            return (banner as IRes).banners
        }
    }, [banner])

    useEffect(() => {
        timeID = setInterval(() => setLocation(left(location)), 3000)
        return () => {
            if (timeID) {
                clearInterval(timeID)
            }
        }
    }, [location])

    return (
        <Box>
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
                        <Box color="white">isLoading</Box>
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
                                        borderRadius="10px"
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
        </Box>
    )
}

export default Swiper
