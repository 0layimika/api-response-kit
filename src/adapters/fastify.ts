import {FastifyReply} from "fastify"
import { ApiResponse } from "../core/response"
import { statusMap } from "../core/status-map"

export function sendResponse(reply: FastifyReply, response: ApiResponse<unknown>): void {
    let status = 200

    if (!response.success) {
        const errorCode = response.error.code
        status = statusMap[errorCode] || 500
    }

    reply.status(status).send(response)
}
