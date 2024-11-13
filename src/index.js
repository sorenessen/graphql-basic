import { GraphQLServer } from 'graphql-yoga'

// Type definition (schema)
const  typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`
// Resolvers
const resolvers = {
    Query: {
        id() {
            return 'abc123'
        },
        name() {
            return 'Soren'
        },
        age(){
            return 27
        },
        employed() {
            return true
        },
        gpa() {
            return 3.01
        },
        title() {
            return 'The Joy Luck Club'
        },
        price() {
            return 25.00
        },
        releaseYear() {
            return 1977
        },
        rating() {
            return null
        },
        inStock() {
            return true
        }

        
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() =>{
    console.log('The server is up!')
})










// import myCurrentLocation, { getGreeting, message, name} from './myModule'
// import myAddFunction, {subtract} from './math.js'
// console.log(myAddFunction(1, -2))
// console.log(subtract(10, 2))
// console.log(message)
// console.log(name)
// console.log(myCurren tLocation)
// console.log(getGreeting('Jessica'))