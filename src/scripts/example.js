// function magic(texts, ...vars){
//     vars[0] = vars[0][0].toUpperCase() + vars[0].slice(1);
//     // let text = '';
//
//     // texts.forEach((t, id) => {
//     //     text += t + (vars[id] ? vars[id] : '');
//     // })
//     return  texts
//         .map((t, id) => t + (vars[id] ? vars[id] : '')).join('')
// }
//
//
// const name = 'pawel';
// const age = 37;
// const animal = 'wszy'
// //tagged template literal string
// const sentence = magic`Mam na imię ${name} i mam ${age} lat. Ala ma kota i ma ${animal}.`;
//
// console.log(sentence);


// const htmlGenerator = (strings, ...vars) => `<h2>${strings
//     .map((string, id) => `${string} ${vars[id] ? `<span>${vars[id]}</span>` : ''}`)
//     .join('')}</h2>`
//
//
// const name = 'Ala';
//
// const html = htmlGenerator`Hello ${name}!`; //<h2>Hello <span>Ala</span></h2>
// console.log(html)