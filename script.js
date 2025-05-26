 // Efecto de partículas
        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const colors = ['#0071e3', '#34c759', 'rgba(255,255,255,0.8)'];
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.opacity = Math.random() * 0.6 + 0.2;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY = -this.speedY;
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
        
        function init() {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            
            requestAnimationFrame(animate);
        }
        
        init();
        animate();
        
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();
  const nombre = document.getElementById('name').value;
  const imei = document.getElementById('imei').value;
  const servicio = document.getElementById('servicio').value;
  const mensajeX = document.getElementById('message').value;
  
  
  let mensaje = `Nombre: ${nombre}\n`;
 if (imei.trim().length > 0) { mensaje += `IMEI: ${imei}\n`;}
  mensaje += `Servicio: ${servicio}\n`;
 if (mensaje.trim().lenght > 0){ mensaje += `Mensaje: ${mensajeX}`;} 
  
  
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
