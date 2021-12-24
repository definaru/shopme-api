import { User } from './user.model'

export const users: User[] = [
    new User(
        'Rosalinde', 
        'Wiens', 
        'https://randomuser.me/api/portraits/women/37.jpg', 
        'rosalinde.wiens@example.com', 
        '+1 0899-7357246', 
        1
    ),
    new User(
        'Max', 
        'Jimenez', 
        'https://randomuser.me/api/portraits/men/63.jpg', 
        'max.jimenez@example.com', 
        '+1 0733-141-664', 
        2
    ),
    new User(
        'Genesis', 
        'Gregory', 
        '"https://randomuser.me/api/portraits/women/73.jpg', 
        'genesis.gregory@example.com', 
        '+1 02-7492-6568', 
        3
    )
]