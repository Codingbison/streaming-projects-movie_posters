
function getSong(id,event){
    event.stopPropagation();
    event.preventDefault();
    let song;
    switch (id) {
        case 'fig1':{
            event.stopPropagation()
            clickedElement(0,3)
            break;
        }
        case 'fig2': {
            event.stopPropagation()
            clickedElement(1,3)
            break
        }
        case 'fig3': {
            event.stopPropagation()
            break
            
        }
        case 'fig4': {
            event.stopPropagation()
            clickedElement(3,3)
            break
        }
        case 'fig5': {
            event.stopPropagation()
            clickedElement(4,3)
            break
        }
        case 'fig6': {
            event.stopPropagation()
            clickedElement(5,1)
            break
        }
    }
}

async function clickedElement(img_index, item_index, event){
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value
        
            let headers = new Headers([
                ['Content-Type', 'application/json'],
                ['Accept','application/json'],
                ['Authorization','Bearer BQBOI96Z41SXV_klSlRN2tvwN7PIfYEUR2_DDNiSVFzXppEtdVfv0pyM8QhYLt_REIedIsNjXcmZ3uunMx05EtN8tWsBdynjAgy-NqQ2M4pge5j7LBRfn8ZW2lUlXmXIxmbNHDQpoIo3O11aw1ottAVf_aDiCfl6NQ']
            ]);
            let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=5`, {
                method:'GET',
                headers: headers,
            })
            
             await fetch(request)
                .then((response) => response.json())
                .then((rawData) => { 
            
                console.log(rawData)
                song = rawData.tracks.items[item_index].preview_url })
        
            songSnippet(song)
}


function songSnippet(url){
    let playSong = new Audio(url)
    playSong.play()
}