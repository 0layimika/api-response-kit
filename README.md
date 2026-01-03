# api-response-kit

> A small, TypeScript-first toolkit for **consistent API success and error responses**.

---

## Why This Exists

Most APIs suffer from the same problems:

- Inconsistent response shapes across endpoints
- Ad-hoc error handling (`throw new Error`, random JSON)
- Frontend has to guess response structures
- Documentation drifts away from reality
- Boilerplate `res.status().json()` everywhere

**api-response-kit** fixes this by enforcing a **predictable response contract** for **both success and error responses** while keeping your code clean and framework-agnostic.

---

## Core Idea

Instead of:

```ts
res.status(200).json(user)
res.status(400).json({ error: "Invalid input" })
```

You write:
```ts
return Ok(user)
return BadRequest("Invalid input")
```
## Response Contract
### Success Response
```ts
type ApiSuccess<T> = {
  success: true
  data: T
  message?: string
  meta?: Record<string, unknown>
}
```
### Error Response
```ts
type ApiError = {
  success: false
  error: {
    code: string
    message: string
    details?: unknown
  }
}
```
## Installation
```bash
npm install api-response-kit

yarn add api-response-kit

pnpm add api-response-kit
```
## Basic Usage
### Success Helpers
```ts
import { Ok, Created, NoContent } from "api-response-kit"

return Ok(user)
return Created(newUser)
return NoContent()
```
### Error Helpers
```ts
import { BadRequest, NotFound, Unauthorized } from "api-response-kit"

if (!user) return NotFound("User not found")
if (!email) return BadRequest("Email is required")
if (!token) return Unauthorized()
```

## Controller Example
```ts
export function getUser(id: string) {
  const user = findUser(id)

  if (!user) {
    return NotFound("User")
  }

  return Ok(user)
}
```

## Express Adapter Example
```ts
import { sendResponse } from "api-response-kit/express"

app.get("/users/:id", (req, res) => {
  const response = getUser(req.params.id)
  sendResponse(res, response)
})
```
## Custom Errors
```ts
import { CustomError } from "api-response-kit"

return CustomError({
  code: "PAYMENT_FAILED",
  status: 402,
  message: "Payment authorization failed"
})
```

