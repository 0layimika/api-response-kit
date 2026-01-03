import { ApiError } from "./response"

export function BadRequest(message: string, details?: unknown): ApiError {
    return { success: false, error: { code: "BAD_REQUEST", message, details } }
}

export function Unauthorized(message = "Unauthorized"): ApiError {
    return { success: false, error: { code: "UNAUTHORIZED", message } }
}

export function Forbidden(message = "Forbidden"): ApiError {
    return { success: false, error: { code: "FORBIDDEN", message } }
}

export function NotFound(resource = "Resource"): ApiError {
    return { success: false, error: { code: "NOT_FOUND", message: `${resource} not found` } }
}

export function Conflict(message: string): ApiError {
    return { success: false, error: { code: "CONFLICT", message } }
}

export function InternalError(message = "Internal server error", details?: unknown): ApiError {
    return { success: false, error: { code: "INTERNAL_ERROR", message, details } }
}

interface CustomErrorParams {
    code: string
    message: string
    details?: unknown
}
export function CustomError({ code, message, details }: CustomErrorParams): ApiError {
    return {
        success: false,
        error: {
            code,
            message,
            details,
        },
    }
}
