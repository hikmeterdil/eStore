import React, { useState, useRef } from "react";

import { useHttpClient } from '../hooks/http-hook';
import Button from "../UIElements/Button";

const Uploader = ({fileFilter, isCentered, onUploadDone, allowMulti}) => {
    const {sendRequest} = useHttpClient();
    const [multiMode, setMultiMode] = useState(false);
    const [files, setFiles] = useState([]);
    const filePickerRef = useRef();
    const auth = {};

    const pickedHandler = (event) => {
        setFiles([...event.target.files]);
    };

    const pickFileHandler=()=>{
        filePickerRef.current.click();
    };

    const upload = async ()=>{
        let result;
        try{
            const formData = new FormData();
            for (const file of files) {
                formData.append('file', file);
            }
            result = await sendRequest(`${process.env.REACT_APP_API_URL}/files${multiMode ? '/multi' : ''}`, 'POST', formData, {Authorization: 'Bearer ' + auth.token});
        } catch {}
        onUploadDone(result.files);
    };

    const changeMode = ()=>{
        setMultiMode(currentMode => !currentMode);
    };

    return(
        <div className="uploader-main">
            <input 
                ref={filePickerRef} 
                style={{display: 'none'}} 
                type="file" 
                accept={fileFilter} 
                onChange={pickedHandler}
                multiple={multiMode}
            />
            <div className={`uploader-view ${isCentered && 'center'}`}>
                { allowMulti && <input type="checkbox" checked={multiMode} onChange={changeMode}/> }
                <Button onClick={pickFileHandler}>Select File{multiMode&&'s'}</Button>
                {files.map((file, i)=><p key={i}>{file.name} - {(file.size/(1024*1024)).toFixed(2)} MBytes</p>)}
                {files.length > 0 && <Button onClick={upload} >Upload File{multiMode&&'s'}</Button>}
            </div>
        </div>
    );
};

export default Uploader;