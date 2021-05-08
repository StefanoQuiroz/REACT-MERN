# NavBar-Context

Cree un proyecto React que tenga una barra de navegación con un mensaje que diga el nombre del usuario ("¡Hola, * some_name_here *!"). En el cuerpo de la página, tenga una entrada donde el usuario pueda cambiar dinámicamente el nombre en la barra de navegación. Deberá crear los siguientes componentes:

Form.js: este componente debería contener el campo de entrada.
FormWrapper.js: este componente solo debe envolver el componente de formulario como hijo. Esto es para ilustrar que puede usar componentes anidados con contexto sin pasar apoyos.
Navbar.js: este componente debe ser su barra de navegación que contiene el saludo.
Wrapper.js: este componente debe ajustar la barra de navegación y los componentes FormWrapper (y accederá a useState).
También deberá crear el objeto de contexto.

Su función App.js debería verse así (tenga en cuenta que Navbar y FormWrapper no admiten ningún apoyo): 

## Topics

-  Crear el componente de formulario
-  Crear el componente FormWrapper
-  Crea tu componente de barra de navegación
-  Crear el componente de envoltura
-  Crea el objeto de contexto

```sh
function App() {
    return (
        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>
    );
}    
```