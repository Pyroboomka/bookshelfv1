//A sample books library
const initialState = {
        Bookshelf : {
            books: [
                    {
                        id: 1,
                        title: 'Harry Potter and the Philosopher\'s stone',
                        author: 'J.K. Rowling',
                        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg', 
                        description: 'YOU RE A WIZARD HARRY', 
                        dateAdded: '24.01.2009', 
                        isEditable: false},
                    {
                        id: 2,
                        title: 'The Stand',
                        author: 'Stephen King',
                        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/The_Stand_cover.jpg/220px-The_Stand_cover.jpg', 
                        description: 'Let\' survive the apocalypse together!', 
                        dateAdded: '01.09.1978', 
                        isEditable: false
                    },
                    {
                        id: 3,
                        title: 'One Flew Over the Cuckoo\'s Nest',
                        author: 'Ken Kesey',
                        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b9/One_Flew_Over_the_Cuckoo%27s_Nest.jpeg/200px-One_Flew_Over_the_Cuckoo%27s_Nest.jpeg', 
                        description: 'A lifetime in a psychiatry ward', 
                        dateAdded: '01.01.1969', 
                        isEditable: false
                    }
            ],
            filter: {
                type: 'SHOW_ALL',
                content: ''
            }
        }

}

export default initialState