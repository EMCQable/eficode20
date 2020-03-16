const hoursMinutes = (unixtime) => {
  let time = new Date(unixtime)
  let hoursMinutes = `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`
  return hoursMinutes
}

export default {hoursMinutes}