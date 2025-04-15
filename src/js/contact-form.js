document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Предотвращаем отправку формы
            
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value.trim(),
                timestamp: new Date().toISOString()
            };
            
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showNotification('Пожалуйста, заполните все поля формы', 'error');
                return;
            }
            
            saveMessage(formData);
            
            showNotification('Сообщение успешно отправлено!', 'success');
            contactForm.reset();
        });
    }
    
    function saveMessage(message) {
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(message);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        console.log('Сообщение сохранено:', message);
    }
    
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = 'custom-notification ' + type;
        
        notification.innerHTML = `
            <div class="notification-icon">
                ${type === 'success' ? '✓' : '✕'}
            </div>
            <div class="notification-message">${message}</div>
        `;
        
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = '10px';
        notification.style.display = 'flex';
        notification.style.alignItems = 'center';
        notification.style.gap = '10px';
        notification.style.minWidth = '300px';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.5s ease';
        notification.style.zIndex = '9999';
        notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        
        if (type === 'success') {
            notification.style.backgroundColor = '#45CB85';
        } else {
            notification.style.backgroundColor = '#FF5252';
        }
        
        const icon = notification.querySelector('.notification-icon');
        icon.style.width = '24px';
        icon.style.height = '24px';
        icon.style.borderRadius = '50%';
        icon.style.backgroundColor = 'rgba(255,255,255,0.25)';
        icon.style.display = 'flex';
        icon.style.justifyContent = 'center';
        icon.style.alignItems = 'center';
        icon.style.fontWeight = 'bold';
        icon.style.color = 'white';
        
        const text = notification.querySelector('.notification-message');
        text.style.color = 'white';
        text.style.fontWeight = '500';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 50);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(10px)';
            notification.style.opacity = '0';
            
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 4000);
    }
});