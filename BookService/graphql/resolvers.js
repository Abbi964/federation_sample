import Book from "../model/book.js";
import BookReader from "../model/bookReader.js";
import Reader from "../model/Reader.js";

const resolvers = {
    Query : {
        // getting books-------------------------------
        async books(_,args){
            try{
                let books = await Book.findAll()

                return books
            }
            catch(err){
                console.log(err)
            }
        },
        //------- getting a book ------------------------
        async book (_,args){
            try {
                let book = await Book.findByPk(args.id)

                return book
            } catch (error) {
                console.log(error)
                return error
            }
        },
        //----------- getting readers ---------------------
        async readers(_,args){
            try {
                let readers = await Reader.findAll()

                return readers;
            } catch (error) {
                console.log(error)
                return error
            }
        },
        //----------- getting a reader ---------------------
        async reader(_,args){
            try {
                let reader = await Reader.findByPk(args.id)

                return reader;
            } catch (error) {
                console.log(error)
                return error
            }
        }
    },
    Mutation : {
        //----------- Adding a Book ------------------------
        async addBook(_,args){
            try {
                let bookObj = args.book;
                console.log("book obj ----------->",bookObj)
                let [book,created] = await Book.findOrCreate({
                    where : {name : bookObj.name },
                    defaults : {...bookObj,quantity : 1}
                })

                if(created){
                    return book
                }
                else{
                    book.quantity += 1
                    await book.save()
                    return book
                }
            } catch (error) {
                console.log(error)
                return error
            }
        },
        // deleting a book ----------------------------
        async deleteBook(_,args){
            try {
                let book = await Book.findByPk(args.id);
                await book.destroy();
                
                return "Book succefully deleted"
            } catch (error) {
                console.log(error)
                return error
            }
        },
        //----------- Adding a Reader ------------------------
        async addReader(_,args){
            try {
                let readerObj = args.reader
                let [reader,created] = await Reader.findOrCreate({
                    where : {email : readerObj.email },
                    defaults : readerObj
                })

                if(created){
                    return reader
                }
                else{
                    return "Reader with this email already exists"
                }
            } catch (error) {
                console.log(error)
                return error
            }
        },
        //------------ delete reader --------------------------
        async deleteReader(_,args){
            try {
                let reader = await Reader.findByPk(args.id)
                await reader.destroy();

                return "Reader succefully destroyed"
            } catch (error) {
                console.log(error)
                return error
            }
        },
        //-------------- Read Book--------------------------------
        async readBook(_,args){
            try {
                // checking book quantity
                let book = await Book.findByPk(args.bookId);

                if(book && book.quantity > 0){
                    // updating in BookReader
                    await BookReader.create({bookId : args.bookId, readerId : args.readerId})
                    return book
                }
                else if(book){
                    throw new Error("This Book is currently not in stock") 
                }
                else{
                    throw new Error("Book with this ID does not exists")
                }
            } catch (error) {
                console.log(error)
                return error
            }
        }
    },
    Book : {
        // getting readers of a book-----------------------
        async readers(parent,args){
            try {
                let book = await Book.findByPk(parent.id)
                let readers = await book.getReaders()

                return readers
            } catch (error) {
                console.log(error)
                return error
            }
        },
        // getting author of the book-------------------
        // async author(parent){
        //     try {
        //        let author = await Author.findOne({where : {}})
        //     } catch (error) {
        //         console.log(error);
        //         return error
        //     }
        // }

    },
    Reader : {
        //------ Getting books of reader------------------
        async books(parent,args){
            try {
                let reader = await Reader.findByPk(parent.id);

                let books = await reader.getBooks();
                return books;
            } catch (error) {
                console.log(error)
                return error
            }
        }
    }
}

export default resolvers;