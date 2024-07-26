var SiteNameInput =document.getElementById("siteName");
var SiteUrlInput =document.getElementById("siteUrl");
var BookmarksTable=document.getElementById("tBody");
var Bookmarks=[];

function AddBookmark(){
    var NewBookmark={
        SiteName: SiteNameInput.value,
        siteurl: SiteUrlInput.value
    }
    Bookmarks.push(NewBookmark);
    // console.log(Bookmarks);
    DisplayData(Bookmarks);
    
    
}
function DisplayData(arr){
    cartona="";
    for(var i=0;i<arr.length;i++){
        cartona +=`
         <tr>
                        <td>${i+1}</td>
                        <td>${arr[i].SiteName}</td>
                        <td><a class="btn btn-primary " href="${arr[i].siteurl}">Visite</a></td>
                        <td><button class="btn btn-danger " onclick="DeleteRow(${i})"></button></td>
                    </tr>
        `
        BookmarksTable.innerHTML=cartona;
    }
    
}

function isValidUrl() {
    const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9-\.]+\.[a-z]{2,6})(?:[:\d]*)(?:\/[^\s]*)?$/;
    // return urlRegex.test(SiteUrlInput.value);
   
    var IsValid=urlRegex.test(SiteUrlInput.value);
    SiteUrlInput.classList.remove('is-valid','is-invalid');
if(IsValid)
    {
        console.log('matched');
        SiteUrlInput.classList.add('is-valid');

    }
    else{
        console.log('NOT matched');
        SiteUrlInput.classList.add('is-invalid');
    }
  }
  
  function validateName(){
    var regex=/^[\w\s\-.:?!,]{2,}$/;
    var IsValid=regex.test(SiteNameInput.value);
    SiteNameInput.classList.remove('is-valid','is-invalid');
    if(IsValid)
        {
            console.log('matched');
            SiteNameInput.classList.add('is-valid');
    
        }
        else{
            console.log('NOT matched');
            SiteNameInput.classList.add('is-invalid');
        }
    }

    function DeleteRow(index){
        Bookmarks.splice(index,1);
        DisplayData(Bookmarks);
        console.log(Bookmarks);

    }