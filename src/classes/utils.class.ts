export class Utils {
  static readonly breakpoint = 'lg'

  static async arrayBuffer (file: File): Promise<ArrayBuffer> {
    if (File.prototype.arrayBuffer !== undefined) {
      return file.arrayBuffer()
    } else {
      return new Promise((resolve) => {
        const fileReader = new FileReader()

        fileReader.onload = function () {
          resolve(fileReader.result as ArrayBuffer)
        }

        fileReader.readAsArrayBuffer(file)
      })
    }
  }

  static formatSize (size: number) {
    const units = ['o', 'ko', 'Mo', 'Go']
    let i = 0
    let unit = units[0]

    while (size > 1024 && units[i + 1]) {
      i++
      size /= 1024
      unit = units[i]
    }

    return `${(size).toFixed(1)} ${unit}`
  }

  static formatTime (time: number) {
    const minutes = Math.trunc(time / 60)
    const seconds = Math.trunc(time - 60 * minutes)

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
}
