type DBPriceType = {
    id: number
    title: string
    description: string
    price: string | number
}

export const DBPrice: DBPriceType[] = [
    {
        id: 1,
        title: 'Эвакуация мотоцикла',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consequuntur earum et eum explicabo fugit,\n' +
            '                incidunt laudantium libero minus necessitatibus officia quos reiciendis sapiente similique sit vel\n' +
            '                vitae. Similique, suscipit.',
        price: 100
    },
    {
        id: 2,
        title: 'Перевозка грузов',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consequuntur earum et eum explicabo fugit,\n' +
            '                incidunt laudantium libero minus necessitatibus officia quos reiciendis sapiente similique sit vel\n' +
            '                vitae. Similique, suscipit.',
        price: 100
    },
    {
        id: 3,
        title: 'Эвакуация автомобилей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consequuntur earum et eum explicabo fugit,\n' +
            '                incidunt laudantium libero minus necessitatibus officia quos reiciendis sapiente similique sit vel\n' +
            '                vitae. Similique, suscipit.',
        price: 100
    },
    {
        id: 4,
        title: 'Помощь на дороге',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consequuntur earum et eum explicabo fugit,\n' +
            '                incidunt laudantium libero minus necessitatibus officia quos reiciendis sapiente similique sit vel\n' +
            '                vitae. Similique, suscipit.',
        price: 'Дог-ная'
    }
]