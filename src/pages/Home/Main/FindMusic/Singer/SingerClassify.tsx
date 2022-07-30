/*
 * @Author: DZR
 * @Date: 2022-07-28 16:37:11
 * @LastEditTime: 2022-07-29 20:04:57
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerClassify.tsx
 */
import { Box, Flex, Text } from "@chakra-ui/react"

const SingerClassify = () => {
    let alphabet = [] //生成26个大写字母和#
    for (let i = 65; i < 91; i++) {
        alphabet.push(String.fromCharCode(i))
    }
    alphabet.push("#")

    return (
        <Box h="130px" margin="auto" w="70%">
            <Flex mt="15px">
                <Text fontSize="xs">语种:</Text>
                <button className="singerAll">全部</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">华语</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">欧美</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">日本</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">韩国</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">其他</button>
            </Flex>
            <Flex mt="10px">
                <Text fontSize="xs">分类:</Text>
                <button className="singerAll">全部</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">男歌手</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">女歌手</button>
                <span className="transparentLine"></span>
                <button className="singerClassify">乐队组合</button>
            </Flex>
            <Flex mt="10px" wrap="wrap">
                <Text fontSize="xs">筛选:</Text>
                <button className="singerAll">热门</button>
                <span className="transparentLine"></span>
                {alphabet.map((item, index) => {
                    return (
                        <Flex key={index + 10}>
                            <button
                                className={item === "P" ? "singerP" : "singerAlphabet"}
                                key={index + 20}
                            >
                                {item}
                            </button>
                            <span className="transparentLine" key={index + 30}></span>
                        </Flex>
                    )
                })}
            </Flex>
        </Box>
    )
}

export default SingerClassify
