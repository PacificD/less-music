/*
 * @Author: Pacific_D
 * @Date: 2022-07-30 09:44:21
 * @LastEditTime: 2022-07-30 09:44:23
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\hooks\useCtxValue.ts
 */
/*
 * @Author: Pacific_D
 * @Date: 2022-07-26 11:21:52
 * @LastEditTime: 2022-07-26 11:21:54
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \lessMusic\src\hooks\useCtxValue.ts
 */
import { ctx } from "@/pages/App"
import { useContext } from "react"

/**
 * @description: 获取全局content value的hook
 * @return {*}
 */
const useStateValue = () => useContext(ctx)

export default useStateValue
