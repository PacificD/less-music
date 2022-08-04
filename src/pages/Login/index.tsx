/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:28:37
 * @LastEditTime: 2022-08-03 09:47:30
 * @LastEditors: Ride-pig 327796210@qq.com
 * @Description:
 * @FilePath: \less-music\src\pages\Login\index.tsx
 */

import { Flex, Center, Box } from "@chakra-ui/react"
import { FC, useState } from "react"
import { AiOutlineQrcode } from "react-icons/ai"
import { MdPhoneIphone } from "react-icons/md"
import { Outlet, useNavigate } from "react-router-dom"

const Login: FC = () => {
    const navigate = useNavigate()
    const [boolean, setBoolean] = useState(true)

    function change(param: boolean) {
        switch (param) {
            case false:
                return navigate("/login/qrcode")
            case true:
                return navigate("/login/password")
        }
    }

    return (
        <Center h="90vh">
            <Flex
                alignItems="center"
                border="1px solid #7ba3ff"
                borderRadius="2em"
                flexDirection="column"
                h="29em"
                position="relative"
                rowGap="1em"
                w="29em"
            >
                <Box
                    cursor="pointer"
                    h="7em"
                    onClick={() => {
                        setBoolean(!boolean)
                        change(boolean)
                    }}
                    paddingLeft="3em"
                    position="absolute"
                    right="0"
                    w="7em"
                    zIndex="100"
                >
                    <Center
                        bg="#93b2fa"
                        borderRadius="0.5em"
                        h="2em"
                        left="-30%"
                        position="absolute"
                        top="10%"
                        w="5em"
                    >
                        {boolean == true ? "手机登录" : "扫码登陆"}
                    </Center>
                    {boolean == true ? (
                        <MdPhoneIphone color="#7ba3ff" fontSize="4em" />
                    ) : (
                        <AiOutlineQrcode color="#7ba3ff" fontSize="4em" />
                    )}
                    <Box
                        border="40px solid transparent"
                        borderRightColor="#fff"
                        h="0"
                        left="7%"
                        position="absolute"
                        top="25%"
                        transform="rotate(-45deg)"
                        w="0"
                    ></Box>
                </Box>
                <Outlet />
            </Flex>
        </Center>
    )
}

export default Login
