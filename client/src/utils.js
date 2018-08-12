export const getCompanyLogo = (carrier, width = 120, height = 50) =>
    `http://pics.avs.io/${width}/${height}/${carrier}.png`

export const getTickets = () =>
    fetch('http://localhost:5000/api/tickets')
        .then(res => res.json())
        .then(res => res.tickets)

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
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return `${stopsCount} пересадок`
        case 1:
            return `${stopsCount} пересадка`
        case 2:
        case 3:
        case 4:
            return `${stopsCount} пересадки`
    }
}

export function formatNumber(number, sectionLength = 3, delimiter = ' ') {
    const str = number.toString()
    const strLength = str.length

    let position = strLength % 3
    let res = [str.substr(0, position)]
    while (position < strLength) {
        res.push(str.substr(position, 3))
        position += 3
    }

    return res.join(delimiter)
}
