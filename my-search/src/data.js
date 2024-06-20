import img1 from './img/bata.jpg'
import img2 from './img/bata2.jpg'
import img3 from './img/black22.jpg'
import img4 from './img/brown.jpg'


const data = {
carddata:[
    {
        "id":1,
        "img": img1,
        "title": 'blog1',
        "desc": 'desc1'
    },
    {
        id:2,
        img:img2,
        title: 'blog2',
        desc: 'desc1'
    },
    {
        id:3,
        img:img3,
        title: 'blog3',
        desc: 'desc1'
    },
    {
        id:4,
        img: img4,
        title: 'blog4',
        desc: 'desc1'
    }

]
}
export default data





const [products,setProducts] = useState(productList);
const [searchVal,setSearchVal] = useState("")

const mystyle = {
  marginLeft: "260px",
  marginTop: "20px",
  fontWeight: "700",
};



const searchItem = productList.filter((item)=>{
if(searchVal == ""){
  return item;
}
else if(item.toLowerCase().includes(searchVal.toLowerCase())){
  return item;
}
})

console.log("Searched Item : ", searchItem)



return (
  <>
  <div className="user" >
    <div >
    <input onChange={e => setSearchVal(e.target.value)} ></input>
    <BsSearch  />

    <div>

{searchItem.map((product) => {
   return (
       <p>{product}</p>
   )
})
}

</div>

    </div>
  </div>
  </>