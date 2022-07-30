/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-29 09:34:16
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-30 09:21:46
 * @FilePath: \3\less-music\src\pages\Home\Main\FindMusic\NewMusic\test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { LoadingTwo } from "@/components"
import { background, Box } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

/**
 * 拥有懒加载特性的图片组件
 * @param {String} props.src 图片地址
 * @param {String} props.className 样式类
 */
type Props = {
    src: string
    className?: string
    alt?: string
}
const Images = ({ src, className, alt }: Props) => {
    // 封装Image懒加载图片组件
    const [upload, setUpload] = useState(true) // 加载中的变量等加载完后变成false
    const [lose, setLose] = useState(true) // 加载失败的变量

    // 对图片元素的引用
    const imgRef = useRef<HTMLImageElement>(null)
    useEffect(() => {
        // 副作用
        const ob = new IntersectionObserver(
            entries => {
                // 实例化IntersectionObserver
                if (entries[0].isIntersecting) {
                    imgRef.current!.src = imgRef.current!.getAttribute("data-src")!
                    ob.unobserve(imgRef.current!) // 观察者停止对dom的观察
                }
            },
            { rootMargin: "200px" }
        ) // 让图片提前100px加载
        ob.observe(imgRef.current!) // 观察者观察dom
        return () => {
            ob.disconnect() // 停止观察者
        } // 当组件销毁时停止观察者
    }, [])
    return (
        <div className={className}>
            {/* 正在加载时显示的内容 */}
            {upload && (
                <Box position="absolute" zIndex="102">
                    <LoadingTwo />
                </Box>
            )}
            {/* 加载出错时显示的内容 */}
            {!lose && <div>出错了...</div>}
            {/* 加载成功时显示的内容 */}
            {
                <img
                    alt={alt}
                    data-src={src}
                    onError={() => setLose(false)} // 图片获取失败执行
                    onLoad={() => {
                        setUpload(false)
                    }} // 图片加载完执行
                    ref={imgRef}
                />
            }
        </div>
    )
}

export default Images
