
function GetVolume(length, width, height){
        var result = (length * width * height);
        return result;
}
            
function main()
            {       
for (Counter=0; Counter<=10; Counter++)
{
    var vol = GetVolume(Counter + 2, Counter + 3, Counter + 4);
                    
                    
    switch (true)
                        
            {
    case vol>=0 && vol<=500:
        document.write('Small Volume: ' + vol + "<br/>");
                                
        break;
        case vol>=501 && vol<=1000:
        document.write('Medium Volume: ' + vol + "<br/>");
             break;          
        case vol>=1001 && vol<=1500:
        document.write('Large Volume: ' + vol + "<br/>");
            break;
        case vol>=1501:
        document.write('Extra Large Volume: ' + vol + "<br/>");
            break;
        default:
        document.write("volume level <br/>");
            break;
        }
                        
    }
                 
}
            
main();
            
