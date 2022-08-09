/*
 * @Author: Pacific_D
 * @Date: 2022-07-22 21:02:12
 * @LastEditTime: 2022-08-09 09:22:46
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\utils\iterateObject.util.ts
 */
type ObjectType = {
    [key: string]: any
}

// eslint-disable-next-line @typescript-eslint/ban-types
const iterateObject = (obj: ObjectType, fn: Function) => {
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj)
        }
    }
}

export default iterateObject
