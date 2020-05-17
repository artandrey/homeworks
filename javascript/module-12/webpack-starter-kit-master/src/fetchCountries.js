export const fetchCountries = function (searchQueries) {
    return fetch(`http://restcountries.eu/rest/v2/name/${searchQueries}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
}











// const fetchInfo = function () {
// fetch(allUrl, {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//   },
// }).then(response => response.json())
// .then(json => json)
// .catch(console.log('Smth went wrong'));
// }
// export {fetchInfo};