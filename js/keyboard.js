
let keyBoardProp = {
    value: "",
    capsLock : false,
    isKeyBoardGenrated : false,
    isShiftEnable : false ,
    numKeys : ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                                        "-","=","~","!","@","#","$","%","^","&","*","(",")","_","+"]
};
function toggleVirtualKeyBoard(showKeyBoard){
    let keyboardContainer = document.getElementById("keyboardContainer");
    if(showKeyBoard){
        keyboardContainer.classList.remove("keyboard--hidden");
        if(!keyBoardProp.isKeyBoardGenrated){
            displayKeyBoard(keyboardContainer);
            keyBoardProp.isKeyBoardGenrated=true;
        }
    
    }
    else{
        keyboardContainer.classList.add("keyboard--hidden");
    }
    

}
function onClose(){
    let keyboardContainer = document.getElementById("keyboardContainer");
    keyboardContainer.classList.add("keyboard--hidden");
}
 // Creates HTML for an icon
 const createIconHTML = (icon_name) => {
    return `<i class="material-icons">${icon_name}</i>`;
};

function appendToTextControl(value){
    let textArea = document.getElementById("txtArea");
    textArea.value=value;
}

function displayKeyBoard(keyboardContainer){
    const fragment = document.createDocumentFragment();
  //  fragment.setAttribute("id","keys");
    const keyLayout = [
        "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
        "done","space"
    ];
  

    keyLayout.forEach(key => {
    // Add attributes/classes
    const keyElement = document.createElement("button");
    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard__key");
    const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        keyBoardProp.value = keyBoardProp.value.substring(0, keyBoardProp.value.length - 1);
                        appendToTextControl(keyBoardProp.value);
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        keyBoardProp.capsLock=!keyBoardProp.capsLock;
                        keyElement.classList.toggle("keyboard__key--active", keyBoardProp.capsLock);
                        let keys= document.getElementById("keyboardContainer");
                        for (const key of keys.childNodes) {
                            if (key.childElementCount === 0 && key.textContent!="shift") {
                                key.textContent =keyBoardProp.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                            }
                        }
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        keyBoardProp.value += "\n";
                        appendToTextControl(keyBoardProp.value);
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        keyBoardProp.value += " ";
                        appendToTextControl(keyBoardProp.value);
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                    toggleVirtualKeyBoard(false);
                    });

                    break;

                case "shift":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_up");
                    keyElement.addEventListener("click", () => {
                        keyBoardProp.isShiftEnable=!keyBoardProp.isShiftEnable;
                        keyElement.classList.toggle("keyboard__key--active", keyBoardProp.isShiftEnable);
                        
                        let keys= document.getElementById("keyboardContainer");
                        for (const key of keys.childNodes) {
                            if (key.childElementCount === 0 && key.textContent!="shift" && keyBoardProp.numKeys.includes(key.textContent)) {
                                key.textContent =renderShiftkeys(key.textContent);
                            }
                        }
                    });
                    break;
                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                    if(keyBoardProp.isShiftEnable &&  keyBoardProp.numKeys.includes(key))
                        keyBoardProp.value += renderShiftkeys(key);
                    else         
                        keyBoardProp.value += keyBoardProp.capsLock ? key.toUpperCase() : key.toLowerCase();
                    appendToTextControl(keyBoardProp.value);
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
    });
    keyboardContainer.appendChild(fragment);
    
}
