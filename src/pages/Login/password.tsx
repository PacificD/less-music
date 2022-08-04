/*
 * @Descripttion:
 */
import { usePhoneLoginQuery } from "@/services"
import request from "@/services/request"
import { IRes, METHODS } from "@/types"
import { Button, Input, Text, InputGroup, InputRightElement, Flex } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Password = () => {
    // 这里制作显示密码跟隐藏密码
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const accountInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)

    const arr: any = []
    // 获取input元素里的内容
    function getValue() {
        //邮箱的账号
        const account: string = accountInput.current!.value.trim()
        //输入的密码
        const password: string = passwordInput.current!.value.trim()
        arr.push(account)
        arr.push(password)
        return arr
    }

    //跳转到加载的页面
    const navigate = useNavigate()

    // 点击手机号密码登录
    function passwordLogin(array: any) {
        request<IRes>(
            "/login/cellphone",
            {
                phone: array[0],
                password: array[1]
            },
            METHODS.GET
        ).then(function (res) {
            sessionStorage.setItem("userCookie", res.data.cookie)
            navigate("/")
        })
    }

    // 游客登录的点击事件
    function tourists() {
        request<IRes>("/register/anonimous", {}, METHODS.GET).then(function (res) {
            sessionStorage.setItem("touristsCookie", res.data.cookie)
            navigate("/")
        })
    }

    return (
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
            <Text color="#7ba3ff" fontSize="1.5em" fontWeight="700" marginTop="3em">
                手机号密码登录
            </Text>
            <InputGroup marginTop="1em" w="20em">
                <Input placeholder="Please enter your phone number" ref={accountInput} />
            </InputGroup>

            <InputGroup marginTop="1em" w="20em">
                <Input
                    placeholder="Enter your password"
                    pr="4.5rem"
                    ref={passwordInput}
                    type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" onClick={handleClick} size="sm">
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Flex columnGap="4em" marginTop="3em">
                <Button
                    color="#7ba3ff"
                    onClick={() => {
                        console.log(getValue())
                        passwordLogin(getValue())
                    }}
                    variant="outline"
                >
                    点击登录
                </Button>
                <Button color="#7ba3ff" onClick={() => tourists()} variant="outline">
                    游客登录
                </Button>
            </Flex>
        </Flex>
    )
}
