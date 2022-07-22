/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-22 14:26:59
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\Home\index.tsx
 */

import { FC } from "react"
import { ColorModeSwitcher, Logo } from "@/components"
import { Box, Text, Link, VStack, Code, Grid } from "@chakra-ui/react"
import { userApi } from "@/services"

const Home: FC = () => {
    const send = () => {
        userApi.test().then(res => console.log(res))
    }

    return (
        <Box fontSize="xl" textAlign="center">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={8}>
                    <Text fontSize="xl" onClick={send}>
                        send
                    </Text>
                    <Logo h="40vmin" pointerEvents="none" />
                    <Text>
                        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                    </Text>
                    <Link
                        color="teal.500"
                        fontSize="2xl"
                        href="https://chakra-ui.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Learn Chakra
                    </Link>
                </VStack>
            </Grid>
        </Box>
    )
}

export default Home
