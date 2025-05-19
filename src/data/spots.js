const totalSpots = [5, 12, 9];
const section = ['A', 'B', 'C']
const result = [
    {
        idSpot: '80',
        idParking: '1',
        section: 'C',
        index: '1'
    },
    {
        idSpot: '81',
        idParking: '1',
        section: 'C',
        index: '2'
    },
    {
        idSpot: '82',
        idParking: '2',
        section: 'A',
        index: '1'
    }
]

export const spot1 = Array.from({length: totalSpots[0]}).map((_, index) => `${section[0]}${index + 1}`)
export const spot2 = Array.from({length: totalSpots[1]}).map((_, index) => `${section[1]}${index + 1}`)
export const spot3 = Array.from({length: totalSpots[2]}).map((_, index) => `${section[2]}${index + 1}`)