import numeral from 'numeral'

export const getCompanyLogo = (carrier, width = 120, height = 50) =>
    `http://pics.avs.io/${width}/${height}/${carrier}.png`

export const getTickets = () =>
    fetch('http://localhost:5000/api/tickets')
        .then(res => res.json())
        .then(res => res.tickets)

export const getCourse = cache((from, to) =>
    fetch(`https://exchangeratesapi.io/api/latest?base=${from}&symbols=${to}`)
        .then(res => res.json())
        .then(res => res.rates[to]))

function cache(func) {
    let cache = {}

    return (...args) => {
        if (!cache[args]) {
            cache[args] = func(...args)
        }

        return cache[args]
    }
}

export const currency = {
    rub: 'RUB',
    usd: 'USD',
    eur: 'EUR',
}

export function getStopsCountName(stopsCount) {
    if (stopsCount === 0) {
        return 'Без пересадок'
    }

    const lastTwoNumbers = stopsCount % 10
    if (lastTwoNumbers > 10 && lastTwoNumbers < 20) {
        return `${stopsCount} пересадок`
    }

    const last = stopsCount % 10
    switch (last) {
        case 1:
            return `${stopsCount} пересадка`
        case 2:
        case 3:
        case 4:
            return `${stopsCount} пересадки`
        default:
            return `${stopsCount} пересадок`
    }
}

export function formatNumber(number, sectionLength = 3, delimiter = ' ') {
    return numeral(number).format('0,0.[00]').replace(',', ' ')
}

export function formatTime(time) {
    const splitted = time.split(':')
    let hour = splitted[0]
    hour = hour.length < 2 ? '0' + hour : hour
    let minute = splitted[1]
    minute = minute.length < 2 ? '0' + minute : minute

    return hour + ':' + minute
}
