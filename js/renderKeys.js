function renderShiftkeys(value){

let returnVal="";
    switch (value){
        case "0" : 
                     returnVal=")";
                     break;
                     
        case "1" : 
                    returnVal="!";
                    break;
        case "`" :
                    returnVal="~";
                    break;
        case "2" : 
                     returnVal="@";
                     break;
                     
        case "3" : 
                    returnVal="#";
                     break;
        
        case "4" : 
                     returnVal="$";
                     break;
                     
        case "5" : 
                     returnVal="%";
                     break;
        case "6" : 
                     returnVal="^";
                     break;             
        case "7" : 
                    returnVal="&";
                    break;
        case "8" :
                    returnVal= "*";
                    break;
        case "9" :
                    returnVal="(";
                    break;
         case "-" :
                    returnVal="_";
                    break;  
     case "=" :
                    returnVal="+";
                    break;          
        case "~" :
                    returnVal="`";
                    break;            
        case "!" :
                    returnVal="1";
                    break;
        case "@" :
                    returnVal="2";
                    break;
        case "#" :  
                    returnVal="3";
                    break;                                               
        case "$" :  
                    returnVal="4";
                    break;      
        case "%" :  
                    returnVal="5";
                    break;                                               
        case "^" :  
                    returnVal="6";
                    break;                                               
        case "&" :  
                    returnVal="7";
                    break;                                               
        case "*" :  
                    returnVal="8";
                    break;                                               
        case "(" :  
                    returnVal="9";
                    break;                                               
         case ")" :  
                    returnVal="0";
                    break;                                               
        case "_" :  
                    returnVal="-";
                    break;                                               
        case "+" :  
                    returnVal="=";
                    break;                                               
                                                                          
                    
    }
   return returnVal;

}