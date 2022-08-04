/*
 * @Author: Pacific_D
 * @Date: 2022-07-25 20:58:33
 * @LastEditTime: 2022-08-03 20:51:55
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\MV\index.tsx
 */
import { useMVDetailQuery } from "@/services"
import { MVDetail, Resolution } from "@/types"
import { Flex } from "@chakra-ui/react"
import { FC, useEffect, useMemo, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import Player from "xgplayer"
import config from "./mvPlayerDefaultConfig"

const MV: FC = () => {
    const { id } = useParams(),
        [radioWithUrl, setRadioWithUrl] = useState<Array<[number, string]>>([])

    const { data: mvDetail, isLoading } = useMVDetailQuery(+id!),
        [, renderer] = useState(0)

    const MVPlayer = useRef<Player | null>(null)

    useEffect(() => {
        if (mvDetail && !isLoading) {
            setRadioWithUrl((mvDetail as MVDetail).urls)
        }
    }, [mvDetail, isLoading])

    useEffect(() => {
        if (radioWithUrl.length !== 0 && MVPlayer.current === null) {
            //console.log(radioWithUrl)
            MVPlayer.current = new Player({
                id: "MVPlayer",
                url: radioWithUrl[radioWithUrl.length - 1][1],
                poster: (mvDetail as MVDetail).data.cover,
                ...config
            })
            MVPlayer.current?.emit(
                "resourceReady",
                radioWithUrl.map(r => {
                    return {
                        name: r[0] + "p",
                        url: r[1]
                    }
                })
            )
            renderer(Math.random())
        }
    }, [MVPlayer, radioWithUrl, mvDetail, id])

    return (
        <Flex alignItems="center" justifyContent="center" mt="4">
            <div id="MVPlayer"></div>
        </Flex>
    )
}

export default MV
