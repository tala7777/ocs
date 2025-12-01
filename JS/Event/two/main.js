function countryFlags() {
    let country = document.getElementById("list").value;
    switch (country) {
        case "Jordan":
            {
                document.getElementById("country-img").innerHTML = "<img src='img/jo.jpg'>";

            }
            break;
        case "United States":
            {
                document.getElementById("country-img").innerHTML = "<img src='img/us.jpg'>";
            }
            break;
        case "Germany":
            {
                document.getElementById("country-img").innerHTML = "<img src='img/ger.jpg'>";
            }
            break;
        default:
            console.log("no country selected")
    }



}