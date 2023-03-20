var images = ["100.jpg","Messi.webp","neymar-barcelona.jpg", "paulo-dybala.jpg" , "pedri.jpg", "lewy.webp"];
           
var names = ["Libro de futbolistas","Messi", "Neymar", "Dybala", "Pedri", "Lewandowski"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}

