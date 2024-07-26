async function main() {

    let a = await fetch("http://127.0.0.1:3000/shop/")
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div")
    let folders = []
    let as = div.getElementsByTagName("a")
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.herf.startswith("outfit")) {
    folders.push(element.herf)
            
        }
        
    }
    
}
main()