"use client"

export function getEmailFromStorage(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userEmail")
  }
  return null
}

export function setEmailInStorage(email: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("userEmail", email)
  }
}

export function clearEmailFromStorage(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userEmail")
  }
}

export function getProfileNameFromEmail(email: string): string {
  return email.substring(0, 5).toUpperCase()
}
