import React,{useState, useRef} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) =>{
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        //setText(e.target.value);
    };

    const onReset = () =>{
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    }

    return(
        <div>
            <input name="name" placeholder="NAME" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="NICKNAME" onChange={onChange} value={nickname} />
            <button onClick={onReset}>reset</button>
            <div>
                <b>value: {name} {nickname}</b>
            </div>
        </div>
    )
}

export default InputSample;