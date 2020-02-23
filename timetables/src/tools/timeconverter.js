const convert = (unixtime) => {
  var time = new Date(unixtime)
  var usefulTime = `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`
  return usefulTime
}

export default {convert}