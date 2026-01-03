import {Response as ExResponse} from "express"
import {ApiResponse} from "../core/response";
import {statusMap} from "../core/status-map";

export function sendResponse(res: ExResponse, response: ApiResponse<unknown>): void {
    let status = 200
    if (response.success) {
        status = 200
    } else {
        const errorCode = response.error.code
        status = statusMap[errorCode] || 500
    }
    res.status(status).json(response)
}