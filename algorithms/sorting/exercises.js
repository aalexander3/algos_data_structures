//#1 - Sort 10 schools around your house by distance:
// small input size - would be fast w/ insertion sort

//#2 - eBay sorts listings by the current Bid amount:
// large input size
// probably don't care too much about the space
// quick sort
// radix or counting - bids are usually integers

//#3 - Sport scores on ESPN
// are these by sport?
// quick sort? / insertion sort if the input size isn't too large


//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// needs something without a big space allocation
// merge sort
// worried about performance

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// almost sorted
// insertion sort

//#6 - Temperature Records for the past 50 years in Canada
// big input size
// quick sort - big data size
// radix or counting - if integers in a small range

//#7 - Large user name database needs to be sorted. Data is very random.
// lots of data
// if worried about space - merge sort
// if not - quick sort and not worried about the worst case

//#8 - You want to teach sorting for the first time
// selection sort and bubble sort
