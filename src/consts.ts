export const TASK_FILTER= {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export const FOOTER_FILTERS_BUTTONS={
    [TASK_FILTER.ALL]: {
        literal: 'All',
        href: `/?filter=${TASK_FILTER.ALL}`
    },
    [TASK_FILTER.ACTIVE]: {
        literal: 'Active',
        href: `/?filter=${TASK_FILTER.ACTIVE}`
    },
    [TASK_FILTER.COMPLETED]: {
        literal: 'Completed',
        href: `/?filter=${TASK_FILTER.COMPLETED}`
    }
} as const