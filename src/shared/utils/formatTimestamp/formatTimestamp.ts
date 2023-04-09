export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp)
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const weekday = weekdays[date.getUTCDay()]
  const month = months[date.getUTCMonth()]
  const day = date.getUTCDate().toString().padStart(2, '0')
  const year = date.getUTCFullYear()
  // const hours = date.getUTCHours().toString().padStart(2, '0')
  // const minutes = date.getUTCMinutes().toString().padStart(2, '0')

  return `${weekday}, ${month}. ${day} ${year}`
}
