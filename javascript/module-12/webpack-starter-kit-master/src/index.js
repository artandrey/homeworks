
import {fetchCountries} from './fetchCountries.js';
import './styles.css';
const input = document.querySelector('.search-field');
const list = document.querySelector('.countries-list');
const countryInfo = document.querySelector('.country-info');
const alertText = document.querySelector('h3');
let requestTimeout;

input.addEventListener('input', ()=> {
    const value = input.value.trim().toLowerCase();
    if(!value) return
    if (requestTimeout) clearTimeout(requestTimeout);
    requestTimeout = setTimeout(() => {(fetchCountries(value)).then(response => response.json())
        .then(json => {
            if(json.length > 10) {console.log('too much'); alertText.style.display = 'block'}
            else 
                if (json.length === 1) {


                    alertText.style.display = 'none'
                    const img = document.createElement('img');
                    img.setAttribute('src', json[0].flag)
                    const header = document.createElement('h2');
                    header.textContent = json[0].name;
                    const capital = document.createElement('p');
                    capital.textContent = `Capital: ${json[0].capital}`;
                    const population = document.createElement('p');
                    population.textContent = `Population: ${json[0].population}`;
                    const languages = document.createElement('p');
                    languages.textContent = 'Languages:';
                    const languagesList = document.createElement('ul');
                    json[0].languages.forEach((element) => {
                        const listElem = document.createElement('li');
                        listElem.textContent = element.name;
                        languagesList.append(listElem);
                        }
                    );
    
    
                    countryInfo.append(img)
                    countryInfo.append(header)
                    countryInfo.append(capital)
                    countryInfo.append(population)
                    countryInfo.append(languages)
                    countryInfo.append(languagesList)
                }
                else {
                    alertText.style.display = 'none'
                    json.forEach(element => {
                        innerHtml += `<li>${element.name}</li>`;
                    });
                }
            
            list.innerHTML = innerHtml;
        })
        .catch(err =>{list.innerHTML = ''; console.log('Smth went wrong')});},500)
    let innerHtml = '';
    countryInfo.innerHTML = '';
});
