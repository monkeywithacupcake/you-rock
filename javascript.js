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
    'You Can\'t Always Code What You Want - The Rolling Stones',
    'Hey, You, Get Off My Code - The Rolling Stones',
    'All The Code Things - Blink-182',
    'Code Like That - 3 Doors Down',
    'Best Of Code - Foo Fighters',
    'Another Block In The Code - Pink Floyd',
    'Here I Code Again - Whitesnake',
    'Sultans Of Code - Dire Straits',
    'Coding On A Prayer - Bon Jovi',
    'House Of The Rising Code - The Animals',
    'Should I Stay Or Should I Code - The Clash',
    'I Wanna Code - Twisted Sisters',
    'God Save The Code - The Sex Pistols',
    'I Wanna Code - Twisted Sisters',
    'Bark At The Code - Ozzy Osbourne',
    'Running on Empty - Jackson Browne',
    'I Will Code - Gloria Gaynor',
    'Code Like Heaven - The Cure',
    'Super Code - Rick James',
    'I Want to Know What Code Is - Foreigner',
    'Code As You Are - Nirvana'
]

function newSong() {
    var randomNumber = Math.floor(Math.random() * (songs.length));
    document.getElementById('songs').innerHTML = songs[randomNumber];
}
