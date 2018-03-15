var songs= [  
    'Get Outta My Dreams, Get Into My Code - Billy Ocean',
    'Another Code Bites the Dust – Queen',
    'Wake Me Up Before You Code-Code - WHAM!',
    'Funky Code Medina - Tone Loc',
    'Goodbye Yellow Brick Code - Elton John',
    'I Can Code Clearly Now - Johnny Nash',
    'That\'s the Way I Code It - KC & the Sunshine Band',
    'The Long and Winding Code - The Beatles',
    'Hey! Ho! Let\'s Code! - Ramones',
    'Hit The Code Jack  - Ray Charles',
    '(What’s So Funny ’\Bout) Peace, Love & Coding - Elvis Costello',
    'Should I Stay or Should I Code - The Clash',
    'Sweet Code O\’ Mine - Guns-N-Roses',
    'You Can\'t Always Code What You Want -The Rolling Stones', 
    'Hey, You, Get Off My Code -The Rolling Stones',
]

function newSong() {
    var randomNumber = Math.floor(Math.random() * (songs.length));
    document.getElementById('songs').innerHTML = songs[randomNumber];
}
