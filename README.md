## backend-challenge

`Clone  project`
~~~
 $ git clone https://github.com/Cybernic01/backend-challenge.git
 ~~~

`Prerequisite`
-mongodb <br/>
-npm,nodejs<br/>

`How to run project` <br/>
1.install Dependency
~~~
$ cd backend-challenge/
$ npm install
~~~


2. start mongodb
~~~
$ sudo service mongod start
~~~

3. start API 
~~~
$ node server.js
~~~

## Test project at this endpoint

`For Create New Book use post http://localhost:3000/addbook` <br/>
require paramiter <br/>
    {
	"Title":"",
	"Synopsis": "",
        "ISBN10": "",
        "ISBN30": "",
        "Language": "",
        "Publisher": "",
        "Price": "",
        "Review": "",   
        "CurrentAmout": 
    } 
    
<br/> this endpoint will store bookdata in modelBookData<br/>
`For List book by ID use http://localhost:3000/books/_bookId` <br/>
<br/> this endpoint will list book by bookId <br/>
`For list all book use get http://localhost:3000/getallbook` <br/><br/>

`For update book use put http://localhost:3000/updatebook/_bookId` <br/>
with paramiter that you want to update <br/>
{
	"Title":"",
	"Synopsis": "",
        "ISBN10": "",
        "ISBN30": "",
        "Language": "",
        "Publisher": "",
        "Price": "",
        "Review": "",
        "Soldamout": "",
        "CurrentAmout": ""
}<br/> this endpoint will update bookdata in modelBookData<br/>

`For delete book use delete http://localhost:3000/deletebook/5cfd_bookId48e5469bbc323c91f220` <br/><br/>
`For buy book use post http://localhost:3000/buybook` <br/>
with paramiter <br/>
{
        "Title": "",
        "buyAmout": 5
	
} <br/>
this endpoint will store booktitle and buyAmout in modelSellBook <br/>
`For list all sold book use get http://localhost:3000/getSolebook` <br/><br/>
`For use reviewbook book use post http://localhost:3000/reviewbook` <br/>
with paramiter <br/>
{
    "Title":"",
	"Review":"",
	"Reviewer":""
}

<br/> this endpoint will store bookReviewData in modelReviewBook<br/>
`For list Review Book use get http://localhost:3000/getallReviewbook` <br/>


