import {useState} from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Peach');
    
    return (
	    <div className="create">
	    <h2> Create </h2>
	    <form>
	    <label> Blog title: </label>
	    <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
	    <label> Blog body: </label>
	    <textarea required value={body} onChange={(e)=>setBody(e.target.value)}/>
	    <label> Blog author: </label>
	    <select
	    value={author} onChange={(e)=>setAuthor(e.target.value)}>
	    <option value="peach">peach</option>
	    <option value="mario">mario</option>
	    </select>
	    <button>Add Blog</button>
	    </form>
	    </div>
    );
}

export default Create;