// немного упоролся и написал ДКА для управления состояниями фильтров, чтоб ифами не мусорить
export default class FilterController {
    constructor(filters) {
        this.build(filters)
    }

    build(filters) {}

    static toggle(items, item, only) {
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

        if (only) {
            return items.map(
                it =>
                    it.value === item.value
                        ? {
                              ...it,
                              checked: true,
                          }
                        : {
                              ...it,
                              checked: false,
                          },
            )
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
