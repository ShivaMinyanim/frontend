import Minyan from '@/models/Minyan'

export default class MinyanService {
    /**
     * Get today's minyanim from the Api.
     *
     * @return {Promise<Minyan[]>}
     */
    static getTodaysMinyanim () {
        return Promise.resolve([
            new Minyan({
                type: 'Shacharis',
                house: {
                    street: '123 Main St.',
                    city: 'Teaneck',
                    state: 'NJ',
                    zip: '07666'
                },
                timestamp: '2016-12-27 07:30:00'
            })
        ])
    }
}
