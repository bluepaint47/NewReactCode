import '../App.css'; 

function BlogPost(props){
    return(
        <>
        <div className="blo">
      <h1>{props.blog.bank_name}</h1>
        <p class="title">{props.blog.account_number}</p>
        <p>{props.blog.iban}</p>
        <button>READ MORE</button>
      </div>
      </>
    );
}
export default BlogPost;