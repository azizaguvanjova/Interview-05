import React, { useEffect, useState, useRef } from "react";

function App() {
  // KODUNU BURAYA GELECEK
  const [inputText,setInputText] = useState('')
  const [textList,setTextList] = useState([])
  const [modalText,setModalText] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

const handleInputChange = (e) => {
  setInputText(e.target.value)
}

const handleAddText =(e)=>{
  if(e.key === "Enter"){
    setTextList([...textList,inputText])
    setInputText('')
  }
}

 const handleTextClick = (text) =>{
  setModalText(text)
  setIsModalOpen(true)

 }
 const handleCloseModal = ()=>{
  setIsModalOpen(false)
 }

return (
  <div className="flex justify-center items-center h-screen bg-slate-600">
  <input type="text"
  value={inputText}
  onChange={handleInputChange}
  placeholder="Metin giriniz"
  className="border-gray-600  p-2 m-3 text-center rounded-lg"
  onKeyDown={handleAddText}
  />
  
  <ul className="">{textList.map((text,index) => (
    <li  key={index} onClick={() =>handleTextClick(text)}>
      {text.length < 6 ? text :`${text.slice(0,5)}...` }
    </li>
  ))}
  </ul>

  {isModalOpen && (
    <div className=" grid gap-4" onClik={handleCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>
       <p>{modalText}</p> 
      </div>
    </div>
  )}
  </div>
)

}

export default App;
