import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

interface FileListProps {
    Name:string;
    setClickedButon:Dispatch<SetStateAction<string>>;
    buttonSelected:string;
  }

const Button: FC<FileListProps> = ({Name, setClickedButon,buttonSelected})=>{
 
    const [isSelected,setIsSelected] = useState<boolean>( Name=== buttonSelected)
    const [style,setStyle] = useState<string>("row columns-1 w-44 h-7")

    useEffect(()=>{
        if(buttonSelected == Name ){
            setIsSelected(true)
            setStyle("row columns-1 w-44 h-7 side-button-selected ")
        }else{
            if(isSelected){
                setStyle("row columns-1 w-44 h-7 ")
                setIsSelected(false)
            }
        }
    },[buttonSelected])


    const handleClick = ()=>{
        setClickedButon(Name)
        console.log("this function "+buttonSelected)
    }

    return (
        <button className={style} onClick={handleClick}>{Name}</button>
    )
}

export default Button;
