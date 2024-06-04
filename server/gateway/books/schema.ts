import getBooksResolver from "./resolver/bookListResolver"
import ReponseType from "./types/ResponseType"

export const bookQuery = {
    getbooksList: {
        type: ReponseType,
        resolve: getBooksResolver
    } 
}
    