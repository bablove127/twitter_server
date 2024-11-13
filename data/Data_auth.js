let users = [
    {
        id:'1',
        username:'apple',
        password:'$2b$10$F5b.g.nA83ScjKyVR6z6XOVwhl1pM29buHUIB6Gq6O8PXR/bsUV.e',
        name:'김사과',
        email:'apple@apple.com',
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    },
    {
        id:'2',
        username:'banana',
        password:'$2b$10$CydLlfeQINnexmrb61X3AuLclK5Mqd2z/InPRGA5q5ljr4UEH7MQK',
        name:'반하나',
        email:'banana@banana.com',
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    },
    {
        id:'3',
        username:'orange',
        password:'$2b$10$N7b77rohXIYiUUWLJJa0P.WUBGBgVjg0HirKkgum/Mr9dOCRvAEoG',
        name:'오렌지',
        email:'orange@orange.com',
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    }
]

export async function createUser(username, password, name, email){
    const user = {
        id:'4',
        username:username,
        password:password,
        name:name,
        email:email,
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    }
    users = [user, ...users]
    return user
}

export async function findByUsername(username){
    const user = users.find((user) => user.username === username)
    return user
}