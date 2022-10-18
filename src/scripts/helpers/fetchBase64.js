export default function fetchBase64(imgUrl) {
    return new Promise( (resolve, reject) => {
        fetch(imgUrl)
            .then(response => response.blob())
            .then(blob =>{
                var reader = new FileReader() ;
                reader.onload = function() { resolve(this.result); };
                reader.onerror = function() { reject(this); };
                reader.readAsDataURL(blob) ;
            })
            .catch(reject);
    });
}