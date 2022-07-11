export const findNextPorn = (devCommand: string) => {
  const portArr = /--port ([0-9]{1,4})/.exec(devCommand)
  const port = portArr?.[portArr.length - 1]
  return port
}
