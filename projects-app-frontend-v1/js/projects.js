fetch('http://localhost:8888/getProjects', {
    headers: {
        'authorization': 'JWT '+ window.localStorage.getItem('token')
    }
}).
then(info => info.json()).
then(data => {
    let table = document.querySelector('table');
    
    for (let i = 0 ; i < data.length; i++) {
        let tr = document.createElement('tr');
        
        let tdOne = document.createElement('td')
        let textOne = document.createTextNode(data[i].project_id);
        tdOne.appendChild(textOne);

        let tdTwo = document.createElement('td')
        let textTwo = document.createTextNode(data[i].project_type);
        tdTwo.appendChild(textTwo);

        let tdThree = document.createElement('td')
        let textThree = document.createTextNode(data[i].project_date);
        tdThree.appendChild(textThree);

        let tdFour = document.createElement('td')
        let textFour = document.createTextNode(data[i].status);
        tdFour.appendChild(textFour);

        let tdFive = document.createElement('td')
        let textFive = document.createTextNode(data[i].client_id);
        tdFive.appendChild(textFive);

        tr.appendChild(tdOne);
        tr.appendChild(tdTwo);
        tr.appendChild(tdThree);
        tr.appendChild(tdFour);
        tr.appendChild(tdFive);
        
        table.appendChild(tr);
    }
}).
catch(e => console.log(e));