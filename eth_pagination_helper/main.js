// Complete the PaginationHelper class - a utility class helpful for querying paging information related to an array.

// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
//
//     The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
//
//     The following are some examples of how this class is used:
//
//     var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid
//
// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

// TODO: complete this object/class

// let collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// let helper = new PaginationHelper(collection, 10);

// The constructor takes in an array of items and an integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (pageIndex < 0 || pageIndex > (this.pageCount() - 1)){
        return -1;
    }
    let pageArr = [];
    let n = this.pageCount();
    let colLen = this.itemCount();
    let itemsPerPage = this.itemsPerPage;
    for (let i = 0; i < n; i += 1) {
        pageArr.push( (colLen > itemsPerPage) ? itemsPerPage : colLen);
        colLen -= itemsPerPage;
    }
    return pageArr[pageIndex];
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex < 0 || itemIndex > (this.itemCount())){
        return -1;
    }
    let colLen = this.itemCount();
    if (colLen === 0){return - 1}
    let itemsPerPage = this.itemsPerPage;
    return itemIndex === 0 ? 0 : Math.floor(itemIndex / itemsPerPage);
};

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log("Item Count: " + helper.itemCount()); //should == 6
console.log("Page Count: " + helper.pageCount()); //should == 2
console.log("Page Item Count: " + helper.pageItemCount(0)); //should == 4
console.log("Page Item Count: " + helper.pageItemCount(1)); // last page - should == 2
console.log("Page Item Count: " + helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log("Page Index: " + helper.pageIndex(5));  //should == 1 (zero based index)
console.log("Page Index: " + helper.pageIndex(2)); //should == 0
console.log("Page Index: " + helper.pageIndex(20)); //should == -1
console.log("Page Index: " + helper.pageIndex(10)); //should == -1