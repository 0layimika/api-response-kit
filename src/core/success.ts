import {ApiSuccess} from "./response";

export function Ok<T>(data: T, message?: string, meta?: Record<string, unknown>): ApiSuccess<T>{
    return {success:true, data, message, meta}
}

export function Created<T>(data: T, message?: string, meta?: Record<string, unknown>): ApiSuccess<T> {
    return { success: true, data, message, meta }
}

export function NoContent(message?: string): ApiSuccess<null> {
    return { success: true, data: null, message }
}

export function CustomSuccess<T>(
    data: T,
    message?: string,
    meta?: Record<string, unknown>
): ApiSuccess<T> {
    return { success: true, data, message, meta }
}