const chats = {
    Diego: [
        'lamaw',
        'inihaw'
    ],
    Kamote: [
        'kamote',
        'karyoka'
    ],
    Kamatis: [
        'kamatis',
        'ketchup'
    ],
    Kambing: [
        'kambing',
        'kaldereta'
    ],
    Kambal: [
        'kambal',
        'kambal'
    ]
}

export const fetchChat = (name) => {
    return chats[name];
} 