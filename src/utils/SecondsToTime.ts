export function SecondsToTime(seconds : number) : string{
    const zeroLeft = (n : number) => Math.floor(n).toString().padStart(2 , '0')
    const inMinutes = zeroLeft((seconds / 60) % 60)
    const inSeconds = zeroLeft((seconds % 60) % 60)
    return `${inMinutes}:${inSeconds}`
}