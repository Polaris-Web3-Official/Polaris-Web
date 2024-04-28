import React from 'react'

export default function Feed({item}) {
  function elfsightWidget() {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);
    console.log('insertando el widguet');
    return () => {
      document.body.removeChild(script);
    };
  }

  const deletefreeButton = ()=>{
    setTimeout(()=>{
      const elements = document.querySelectorAll('[rel="noreferrer"]');
        // Itera sobre cada elemento seleccionado
        elements.forEach((element, index) => {
          // Agrega un id único a cada elemento
          const id = `element-${index}`;
          element.setAttribute('id', id);
          // Aplica el estilo CSS 'display: none;'
          document.getElementById(id).style.display = 'none';
      });
    }, 3000)
  };

  React.useEffect(() => {
    console.log('cambio el pathname');
    elfsightWidget();
    deletefreeButton();
  }, [window.location.pathname]);

  return (
    <div className="elfsight-app-5c0cedf1-446a-43a2-adb9-617b846da0d5" data-elfsight-app-lazy></div>
  )
}