const operadoresPorPais = {
    MX: [
      "Telcel", "AT&T México", "Movistar México", "Unefon", "Virgin Mobile México",
      "Weex Mobile", "Flash Mobile", "FreedomPop México", "BAIT", "OXXO Cel",
      "Soriana Móvil", "Aló", "Bueno Cell", "QBOcel", "Toka Móvil", "Simpati",
      "Her Mobile", "PILLOFON", "Megacable", "G Móvil"
    ],
    US: [
      "Verizon", "AT&T", "T-Mobile", "US Cellular", "Cricket Wireless",
      "Metro by T-Mobile", "Mint Mobile", "Visible", "Google Fi", "Xfinity Mobile",
      "H2O Wireless", "Red Pocket Mobile", "TracFone Wireless", "Simple Mobile","Sprint", 
      "Straight Talk", "Tello", "PureTalk", "US Mobile", "Twigby"
    ],
    CA: [
      "Rogers Wireless", "Bell Mobility", "Telus Mobility", "Fido", "Virgin Plus",
      "Koodo Mobile", "Public Mobile", "Chatr Mobile", "Freedom Mobile", "Videotron",
      "Fizz Mobile", "Eastlink Wireless", "SaskTel", "TbayTel", "SSi Canada",
      "Iristel", "Sogetel Mobilité", "K-Net Mobile"
    ],
OT: [
      "Otro"
    ]
  };

  function actualizarOperadores() {
    const pais = document.getElementById("pais").value;
    const operadorSelect = document.getElementById("operador");

    // Limpiar operadores anteriores
    operadorSelect.innerHTML = '<option value="">-- Selecciona un operador --</option>';

    // Agregar nuevos operadores si hay país seleccionado
    if (operadoresPorPais[pais]) {
      operadoresPorPais[pais].forEach(op => {
        const option = document.createElement("option");
        option.value = op;
        option.textContent = op;
        operadorSelect.appendChild(option);
      });
    }
  }

document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();
  const modelo = document.getElementById('model').value;
  const pais = document.getElementById('pais').value;
  const operador = document.getElementById('operador').value;
  const imei = document.getElementById('imei').value;
  const mensajeX = document.getElementById('message').value;
  
  
  let mensaje = `MODELO: ${modelo}\n`;
    mensaje += `PAIS: ${pais}\n`;
    mensaje += `OPERADOR: ${operador}\n`;
  mensaje += `IMEI: ${imei}\n`;
  mensaje += `MENSAJE: ${mensaje}`;
  
  // Mostrar mensaje en un modal más elegante
    const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';

const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#ffffff'; // Fondo blanco como en la página principal
modalContent.style.padding = '30px';
modalContent.style.borderRadius = '12px'; // Radio de borde aumentado para coincidir
modalContent.style.maxWidth = '500px';
modalContent.style.textAlign = 'center';
modalContent.style.boxShadow = '0 5px 15px rgba(0, 113, 227, 0.3)'; // Sombra con color primario
modalContent.style.border = '1px solid rgba(0, 113, 227, 0.1)'; // Borde sutil

const modalTitle = document.createElement('h2');
modalTitle.textContent = '¡Envía tú petición!';
modalTitle.style.color = '#0071e3'; // Color primario azul de la página
modalTitle.style.fontFamily = "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"; // Fuente consistente
modalTitle.style.marginTop = '0';
modalTitle.style.fontSize = '24px';
modalTitle.style.fontWeight = '600';
modalTitle.style.marginBottom = '20px';

const modalText = document.createElement('p');
modalText.textContent = mensaje;
modalText.style.lineHeight = '1.6';
modalText.style.marginBottom = '25px';
modalText.style.color = '#1d1d1f'; // Color de texto principal de la página
modalText.style.fontSize = '16px';

const closeButton = document.createElement('button');
closeButton.textContent = 'Cerrar';
closeButton.style.background = '#1d1d1f'; // Color secundario oscuro de la página
closeButton.style.border = 'none';
closeButton.style.color = 'white';
closeButton.style.padding = '12px 25px'; // Similar a otros botones de la página
closeButton.style.borderRadius = '30px'; // Radio de borde consistente
closeButton.style.cursor = 'pointer';
closeButton.style.fontFamily = "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif";
closeButton.style.fontWeight = '500';
closeButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
closeButton.style.transition = 'all 0.3s'; // Transición suave como en la página
closeButton.addEventListener('mouseover', function() {
    this.style.background = '#000000'; // Efecto hover oscuro
    this.style.transform = 'translateY(-2px)';
});
closeButton.addEventListener('mouseout', function() {
    this.style.background = '#1d1d1f';
    this.style.transform = 'translateY(0)';
});
closeButton.addEventListener('click', function() {
    document.body.removeChild(modal);
    document.getElementById('confirmacionForm').reset();
});

modalContent.appendChild(modalTitle);
modalContent.appendChild(modalText);

const whatsappButton = document.createElement('a');
const whatsappMensaje = encodeURIComponent(mensaje);
whatsappButton.href = `https://wa.me/526351062284?text=${whatsappMensaje}`;
whatsappButton.target = '_blank';
whatsappButton.textContent = 'Enviar por WhatsApp';
whatsappButton.style.display = 'inline-block';
whatsappButton.style.marginRight = '15px';
whatsappButton.style.marginBottom = '15px';
whatsappButton.style.background = '#25D366'; // Color WhatsApp (se mantiene)
whatsappButton.style.border = 'none';
whatsappButton.style.color = 'white';
whatsappButton.style.padding = '12px 25px'; // Consistente con otros botones
whatsappButton.style.borderRadius = '30px'; // Radio de borde consistente
whatsappButton.style.cursor = 'pointer';
whatsappButton.style.fontFamily = "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif";
whatsappButton.style.fontWeight = '500';
whatsappButton.style.textDecoration = 'none';
whatsappButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
whatsappButton.style.transition = 'all 0.3s'; // Transición suave
whatsappButton.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
});
whatsappButton.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
});

// Contenedor para los botones
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '15px';
buttonContainer.style.flexWrap = 'wrap';

buttonContainer.appendChild(whatsappButton);
buttonContainer.appendChild(closeButton);

modalContent.appendChild(buttonContainer);
modal.appendChild(modalContent);
document.body.appendChild(modal);

modalContent.appendChild(whatsappButton);

   
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  });
