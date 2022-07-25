/* eslint-disable react/jsx-no-undef */
/*
 * @Author: DZR
 * @Date: 2022-07-20 09:30:23
 * @LastEditTime: 2022-07-25 11:23:07
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Footer\index.tsx
 */

import { FC } from "react"
import { Center, Box } from "@chakra-ui/react"

const Footer: FC = () => {
    return (
        <>
            <Center>
                <Box
                    borderTop="1px solid lightgray"
                    bottom="0"
                    h="4em"
                    position="fixed"
                    w="100%"
                ></Box>
            </Center>
        </>
    )
}

export default Footer
