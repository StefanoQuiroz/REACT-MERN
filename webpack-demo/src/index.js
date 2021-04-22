function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    //Lodash _.join(matriz, 'separador , espacio') => convierte la matriz en una cadena separada por un separador.
    //incluir Lodash en html script src="https:/"
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
  
document.body.appendChild(component());

