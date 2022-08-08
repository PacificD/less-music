/*
 * @Author: DZR
 * @Date: 2022-08-08 10:03:16
 * @LastEditTime: 2022-08-08 10:04:51
 * @LastEditors: DZR
 * @Description: 格式化歌词字符串
 * @FilePath: \less-music\src\utils\formatLyric.ts
 */

const formatTimeToNumber = (timeString: string) => {
    let time = 0
    if (timeString) {
        const splitArr = timeString.split(":").map(item => Number(item))

        return splitArr[0] * 60 + splitArr[1]
    }

    return time
}

const formatLyric = (lyric: string) => {
    const lyricParts = lyric.split("\n").filter(item => item)

    return lyricParts.map(item => {
        const splitItems = item.split("]")

        const lyricItem = {
            time: formatTimeToNumber(splitItems[0].slice(1)),

            text: splitItems[1]
        }

        return lyricItem
    })
}
export default formatLyric
