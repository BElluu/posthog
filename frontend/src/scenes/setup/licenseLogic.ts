import api from 'lib/api'
import { kea } from 'kea'

export const licenseLogic = kea({
    loaders: {
        licenses: [
            [],
            {
                loadEvents: async () => {
                    return (await api.get('api/license')).results
                },
            },
        ],
    },
    events: ({ actions }) => ({
        afterMount: () => {
            actions.loadEvents()
        },
    }),
})
