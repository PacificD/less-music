/*
 * @Descripttion:
 */
import request from "@/services/request"
import { IRes, METHODS } from "@/types"
import {
    Button,
    Input,
    Text,
    InputGroup,
    Flex,
    HStack,
    PinInput,
    PinInputField,
    useToast
} from "@chakra-ui/react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const Password = () => {
    const accountInput = useRef<HTMLInputElement>(null)
    const passwordInput1 = useRef<HTMLInputElement>(null)
    const passwordInput2 = useRef<HTMLInputElement>(null)
    const passwordInput3 = useRef<HTMLInputElement>(null)
    const passwordInput4 = useRef<HTMLInputElement>(null)

    const arr: any = []
    // 获取input元素里的内容
    function getValue() {
        //输入的手机号
        const account: string = accountInput.current!.value.trim()
        //获取输入验证码的内容
        const password1: string = passwordInput1.current!.value.trim()
        const password2: string = passwordInput2.current!.value.trim()
        const password3: string = passwordInput3.current!.value.trim()
        const password4: string = passwordInput4.current!.value.trim()
        arr.push(account)
        arr.push(password1)
        arr.push(password2)
        arr.push(password3)
        arr.push(password4)
        return arr
    }

    //跳转到加载的页面
    const navigate = useNavigate()

    // 点击获取验证码(传入手机号)
    function getVerificationCode(phone: any) {
        request<IRes>("/captcha/sent", { phone }, METHODS.GET).then(res => res.data)
    }
    // 点击立即登录验证验证码是否正确(传入手机号和验证码)
    function verifyCode(phone: any, verifycode: any) {
        request<IRes>("/captcha/sent", { phone: phone, verifycode: verifycode }, METHODS.GET).then(
            function (res) {
                if (res.data.code != 200) {
                    toast({
                        title: "验证码错误了捏",
                        description: "刷新页面重新获取验证码捏",
                        variant: "subtle",
                        position: "top",
                        status: "success",
                        duration: 3000,
                        isClosable: true
                    })
                } else {
                    localStorage.setItem("cookie", res.data.cookie)
                    toast({
                        title: "手机验证码登录成功了捏",
                        description: "点击右上角图标可以重新登录哦~",
                        variant: "subtle",
                        position: "top",
                        status: "success",
                        duration: 3000,
                        isClosable: true
                    })
                    navigate("/")
                }
            }
        )
    }

    const toast = useToast()
    // 游客登录的点击事件
    function tourists() {
        request<IRes>("/register/anonimous", {}, METHODS.GET).then(function (res) {
            localStorage.setItem("cookie", res.data.cookie)
            navigate("/")
            toast({
                title: "以游客状态登录了捏",
                description: "点击右上角图标可以重新登录哦~",
                variant: "subtle",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            })
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
            <Flex justifyContent="space-between" marginTop="1em" w="20em">
                <HStack>
                    <PinInput type="alphanumeric">
                        <PinInputField ref={passwordInput1} />
                        <PinInputField ref={passwordInput2} />
                        <PinInputField ref={passwordInput3} />
                        <PinInputField ref={passwordInput4} />
                    </PinInput>
                </HStack>
                <Button
                    color="#7ba3ff"
                    onClick={() => getVerificationCode(getValue()[0])}
                    variant="outline"
                >
                    获取验证码
                </Button>
            </Flex>
            <Flex columnGap="4em" marginTop="3em">
                <Button
                    color="#7ba3ff"
                    onClick={() => {
                        verifyCode(
                            getValue()[0],
                            getValue()[1] + getValue()[2] + getValue()[3] + getValue()[4]
                        )
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
