/*
 * @Author: Giaruei
 * @Date: 2022-07-29 11:47:23
 * @LastEditTime: 2022-07-29 20:12:28
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\Comments\index.tsx
 */
import { FC } from "react"
import { Box } from "@chakra-ui/react"
import GetComments from "./GetComments"

interface IProps {
    comment: any
    detailIsLoading?: boolean
}
const Comments: FC<IProps> = ({ comment, detailIsLoading }) => {
    const hotComments = comment.hotComments as any[]
    const newComments = comment.comments as any[]
    return (
        <Box w="100%">
            {detailIsLoading ? (
                <Box color="blue.400" fontSize="2xl" fontWeight="bold">
                    Loading ...
                </Box>
            ) : hotComments.length === 0 && newComments.length === 0 ? (
                <Box>还没有评论，快来抢沙发~</Box>
            ) : (
                <Box px="15px" w="80%">
                    <Box fontSize="2xl" fontWeight="bold" my="10px">
                        热门评论
                    </Box>
                    <GetComments comments={hotComments} />
                    <Box fontSize="2xl" fontWeight="bold" my="10px">
                        最新评论
                    </Box>
                    <GetComments comments={newComments} />
                </Box>
            )}
        </Box>
    )
}
export default Comments
