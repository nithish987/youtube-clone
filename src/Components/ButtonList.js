import React from "react";
import Button from "./Button";


const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="all"/>
           <Button name="gaming"/>
           <Button name="songs"/>
           <Button name="live"/>
           <Button name="cricket"/>
           <Button name="cooking"/>
           <Button name="science"/>
           <Button name="programming"/>
           <Button name="sports"/>
           <Button name="music"/>
    
        </div>
    );
};

export default ButtonList;