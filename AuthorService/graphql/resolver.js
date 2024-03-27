import Author from '../model/Author.js'

const resolvers = {
    Query : {
        //------------ Getting Authors ---------------
        async authors(_,args) {
            try{
                let authors = await Author.findAll();

                return authors;
            }
            catch(err){
                console.log(err)
                return err
            }
        },
        //--------------- Getting One Author--------------
        async author(_,args){
            try{
                let author = await Author.findByPk(args.id);

                return author;
            }
            catch(err){
                console.log(err);
                return err
            }
        }
    },
    Mutation : {
        //-------------- Creating an Author---------------
        async addAuthor(_,args){
            let authorObj = args.author
            try{
                const [author,created] = await Author.findOrCreate({
                    where : {email : authorObj.email},
                    defaults : authorObj
                })

                if (created){
                    return author
                }
                else{
                    return {
                        ...author,
                        msg : "Author with this email already exists"
                    }
                }
            }
            catch(err){
                console.log(err);
                return err
            }
        },
        //------------ Deleting an Author ----------------------
        async deleteAuthor(_,args){
            try{
                let author = await Author.findByPk(args.id);
                await author.destroy();

                return `Author with id ${args.id} is deleted` 

            }
            catch(err){
                console.log(err);
                return err
            }
        }
    },
    Author: {
        __resolveReference(author, { Author }) {
          return Author.findByPk(author.id);
        }
    },
    Book : {
        // getting author of the book-----------------------------
        async author(parent){
            try {
                console.log(parent)
                let author = await Author.findByPk(parent.authorId) 
                return author
            } catch (error) {
                console.log(error);
                return error
            }
        }
    }
}

export default resolvers;