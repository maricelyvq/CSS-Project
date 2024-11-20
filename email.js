// Función para cargar y mostrar datos desde el archivo JSON
console.log("Script loaded!");
async function loadEmails() {
    try {
      // Carga el archivo JSON
      const response = await fetch('/assets/emails.json');
      const emails = await response.json();
  
      // Selecciona el contenedor donde se mostrarán los datos
      const container = document.getElementById('inbox');
      
      let counter = 0 ;
      // Itera sobre cada correo en el JSON y crea su estructura
      emails.forEach(email => {
        counter++;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';   

        // Crea el input checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
  
        // Crea los campos dinámicamente
        const senderDiv = document.createElement('div');
        senderDiv.textContent = ` ${email.sender}`;
        senderDiv.className="sender";
  
        const subjectDiv = document.createElement('div');
        subjectDiv.textContent = `${email.subject}`;
  
        const dateDiv = document.createElement('div');
        dateDiv.textContent = `${email.date}`;
  
        // Agrega los campos al contenedor del correo
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(senderDiv);
        itemDiv.appendChild(subjectDiv);
        itemDiv.appendChild(dateDiv);
  
        // Agrega el correo al contenedor principal
        container.appendChild(itemDiv);
      });
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  }
  
  // Llama a la función para cargar los correos
  loadEmails();
  