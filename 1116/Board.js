import React, { useState } from 'react';
const Board = () => {
    const [names, setNames] = useState([]);
    const [inputText, setInputText] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    
    const [nextId, setNextId] = useState(1);

    const onChange = e =>{
        setInputTitle(e.target.value);
        
    }
    const onChange2 = e =>{
        setInputText(e.target.value);
    }
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            title: inputTitle,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
        setInputTitle('');
        
    }
    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const List = names.map(name => 
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            글 제목 : {name.title}<br/>내용 : {name.text}<br /><br />
        </li>);
    return (
    <>
        <div>
            <h1>게시판</h1>
            <input type="text" name="title" placeholder="글 제목" onChange={onChange}></input><br /><br />
            <textarea name="text" cols="40" rows="8" onChange={onChange2}></textarea><br /><br />

            <button>파일 선택</button>  선택된 파일 없음<br/><br />
            <button onClick={onClick}>작성하기</button>
            <ul>{List}</ul>
        </div>
    </>);
};

export default Board;
