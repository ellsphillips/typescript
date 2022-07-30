export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(", ")}!`
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}
