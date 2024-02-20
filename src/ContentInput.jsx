import { useState } from "react";

const ContentInput = ({ style }) => {
    const [content, setContent] = useState("");
    const [pageElements, setPageElements] = useState([])

    function changeContent(e) {
        setContent(e.target.value);
    }

    function addNewDiv(e) {
        e.preventDefault();
        console.log(content);
        setPageElements([...pageElements, { content: content, style: style }]);
        setContent("")
    }

    return (
        <div>
            <form onSubmit={addNewDiv} className="mb-5">
                <input type="text" onChange={changeContent} defaultValue={content} placeholder="Ecrire votre texte ici..." className="w-full h-10 bg-slate-200 rounded p-3 my-5" />
                <div style={style} >
                    {content}
                </div>
                <button type="submit" className="bg-green-500 p-1 px-3 rounded-xl">Envoyer </button>
            </form>
            {/* <textarea className=" bg-slate-200 rounded p-3 my-5" onChange={changeContent} defaultValue={content} cols="100" rows="5" ></textarea> */}

            <div className="bg-gray-200 w-full h-0.5 my-10"></div>
            <div>
                {pageElements.map((item, i) => (
                    console.log(pageElements),
                    <p key={i} style={item.style}>{item.content}</p>
                ))}
            </div>
        </div>

    );
}

export default ContentInput;