export function timeFormatter(timeInMilliseconds){
    let time = new Date(timeInMilliseconds)
    let minutes = time.getMinutes().toString()
    let seconds = time.getSeconds().toString()
    let milliseconds = time.getMilliseconds().toString()

    if (minutes.length < 2) {
      minutes = '0' + minutes
    }

    if (seconds.length < 2 ){
      seconds = '0' + seconds
    }

    while (milliseconds.length < 3){
      milliseconds = '0' + milliseconds
    }

    return minutes + ' : ' + seconds

  }
