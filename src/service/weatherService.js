const baseurl = import.meta.env.VITE_API_URL;

const apiKey = import.meta.env.VITE_API_KEY;

const getByName = async () => {
  try {
    let req = await fetch(`${baseurl}/current.json?key=${apiKey}&q=mumbai`);
    let res = await req.json();
    console.log(res);
  } catch (error) {
    alert("Network Error :", error);
  }
};

const getByPoints = async () => {
    try {
        let req = await fetch(`${baseurl}/current.json?key${apiKey}&q=`)
    } catch (error) {
        
    }
}