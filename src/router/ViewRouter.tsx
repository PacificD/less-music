/*
 * @Author: Pacific_D
 * @Date: 2022-07-19 09:57:29
 * @LastEditTime: 2022-07-19 10:33:45
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\router\ViewRouter.tsx
 */

import { FC, Suspense } from "react"
import RouterConfig from "./config"

const ViewRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterConfig />
        </Suspense>
    )
}

export default ViewRouter
