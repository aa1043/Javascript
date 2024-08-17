const mynum=new Array(2,34,56,36,3,5,3,6,32)
const newnum= mynum.filter((num)=> num>35)
console.log(newnum);//[ 56, 36 ]





const age=new Array(65,32,1,5,2,5,8,27,)
let vote=age.filter((a)=>
  {
    return a>=18// If you use {} then you have to use return otherwise it will give null outputlike this []
 })
console.log(vote);//[ 65, 32, 27 ]

const books = 
[
  { 
    title: 'Book One', 
    genre: 'Fiction', 
    publish: 1981, 
    edition: 2004 
  },
  { 
    title: 'Book Two',
     genre: 'Non-Fiction',
      publish: 1992,
      edition: 2008 
  },
  { 
    title: 'Book Three',
     genre: 'History',
     publish: 1999,
     edition: 2007 
  },
  { 
   title: 'Book Four',
   genre:'Non-Fiction', 
   publish: 1989, 
   edition: 2010 
  },
  { 
    title: 'Book Five',
    genre: 'Science', 
    publish: 2009, 
    edition: 2014 
  },
  { 
    title: 'Book Six',
    genre: 'Fiction', 
    publish: 1987, 
    edition: 2010 
  },
  { 
    title: 'Book Seven', 
    genre: 'History', 
    publish: 1986, 
    edition: 1996 
  },
  { 
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011, 
    edition: 2016 
  },
  { 
    title: 'Book Nine', 
    genre: 'Non-Fiction',
    publish: 1981,
    edition: 1989 
  },
];

const userbook=books.filter((bk)=>bk.publish>1995&&bk.genre==="History")
console.log(userbook);