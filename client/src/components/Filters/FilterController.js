export default class FilterController {
    static toggle(items, item) {
        if (item.value === 'all') {
            if (items.filter(item => item.value === 'all')[0].checked) {
                return items.map(it => ({
                    ...it,
                    checked: false,
                }))
            }

            return items.map(it => ({
                ...it,
                checked: true,
            }))
        }

        const newItems = items.map(
            it =>
                it.value === item.value
                    ? {
                          ...it,
                          checked: !it.checked,
                      }
                    : it,
        )

        if (newItems.filter(it => it.value !== 'all').every(it => it.checked)) {
            return newItems.map(
                it =>
                    it.value === 'all'
                        ? {
                              ...it,
                              checked: true,
                          }
                        : it,
            )
        }

        if (newItems.filter(it => it.value !== 'all').some(it => !it.checked)) {
            return newItems.map(
                it =>
                    it.value === 'all'
                        ? {
                              ...it,
                              checked: false,
                          }
                        : it,
            )
        }
    }
}
