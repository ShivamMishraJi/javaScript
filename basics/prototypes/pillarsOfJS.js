class BookShelf{
    constructor(){
        this.favBooks = [];
    }

    addFavBook(bookName){
        if(!bookName.includes("Great")){
            this.favBooks.push(bookName);
        }
    }

    printFavBooks(){
        //no need to use String, coz .length gives number and numbers can be implicitly converted to strings
        //but as a good practice we are wrapping it with String()
        console.log(`Favorite Books: ${String(this.favBooks.length)}`);
    
        for(let bookName of this.favBooks){
            console.log(bookName);
        }
    }

}

function loadBooks(theBookShelf){
    //call fakeAjax(...)
    fakeAjax(BOOK_API,function onBooks(bookNames){

    });
}

var BOOK_API = "https://some.url/api";

//cb --> callback Method
function fakeAjax(url,cb){
    setTimeout(function fakeLoadingDisplay(){
        cb([
            "A song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't know JS"
        ]);
    },500);

}