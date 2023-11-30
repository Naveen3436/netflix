let movies=[
    {
        Name:"Billa",
        rating:8.8,
        poster:"https://m.media-amazon.com/images/M/MV5BMTY5MTIwMDg0N15BMl5BanBnXkFtZTgwNjA3OTcwMzE@._V1_.jpg",
        Description:"A film by Prabhas in a dual role alongside Krishnam Raju, Anushka Shetty," 


 },

    {
        Name:"darling",
        rating:7.9,
        poster:"https://static.moviecrow.com/movies/0-darling/12137-12134-Darling-21-px214.jpg",
       Description:"Prabha prepares to meet Nandini, his childhood friend, at a reunion party organised by his father. "


    },

    {
        Name:"RRR",
        rating:7.8,
        poster:"https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
       Description:"A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers."

    },
    
    {
        Name:"pushpa",
        rating:7.6,
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQutfs3KS77zRe885Xwy7XTcPpjq868f1OkQ&usqp=CAU",
        Description:"A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business."
    },

    {
        Name:"kushi",
        rating:6.3,
        poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIoAXQMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAADBAUGAgcBAAj/xAA6EAACAQMDAQUGBQMBCQAAAAABAgMABBESITEFEyJBUWEGcYGRwfAHFCMysUKh0eEVJTNDUoKisvH/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAAICAgMBAQEAAAAAAAAAAAABAhEDIRIxQSJhBP/aAAwDAQACEQMRAD8A9IvbtFICh31HA0IW/jgbc0rDexyS9mFkVsZw6Ff7Hehq1GTdhTovQypplEOnNL6ccHIopabuiERkeOrOfhTZKDLX7FKIl4sjMTCc7aSzYFNwiQr+sqB8/wBGcY+NA7P2NjQyKYCknHzpZ47vtWCLb9nnu5LZ+NKxoG+2aCzYpp1bADquogZxxnHhQHi52FNEtEt+tWsXUhZnWZPE42H1q7DcRlN3A99S5I01iQopcbA43+dDkxtmit/hEeS7OEpmIZZSdqBEuTindHpQiwU7EX8RTcCB84PA1Lk1TiUAYGMACklRY7iOQgl9JUeWNj9KZt5USM4Bwvh5Cmat2lSBdPBNhZ+4H/xNGvIpW7J41V+zbLRscBxgj7zXEOlCiwq+nOVB4Gf/AKaLNIxbT2bhlOxX3Gj0pv7tfp3ZypNbgorIASpRuVI5FTp3f8l1JRqwJm7wPH7afDJbhkVSBu7MfEnkk0DsopBNCVfTK2Wzt5f4pelY5KLutH7rCqbC4LgkBCSAcZxvz4V+0hYFVCQAoAB3r7cGOeJ45AxVwVbAxtxXRAC4ycYoS0Zt/NCMi93dsH3Uo6F/EYG3FPTrkHekXLL3VPGaoyaGbdcyDbwzVBU4NLWy/qNnyxT0SY+VZWUfI4yfSigdgryFGcqCQqDJPoPWvsXdzqPurpy3KcAeIppiAi/GcG1uQQM4KgZ3Axz94pGG4vLlmBkETBc6pLcAHfww1My20EpJkt4nJ5LIDmuY7CzQqy2cKsoCqVQbADA/ttQmGwNrdzgsZo5ZRwFSAKf/AGORTUFw00hU208ePGRQPrXEfTLNQQtnbqG2IEY45/kD5VhfaH8SrPoPU7vpvTukTXDWshSZkBChsDPA+8UNjjZ6Gy0BxzWe9i/bnp/tgk6WsFxbXNuoaSGYDcE8qRyPlWjcbUrGKSDINISr3qouOaRlBLVVk0ULcbnPjinFYAAHk8UjbyglSM5PK+VMs41gLgleRWXIvjsZVdyDyPWsj7fe0t50u66Z0booU9S6g5Opk1CKJf3NjxPkPQ1q4i5myFOnHIFeF9Z6tLe/jHdSWRa5VR2K6xjswse4B8Bqzv5mhyqLZUI3NIqe1XtD1z2Xayv7Prl7dRyOGuLLqFsqnSSRkHSMDIxjORkV7FAyTQRywnMcih0z5EZFfz3+IvVnkih6ZDb3EPburv2kmrdOMfP+3vr33o8lncdJtpunSB7Ro8xMBju+W/BHGKnHJuNsrNFRnSHCmRvXnXthPbQXPVLW9E5guE0NFHEiJIzKMEv+4nHjnw9K9HbIwcisD+JfQoOtIstvDK97GqjWkhAKhs4Kg4J3bnill2h4bUujP/hZ0i1sfaV3sxMyf7KDPOx2mZpAOPTSRXqcm22KyHslDL0eLtJbKTQkfZRwQgFjuOMkDHjWx2khWYq0ZI3jfBI9+KMc247DNBRnQnJsppRo2c5VSRTsxyOKVaVUYqz7+QH+lVyISOILqF20x+WCTt8acaJe0Zg27b7cVNtLONJAzyEjP7dAPz3q9G9smgjSDjC48KzlJeF009gr69XptrH4+BOcfe9ILZWcqvPbwRIZ/wBR2RQNTHknzrnr2mW5Adm0Rx93H/Uc/wAYzUnpPVJkUQbau0cAICdskjPgAQRz6USaktlQTW0Yr8UeiN+d6fd2dvmOGORp5Quw3H0B+ANa38KeuQ9R9nPycUBiW2do1OMBySWLfM7+po3tN1D/AHTcWy9xp0aKNim2phgce+p/4Y2U/RLKG0vSo7zMo5ILHjVjffw5+dKFJUOdydtG7vnK27ah3QupvWosd9DeRtKSq74OPA+VVOuOTYsIWGSQG91YLpMMpu7iRS7w91SRuFYZ38/KnJ0x4Vs09pdp+beDhlGpR5/eKoW7yXB2Y6lBB9f9aznUYLpDFdRACeJho737vIe48fGtEhtrRBcXM2nKatCEEjONyR9NqIuw/oik7OpHLYXG++QDnHxoDLHIdx3gN9qGL1YITLICxdjp1kE4+FKwXUzqWiAxqwcnFUjLoetTbsv6uhTyMnGcfYp6HEqhnU97zrL2k5ilRrns4UiGBhhv8fpVu16lbS4WOZGc/wBOrvCuXPapVotvYj1Z3k6g6IcKCFG2dxjkfLimE6ZEGbW8g1d5iCOQAMjY+QoMl4T1GQdlG/Zd4HGW+HrtTV7HG1uD2ZTLBjqbON84OfpW8VGUdg3KNeCHUOlxTlHd5n7NwQrFQDjcbheNsU102K3hh/TiCsp7p0AasjG/v5riFY9cmWIC+bbKfl6110qd1MUQK9kW0aAByMn3+WB6UJRh0Fyn6H9qJhD095B+4KcerY2/zWc9mra8PQBcRRyDVIxbGM844P376qe1EschgiZgAx2UsO94Yx8qpWGGtEEf6KrnQVI33z94p1yYKThtGJ6ijRxtFdySwh+f0mXUPQ8Ej786D0vrH5i9XpbiT8moBhlZm2csTgk+B8PLitXeMklwRIimUbMxHIqXb2kd1d3AxGipHlyR61HGui3l5raGepo8SiTJZDtk+HpSMd1cQxgRwyEEk5C5zVH89+VQwXiGWH9pbzH+aWlhikw9jeq8Z/pMe6+/Bqubr5MeK9IftF1FM269oGiXMmkcHwB9fGg9HtDeRy3t0CIERjGhONbD6CvP7Wdls0VToAyRgYrZdCv3To5gBxiNvHc711ZXUTPGk5WzR2d1NNcLEoUv2ZJOM8Lt/etIlyJ7AYXlcDBB8/lWV6PKkczsUIlWIamPgDvjn6VUsLkGxaTI04z8fI1zQSSN8krDWVyEhDE4OF2IwP2+HyoPTZLhrwuMiHXqYnwODt7zlaUhkYQlQP3YAHI++KL0+6VIAZMgSPsc8H9v8jFKSHjdMP1zp0l7edPuYWXXbSZIPiMg/T+/pVDpl1rg0FzgeRO9JtfBokbIKsNQ33IpGwuNKKgbvb8+Q/1ohVuh5X8pDl3MF6iy5bGnbU2TQumSwPJdwyjPagg7/wBPFRuodS09Uy2caMbeO9A6LO0vUZJhnsxqBP8AFU0Zwr0ptdRLKbdn1YB06ju2PGkIo1upJFti2tD31zuM8fwaWZhLK9zrB7NcDGMeu9fem9VtbJ7ntpljkkcHLeK4GPrWLuO0N7MB1R0iujAoI0Rovl4f4rRez06rYEPnUQMD/uqMGE7lp4NZPdJKkYHoat2j9OigKQ29zkZ0DPHOOQPSuuTtUYRdOy9Yzf8AGkJwZDjB8gMU/bSs8JUbRruTnPHhj759Kjw30Cw4WGWPJJKtoO2d98fWrkBlVjFLDICRlFLRjIzjwG+4/tUqJXKxaa7aG5eMqF1YY+S7cUtPeL2FsjMRpkAxnbPIp/qUF80siiB2kOB/yhgM2lc7efjU+SUvpyhVIkWQ5MfdBQkcr5YqZRKjKiJD+ZWS6iThjp1ZOAdjxVjpSSwQq0shYrn+9F6a089jAUTWzvsR2SrqLH0z58+lMQ3T3b9hFEdWlH/dENmGR4eR+FNRJctkPqUuZFfPGPkaNYyvbWGpYmd5CW7o4ol5dtERJMv6TaAAOxJBZS240nwH80CfqVrIVOmTO2rBUfLAooLF7MyW9qUdX1MSTtjGSan3McUs7Z3PJZt803d38AizFHNqzjDEEH5D3VKlkLzO1uAVzjOBgkeVJrYJg4n0948U1HcA8Y/ikkA0Dajoq+Q+VakFCKdQN+feDT8HVmjlXWZHZsDUXbcZzjnzyakRKpIyo+VOQxoWTKLswxtSGhnqHV5kwA76yANXbMCMbjbPrnepd11aaaIxPBIc41y6mYsAMAYz/iiXwBm3ANLSKAHwAPhUsaGYOqnsVjSKWKEbLEJZMKPLGfvNfX6uLWOSVQwGRhUkdSMbDfPh4eVJRbopPkK+XCI0ZDKpBBzkUAL3PtBFddmrGdAHXu9qZFzwD3j5bcUZpqlCNBOMIo3HhVHA8hQI6Zw66XAYeR3oRZlOEcovgFArsgY4FfgoIGQKYH//2Q==",
        Description:"Excellent Songs love Story and direction are good. Much needed success for both VD and Sam. The chemistry between Vijay and Samantha is very good throughout the movie. First half is a bit artificial but second half is very meaningful and thought provoking. Movie is little lengthy and feels slow at certain times but overall clean and good. Comedy and laughter part is very well balanced by Vennela Kishore in the first half and Rahul Ramakrishna in the second half."
        
    },

    {
        Name:"jungle book",
        rating:7.8,
        poster:"https://lumiere-a.akamaihd.net/v1/images/p_thejunglebook2016_19751_6b8cfcec.jpeg?region=0%2C0%2C540%2C810",
       Description:"Mowgli is a boy brought up in the jungle by a pack of wolves. When Shere Khan, a tiger, threatens to kill him, a panther and a bear help him escape his clutches."
    }
] ;




function searchMovie()
{
    let movieName = document.getElementById('search').value;

    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.Name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {

        }


       displayMovies(result);


    }
    else 
    {
        displayMovies(movies);
    }



}


function displayMovies(data)
{

    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">
                    <div class="video">
                    </div>
                    <div class="details">
                        <h1>${data[i].Name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p>Rami Malek . Jhon Jacobs . Emma Stone</p>
                    </div>
                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
        console.log(data[i].Name)
    }

    // console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}


displayMovies(movies);
